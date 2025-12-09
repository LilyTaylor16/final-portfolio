// src/pages/Projects/Sardine.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Sardines.css";

import sardinesmockup from "/Projects/sardines/sardinesmockup.png";
import sardines2 from "/Projects/sardines/sardines2.png";
import fishlogo from "/Projects/sardines/3dfishbw.png";

const Sardine = () => {
  return (
    <div className="project-page project-wrapper sardines-page">
      {/* top back link */}
      <div className="project-breadcrumb">
        <Link to="/work" className="project-back-link">
          ← Back to Work
        </Link>
      </div>

      {/* HERO */}
      <section className="project-hero" style={{ "--section-index": 0 }}>
        <div className="project-hero-text">
          <p className="project-label">Project 8 · Packaging · Illustration</p>
          <h1 className="project-title">Sardines Packaging</h1>
          <p className="project-description">
            A bright sardine can concept that leans into playful boutique
            packaging instead of traditional seafood visuals. The goal was to
            make the can feel like a collectible object rather than just a
            pantry staple.
          </p>
        </div>

        <div className="project-hero-media">
          <img src={sardinesmockup} alt="Sardine can mockup grid" />
        </div>
      </section>

      {/* META */}
      <section className="project-section" style={{ "--section-index": 1 }}>
        <h2>Overview</h2>
        <p className="project-text">
          This project started as a single sardine can design prompt and
          evolved into a miniature brand world. The can became a surface for
          character illustration, type, colour play and layout exploration.
        </p>

        <div className="project-meta-grid">
          <div>
            <h3>Role</h3>
            <p className="project-text">
              Illustration, Packaging Design, Mockup Direction
            </p>
          </div>
          <div>
            <h3>Tools</h3>
            <p className="project-text">Illustrator, Photoshop</p>
          </div>
          <div>
            <h3>Deliverables</h3>
            <p className="project-text">
              Label artwork, logo mark, final can mockup
            </p>
          </div>
          <div>
            <h3>Timeline</h3>
            <p className="project-text">Single term</p>
          </div>
        </div>
      </section>

      {/* LABEL */}
      <section className="project-split" style={{ "--section-index": 2 }}>
        <div className="project-text-block">
          <h2>Label Illustration</h2>
          <p className="project-text">
            The main character design uses bright pink, star accents and a
            playful illustrated fish. The label intentionally avoids traditional
            ocean-blue seafood aesthetics and instead goes pop, graphic and
            boutique.
          </p>
          <p className="project-text">
            The loose handwritten mark contrasts the structured can layout
            so the package still reads as a real product rather than novelty.
          </p>
        </div>

        <div className="project-media">
          <img src={sardines2} alt="Flat sardine label design" />
        </div>
      </section>

      {/* LOGO MARK */}
      <section
        className="project-split reverse"
        style={{ "--section-index": 3 }}
      >
        <div className="project-media logo-experiment-section">
          <img src={fishlogo} alt="Monochrome sardine logo mark" />
        </div>

        <div className="project-text-block">
          <h2>Secondary Logo</h2>
          <p className="project-text">
            The black and white fish mark functions as the brand’s reduced
            identity. It sits cleanly on the can base and works when the full
            illustration is too loud or needs scaling down.
          </p>
          <p className="project-text">
            Keeping a minimal stamp option ensures the brand can stretch across
            future flavours without losing recognition.
          </p>
        </div>
      </section>

      {/* MOCKUP + REFLECTION */}
      <section
        className="project-section project-reflection"
        style={{ "--section-index": 4 }}
      >
        <h2>Mockup & Reflection</h2>
        <p className="project-text">
          The grid mockup pushes the idea of multiple SKUs and makes the can
          feel collectible and repeatable. The repetition also highlights how
          the character illustration doubles as a pattern system.
        </p>
        <p className="project-text">
          If expanded, this line would explore additional flavours, lid
          embellishments and label backs while maintaining a playful tone.
        </p>

        <div className="project-gallery">
          <img src={sardinesmockup} alt="Grid sardine mockup layout" />
        </div>
      </section>

      {/* floating button bottom-right */}
      <Link to="/work" className="sardines-back-btn">
        ← Back to Work
      </Link>
    </div>
  );
};

export default Sardine;
