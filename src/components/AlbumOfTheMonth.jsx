// src/components/AlbumOfTheMonth.jsx
import React, { useEffect, useMemo, useState } from "react";
import "./AlbumOfTheMonth.css";

// Deterministic monthly RNG (changes on the 1st of each month, same for all visitors)
function seedRandom(seed) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h += 0x6D2B79F5;
    let t = Math.imul(h ^ (h >>> 15), 1 | h);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function AlbumOfTheMonth({
  albumId,                 // if provided, we use this (simple mode)
  playlistId,              // if provided (and albumId omitted), we fetch & pick from this playlist
  heading = "Album of the Month",
  blurb,
  height = 200,
}) {
  const [pickedAlbum, setPickedAlbum] = useState(albumId || "");
  const [chosen, setChosen] = useState(null); // holds { mode: "track", trackUrl }
  const monthKey = useMemo(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
  }, []);

  useEffect(() => {
    // If you explicitly pass albumId, just lock to that.
    if (albumId) {
      setPickedAlbum(albumId);
      setChosen(null);
      return;
    }
    if (!playlistId) {
      // no props = nothing to render
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        const cacheKey = `aotm_cache_${playlistId}_${monthKey}`;
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (!cancelled) {
            setPickedAlbum(parsed.albumId || "");
            setChosen(parsed.chosen || null);
          }
          return;
        }

        const res = await fetch(
          `/.netlify/functions/spotify-playlist?playlistId=${encodeURIComponent(playlistId)}`
        );
        if (!res.ok) {
          console.error("[AOTM] playlist fetch failed:", res.status);
          throw new Error("Playlist fetch failed");
        }
        const data = await res.json();

        // Build a unique-ish list from tracks. (We only have track-level info)
        const albums = [];
        const seen = new Set();
        for (const item of data.items || []) {
          const trackUrl = item.externalUrl || "";
          // heuristic key so we don’t pick the same album art repeatedly
          const albumKey = item.albumArt || `${item.name}-${item.artists}`;
          if (!seen.has(albumKey)) {
            seen.add(albumKey);
            albums.push({
              trackUrl,
              name: item.name,
              artists: item.artists,
              albumArt: item.albumArt,
            });
          }
        }

        if (!albums.length) throw new Error("No tracks/albums found in playlist");

        // Pick deterministically for the month
        const rng = seedRandom(monthKey);
        const idx = Math.floor(rng() * albums.length);
        const pick = albums[idx];

        // For now we embed the track (clean + no auth). If you want real album IDs,
        // we can upgrade the Netlify function to return t.album.id as well.
        const chosenVal = { mode: "track", trackUrl: pick.trackUrl };

        // Cache BOTH albumId and chosen so we can restore on next load
        const payload = { albumId: "", chosen: chosenVal };
        localStorage.setItem(cacheKey, JSON.stringify(payload));

        if (!cancelled) {
          setPickedAlbum("");     // signals "track mode"
          setChosen(chosenVal);
        }
      } catch (e) {
        console.error("[AOTM] error:", e);
        if (!cancelled) {
          // Graceful no-op (nothing renders) — or set a fallback albumId here if you want
          setPickedAlbum(albumId || "");
          setChosen(null);
        }
      }
    })();

    return () => { cancelled = true; };
  }, [albumId, playlistId, monthKey]);

  // ----- RENDER -----

  // Hardcoded album mode
  if (pickedAlbum) {
    return (
      <section className="aotm">
        <h2 className="aotm__title">{heading}</h2>
        <div className="aotm__embed">
          <iframe
            title="Album of the Month"
            src={`https://open.spotify.com/embed/album/${pickedAlbum}?utm_source=generator&theme=0`}
            width="100%"
            height={height}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
        {blurb && <p className="aotm__blurb">{blurb}</p>}
      </section>
    );
  }

  // Dynamic track-based mode (from playlist)
  if (playlistId && chosen?.mode === "track" && chosen.trackUrl) {
    const embedSrc = chosen.trackUrl.replace(
      "open.spotify.com/track",
      "open.spotify.com/embed/track"
    );
    return (
      <section className="aotm">
        <h2 className="aotm__title">{heading}</h2>
        <div className="aotm__embed">
          <iframe
            title="Album of the Month"
            src={`${embedSrc}?utm_source=generator&theme=0`}
            width="100%"
            height={height}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
        {blurb && <p className="aotm__blurb">{blurb}</p>}
      </section>
    );
  }

  // Nothing to show yet
  return null;
}
