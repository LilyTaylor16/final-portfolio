// src/components/AlbumOfTheMonth.jsx
import React from "react";
import "./AlbumOfTheMonth.css";

export default function AlbumOfTheMonth({ albumId, heading = "Album of the Month", blurb }) {
  if (!albumId) return null;

  return (
    <section className="aotm">
      <h2 className="aotm__title">{heading}</h2>

      {/* Spotify album embed — no routing, no 404 */}
      <div className="aotm__embed">
        <iframe
          title="Album of the Month"
          src={`https://open.spotify.com/embed/album/${albumId}?utm_source=generator&theme=0`}
          width="100%"
          height="200"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>

      {blurb && <p className="aotm__blurb">{blurb}</p>}
    </section>
  );
}
