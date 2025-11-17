// src/components/SpotifyDailyThree.jsx
import React from "react";

const TRACKS = [
  {
    id: "1",
    title: "Song One",
    artist: "Artist One",
    url: "https://open.spotify.com/embed/track/3G1PpL6Lmi0aykPGZUgQnE?utm_source=generator",
  },
  {
    id: "2",
    title: "Song Two",
    artist: "Artist Two",
    url: "https://open.spotify.com/embed/track/5wj4EoZItL6SNCBe1KNKjt?utm_source=generator",
  },
  {
    id: "3",
    title: "Song Three",
    artist: "Artist Three",
    url: "https://open.spotify.com/embed/track/0u2P5u6lvoDfwTYjAADbn4?utm_source=generator",
  },
];

export default function SpotifyDailyThree() {
  return (
    <div className="spotify-daily-three">
      {TRACKS.map((track) => (
        <div key={track.id} className="spotify-track">
          <iframe
            src={track.url}
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={`${track.title} by ${track.artist}`}
          />
        </div>
      ))}
    </div>
  );
}
