// src/components/SpotifyDailyThree.jsx
import React, { useEffect, useMemo, useState } from "react";
import "./SpotifyDailyThree.css";

// Safe to expose publicly:
const PLAYLIST_ID = "2Jyo5t2r0wGybqlL85baRT"; // ← your playlist ID

// Deterministic RNG so the picks change daily (same for everyone that day)
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

export default function SpotifyDailyThree() {
  const [tracks, setTracks] = useState([]);
  const todayKey = useMemo(() => new Date().toISOString().slice(0, 10), []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        // cache by playlist + day so we don't refetch constantly
        const cacheKey = `sp_cache_${PLAYLIST_ID}_${todayKey}`;
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (!cancelled) setTracks(parsed);
          return;
        }

        const res = await fetch(
          `/.netlify/functions/spotify-playlist?playlistId=${encodeURIComponent(PLAYLIST_ID)}`
        );
        if (!res.ok) throw new Error("Playlist fetch failed");

        const data = await res.json();
        const items = (data.items || []).filter(Boolean);
        localStorage.setItem(cacheKey, JSON.stringify(items));
        if (!cancelled) setTracks(items);
      } catch (e) {
        console.error("SpotifyDailyThree load error:", e);
        if (!cancelled) setTracks([]); // fail silent, no ugly UI
      }
    })();

    return () => { cancelled = true; };
  }, [todayKey]);

  const picks = useMemo(() => {
    if (!tracks.length) return [];
    const rng = seedRandom(todayKey);
    const indices = new Set();
    while (indices.size < Math.min(3, tracks.length)) {
      indices.add(Math.floor(rng() * tracks.length));
    }
    return [...indices].map((i) => tracks[i]);
  }, [tracks, todayKey]);

  if (!picks.length) return null;

  return (
    <div className="sd3-wrap">
      {picks.map((t) => (
        <a
          key={t.id}
          className="sd3-card"
          href={t.externalUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${t.name} by ${t.artists}`}
        >
          {t.albumArt && <img src={t.albumArt} alt={t.name} />}
          <div className="sd3-text">
            <h4>{t.name}</h4>
            <p>{t.artists}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
