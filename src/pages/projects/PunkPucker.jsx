import React from "react";
import "../../styles/Project.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Logo from "../../assets/images/logo.svg";

function PunkPucker() {
  return (
    <div className="project-page project-wrapper">
      <Helmet>
        <title>Punk & Pucker | Sour Beer Branding by Lily Taylor</title>
        <meta
          name="description"
          content="A start-to-finish look at Punk & Pucker, a fictional sour beer brand developed and refined throughout my program at BCIT. Includes logo exploration, packaging, box design, and Illustrator assets."
        />
      </Helmet>

      {/* Floating logo back to home */}
      <Link to="/" className="floating-logo">
        <img src={Logo} alt="Lily Taylor portfolio logo" />
      </Link>

      {/* BACK TO WORK PAGE BUTTON */}
      <Link to="/work" className="back-to-work-btn">
        ← Back to Work
      </Link>

      {/* Background floating logos (decorative) */}
      <img
        src="/Projects/punkpucker/punkpucker-logo.png"
        className="punk-logo punk-logo1"
        alt=""
        aria-hidden="true"
      />
      <img
        src="/Projects/punkpucker/punkpucker-logo.png"
        className="punk-logo punk-logo2"
        alt=""
        aria-hidden="true"
      />
      <img
        src="/Projects/punkpucker/punkpucker-logo.png"
        className="punk-logo punk-logo3"
        alt=""
        aria-hidden="true"
      />
      <img
        src="/Projects/punkpucker/punkpucker-logo.png"
        className="punk-logo punk-logo4"
        alt=""
        aria-hidden="true"
      />

      {/* HERO – final cans first */}
      <section className="project-hero" style={{ "--section-index": 0 }}>
        <div className="project-hero-media cans-hero">
          <img src="/Projects/punkpucker/heartbreaker-can.png" alt="Heartbreaker sour ale can" />
          <img src="/Projects/punkpucker/hyper-zest-can.png" alt="Hyper Zest sour ale can" />
          <img src="/Projects/punkpucker/zap-can.png" alt="Zap sour ale can" />
        </div>

        <div className="project-hero-text">
          <h1 className="project-title">Punk & Pucker</h1>
          <p className="project-description">
            Punk & Pucker is a fictional sour beer brand I’ve been evolving throughout my time at BCIT.
            It started as a small Photoshop assignment and slowly turned into a full visual system with cans,
            box packaging, patterns, and mockups.
          </p>
          <p className="project-description">
            This project shows how I work through branding: starting with messy ideas, pushing them too far,
            then refining them into something bold, cohesive, and shelf-ready.
          </p>
        </div>
      </section>

      {/* FINAL CAN LINEUP */}
      <section className="project-section" style={{ "--section-index": 1 }}>
        <h2>Final Flavour Lineup</h2>
        <p>
          Heartbreaker, Hyper Zest, and Zap—each flavour has its own palette, but all three share the same neon,
          chaotic, punchy energy.
        </p>
        <div className="project-images project-gallery">
          <img src="/Projects/punkpucker/heartbreaker.png" alt="Heartbreaker flat can artwork" />
          <img src="/Projects/punkpucker/hyper-zest.png" alt="Hyper Zest flat can artwork" />
          <img src="/Projects/punkpucker/zap.png" alt="Zap flat can artwork" />
        </div>
      </section>

      {/* TERM 1 ORIGINS */}
      <section className="project-section project-split" style={{ "--section-index": 2 }}>
        <div className="project-media">
          <img src="/Projects/punkpucker/firstversion.png" alt="First Punk & Pucker business card concept" />
        </div>
        <div className="project-text">
          <h2>Where It Started</h2>
          <p>
            The very first Punk & Pucker artifact—a simple business card from a Term 1 Photoshop brief—sparked
            the brand direction: neon pink, lips, and bold type.
          </p>
          <p>
            It was flat and chaotic, but it planted the seed for everything that came after.
          </p>
        </div>
      </section>

      {/* LOGO SKETCHES */}
      <section className="project-section project-split reverse" style={{ "--section-index": 3 }}>
        <div className="project-media">
          <img src="/Projects/punkpucker/logosketch.jpg" alt="Punk & Pucker logo sketches" />
        </div>
        <div className="project-text">
          <h2>Logo Exploration</h2>
          <p>
            I experimented with citrus shapes, lips, and chunky lettering to find something fizzy, loud,
            and recognizably “Punk & Pucker.”
          </p>
        </div>
      </section>

      {/* PUSHING LOGO TOO FAR */}
      <section
        className="project-section project-split logo-experiment-section"
        style={{ "--section-index": 4 }}
      >
        <div className="project-media">
          <img src="/Projects/punkpucker/punklogomaybe.png" alt="Early mouth-based logo exploration" />
        </div>
        <div className="project-text">
          <h2>Pushing the Logo Too Far</h2>
          <p>
            This version was dramatic and chaotic—almost “Rocky Horror.” It helped me understand what parts to keep
            and what to simplify.
          </p>
        </div>
      </section>

      {/* FINAL LOGO (SMALLER) */}
      <section
        className="project-section project-split logo-final-section"
        style={{ "--section-index": 5 }}
      >
        <div className="project-media logo-final-media">
          <img src="/Projects/punkpucker/punkpucker-logo.png" alt="Final Punk & Pucker logo" />
        </div>
        <div className="project-text">
          <h2>Settling on the Final Logo</h2>
          <p>
            The final mark keeps the lip silhouette but tones down the chaos. It’s loud, fun, and legible at small sizes.
          </p>
        </div>
      </section>

      {/* BOX DIELINE */}
      <section className="project-section project-split reverse" style={{ "--section-index": 6 }}>
        <div className="project-media">
          <img src="/Projects/punkpucker/boxrawpsd.png" alt="Punk & Pucker 12-pack box dieline" />
        </div>
        <div className="project-text">
          <h2>12-Pack Box Design</h2>
          <p>
            A full dieline mockup exploring readability, hierarchy, and how patterns wrap around corners.
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="project-section" style={{ "--section-index": 7 }}>
        <div className="project-media">
          <video className="project-video" controls src="/Projects/punkpucker/boxview.mp4" />
        </div>
        <p className="project-caption">360° mockup of the 12-pack.</p>
      </section>

      {/* RIOT → HEARTBREAKER */}
      <section className="project-section" style={{ "--section-index": 8 }}>
        <h2>From Riot to Heartbreaker</h2>
        <p>
          The Riot can was my first attempt—exciting but messy. Heartbreaker refined that chaos into structure.
        </p>

        <div className="project-images evolution-row">
          <img
            className="small-exploration"
            src="/Projects/punkpucker/candesignmaybe.png"
            alt="Early Riot can design exploration"
          />
          <img
            src="/Projects/punkpucker/heartbreaker.png"
            alt="Heartbreaker final can artwork"
          />
        </div>
      </section>

      {/* FINAL MOCKUPS */}
      <section className="project-section" style={{ "--section-index": 9 }}>
        <h2>Final Can Mockups</h2>
        <div className="project-images project-gallery">
          <img src="/Projects/punkpucker/heartbreaker-can.png" alt="Heartbreaker sour beer can mockup" />
          <img src="/Projects/punkpucker/hyper-zest-can.png" alt="Hyper Zest sour beer can mockup" />
          <img src="/Projects/punkpucker/zap-can.png" alt="Zap sour beer can mockup" />
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="project-section" style={{ "--section-index": 10 }}>
        <h2>Applications & Mockups</h2>
        <div className="project-images project-gallery">
          <img src="/Projects/punkpucker/cardmockup1.png" alt="Punk & Pucker business card mockup front" />
          <img src="/Projects/punkpucker/cardmockup2.png" alt="Punk & Pucker business card mockup back" />
          <img src="/Projects/punkpucker/sticker-mockup.jpg" alt="Punk & Pucker sticker mockup" />
        </div>
      </section>

      {/* REFLECTION */}
      <section className="project-section project-reflection" style={{ "--section-index": 11 }}>
        <h2>Reflection</h2>
        <p>
          Punk & Pucker has followed me across courses and represents a huge shift in how I approach branding:
          emotional, neon, chaotic—but intentional underneath.
        </p>
      </section>

      {/* STYLE GUIDE – EMBEDDED PDF */}
      <section
        className="project-section styleguide-section"
        style={{ "--section-index": 12 }}
      >
        <h2>Brand Style Guide</h2>

        <div className="styleguide-wrapper">
          <iframe
            className="styleguide-frame"
            src="/Projects/punkpucker/punkpuckerpres.pdf#page=1&zoom=70"
            title="Punk & Pucker Style Guide PDF"
          />
          <p className="project-caption">
            If the viewer doesn’t load,&nbsp;
            <a
              href="/Projects/punkpucker/punkpuckerpres.pdf"
              target="_blank"
              rel="noreferrer"
            >
              open the full style guide
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

export default PunkPucker;
