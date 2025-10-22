// netlify/functions/spotify-playlist.js
export const handler = async (event) => {
    const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;
    const playlistId = (event.queryStringParameters?.playlistId || "").trim();
  
    if (!playlistId) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing playlistId" }) };
    }
  
    try {
      // 1) App-only token (no user login)
      const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64"),
        },
        body: "grant_type=client_credentials",
      });
  
      if (!tokenRes.ok) {
        const err = await tokenRes.text();
        throw new Error("Token request failed: " + err);
      }
  
      const { access_token } = await tokenRes.json();
  
      // 2) Pull up to 200 tracks
      let items = [];
      let url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=100`;
      while (url && items.length < 200) {
        const res = await fetch(url, { headers: { Authorization: `Bearer ${access_token}` } });
        if (!res.ok) throw new Error("Spotify fetch failed");
        const data = await res.json();
  
        (data.items || []).forEach((i) => {
          const t = i.track;
          if (!t) return;
          items.push({
            id: t.id,
            name: t.name,
            artists: (t.artists || []).map((a) => a.name).join(", "),
            albumArt: t.album?.images?.[0]?.url || "",
            externalUrl: t.external_urls?.spotify || "",
          });
        });
  
        url = data.next;
      }
  
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=600",
        },
        body: JSON.stringify({ count: items.length, items }),
      };
    } catch (err) {
      console.error("Spotify function error:", err);
      return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
    }
  };
  