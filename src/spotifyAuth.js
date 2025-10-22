// src/spotifyAuth.js

// --- ENV + Redirect setup ---
const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

// Spotify blocks plain "localhost" in redirect URIs.
// Use loopback IP locally; use your actual origin in prod.
const isLocal =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

export const REDIRECT_URI = isLocal
  ? "http://127.0.0.1:5173/callback"
  : `${window.location.origin}/callback`;

// Only read playlist scopes (no playback or private user data)
const SCOPES = ["playlist-read-private", "playlist-read-collaborative"];

// --- Storage keys ---
const TOK_KEY = "sp_token";
const EXP_KEY = "sp_token_exp";
const REF_KEY = "sp_refresh_token";
const VER_KEY = "sp_pkce_verifier";

// --- Helpers to store/restore tokens ---
function setTokens({ access_token, expires_in, refresh_token }) {
  const expiresAt = Date.now() + (expires_in - 60) * 1000; // refresh 1 min early
  localStorage.setItem(TOK_KEY, access_token);
  localStorage.setItem(EXP_KEY, String(expiresAt));
  if (refresh_token) localStorage.setItem(REF_KEY, refresh_token);
}

export function getAccessToken() {
  const tok = localStorage.getItem(TOK_KEY);
  const exp = Number(localStorage.getItem(EXP_KEY) || 0);
  if (tok && Date.now() < exp) return tok;
  return null;
}

async function refreshAccessToken() {
  const refresh_token = localStorage.getItem(REF_KEY);
  if (!refresh_token) return null;

  const params = new URLSearchParams({
    client_id: SPOTIFY_CLIENT_ID,
    grant_type: "refresh_token",
    refresh_token
  });

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString()
  });

  if (!res.ok) {
    console.error("[spotifyAuth] refresh failed:", res.status);
    return null;
  }

  const data = await res.json();
  setTokens({ ...data, refresh_token }); // keep old refresh if not returned
  return data.access_token;
}

export async function getValidToken() {
  const t = getAccessToken();
  if (t) return t;
  return await refreshAccessToken();
}

// --- PKCE helpers ---
async function sha256(plain) {
  const buf = new TextEncoder().encode(plain);
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return btoa(String.fromCharCode(...new Uint8Array(hash)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function randomString(len = 64) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  let out = "";
  for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

// --- Start OAuth login (Authorization Code + PKCE) ---
export async function startLogin() {
  if (!SPOTIFY_CLIENT_ID) {
    alert("Missing VITE_SPOTIFY_CLIENT_ID. Add it to .env.local and restart the dev server.");
    return;
  }

  const verifier = randomString(64);
  localStorage.setItem(VER_KEY, verifier);
  const challenge = await sha256(verifier);

  const params = new URLSearchParams({
    response_type: "code",
    client_id: SPOTIFY_CLIENT_ID,
    code_challenge_method: "S256",
    code_challenge: challenge,
    redirect_uri: REDIRECT_URI,
    scope: SCOPES.join(" ")
  });

  // Debug line so you can verify in DevTools
  console.log("[spotifyAuth] redirecting to Spotify…", REDIRECT_URI);

  window.location.assign(
    `https://accounts.spotify.com/authorize?${params.toString()}`
  );
}

// --- Handle /callback → exchange code for tokens ---
export async function handleCallback(url) {
  const code = new URL(url).searchParams.get("code");
  if (!code) {
    console.error("[spotifyAuth] No ?code in callback URL");
    return false;
  }

  const verifier = localStorage.getItem(VER_KEY);
  if (!verifier) {
    console.error("[spotifyAuth] Missing PKCE verifier in localStorage");
    return false;
  }

  const params = new URLSearchParams({
    client_id: SPOTIFY_CLIENT_ID,
    grant_type: "authorization_code",
    code,
    redirect_uri: REDIRECT_URI,
    code_verifier: verifier
  });

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString()
  });

  if (!res.ok) {
    const txt = await res.text();
    console.error("[spotifyAuth] token exchange failed:", res.status, txt);
    return false;
  }

  const data = await res.json();
  setTokens(data);
  localStorage.removeItem(VER_KEY);

  // Clean the URL and go home
  window.history.replaceState({}, "", "/");
  return true;
}
