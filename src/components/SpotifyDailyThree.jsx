// src/components/SpotifyDailyThree.jsx
import React, { useEffect, useMemo, useState } from "react";
import { getValidToken, startLogin } from "../spotifyAuth";
import "./SpotifyDailyThree.css";

const PLAYLIST_ID = import.meta.env.VITE_SPOTIFY_PLAYLIST_ID;

// Deterministic RNG so the picks change daily
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
  const [needLogin, setNeedLogin] = useState(false);
  const todayKey = useMemo(() => new Date().toISOString().slice(0, 10), []);

  useEffect(() => {
    (async () => {
      try {
        const token = await getValidToken();
        if (!token) {
          setNeedLogin(true);
          return;
        }

        const cacheKey = `sp_cache_${PLAYLIST_ID}_${todayKey}`;
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          setTracks(JSON.parse(cached));
          return;
        }

        const res = await fetch(
          `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks?limit=100`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (!res.ok) throw new Error("spotify fetch fail");
        const data = await res.json();
        const items = (data.items || [])
          .map((i) => i.track)
          .filter(Boolean)
          .map((t) => ({
            id: t.id,
            name: t.name,
            artists: t.artists?.map((a) => a.name).join(", ") || "",
            albumArt: t.album?.images?.[0]?.url,
            externalUrl: t.external_urls?.spotify,
          }));
        localStorage.setItem(cacheKey, JSON.stringify(items));
        setTracks(items);
      } catch {
        setNeedLogin(true);
      }
    })();
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

  if (needLogin) {
    return (
      <div className="sd3-wrap">
        <button className="btn--spike" onClick={startLogin}>
          Connect Spotify
        </button>
      </div>
    );
  }

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
        >
          <img src={t.albumArt} alt={t.name} />
          <div className="sd3-text">
            <h4>{t.name}</h4>
            <p>{t.artists}</p>
          </div>
        </a>
      ))}

    </div>
  );
}
