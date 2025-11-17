// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="nf-wrapper">
      <Helmet>
        <title>404 | Lost In The Void</title>
        <meta
          name="description"
          content="This page doesn’t exist — drift back to reality."
        />
      </Helmet>

      <div className="nf-content">
        <h1 className="nf-404" data-glitch="404">404</h1>
        <p className="nf-subtitle">Page Not Found</p>

        <Link to="/" className="nf-home-btn">Return Home</Link>
      </div>
    </div>
  );
}
