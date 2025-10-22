import { useEffect } from "react";
import { handleCallback } from "../spotifyAuth";

export default function SpotifyCallback() {
  useEffect(() => { handleCallback(window.location.href); }, []);
  return (
    <div style={{ padding: "4rem 1rem" }}>
      Connecting Spotify…
    </div>
  );
}
