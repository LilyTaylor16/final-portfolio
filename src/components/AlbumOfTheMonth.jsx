// src/components/AlbumOfTheMonth.jsx
import React from "react";

export default function AlbumOfTheMonth({ albumId, blurb }) {
  const id = albumId || import.meta.env.VITE_SPOTIFY_AOTM_ID;

  if (!id) {
    return null;
  }

  const embedUrl = `https://open.spotify.com/embed/album/${id}?utm_source=generator`;

  return (
    <div className="album-of-the-month">
      <h4 className="music-subtitle">Album of the Month</h4>
      {blurb && <p className="album-blurb">{blurb}</p>}
      <iframe
        src={embedUrl}
        width="100%"
        height="200"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Album of the Month"
      />
    </div>
  );
}
