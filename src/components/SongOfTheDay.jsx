
import React from "react";
import { SONGS } from "../data/songs";

function getSongOfTheDay() {
  if (!SONGS || SONGS.length === 0) return null;

  const msPerDay = 1000 * 60 * 60 * 24;
  const today = new Date();
  const dayNumber = Math.floor(today.getTime() / msPerDay);

  const index = dayNumber % SONGS.length;
  return SONGS[index];
}

function SongOfTheDay() {
  const song = getSongOfTheDay();

  if (!song) {
    return (
      <div className="music-card">
        <p className="music-label">Song of the Day</p>
        <p className="music-title">No songs added yet.</p>
      </div>
    );
  }

  return (
    <div className="music-card">
      <p className="music-label">Song of the Day</p>
      <h3 className="music-title">{song.title}</h3>
      <p className="music-artist">{song.artist}</p>

      {song.embedUrl && (
        <div className="music-embed-wrapper">
          <iframe
            style={{ borderRadius: "12px" }}
            src={song.embedUrl}
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={`Spotify player for ${song.title}`}
          ></iframe>
        </div>
      )}

      <p className="music-note">
        Rotates daily from a list of songs I’m currently obsessed with.
      </p>
    </div>
  );
}

export default SongOfTheDay;
