import React from "react";
import "../../styles/Project.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function PunkPucker() {
  return (
    <div className="project-wrapper">
      <Helmet>
        <title>Punk Pucker | Sour Beer Branding by Lily Taylor</title>
        <meta
          name="description"
          content="Explore Punk Pucker — a pop-art sour beer brand identity designed by Lily Taylor. Bold typography, electric colors, rebellious energy, and expressive packaging collide."
        />
      </Helmet>

      <Link to="/" className="floating-logo">
        <img src="/logo.svg" alt="Lily Taylor Logo" />
      </Link>

      <img src="/Projects/punkpucker/punkpucker-logo.png" alt="Punk Pucker Logo" className="punk-logo punk-logo1" />
      <img src="/Projects/punkpucker/punkpucker-logo.png" alt="Punk Pucker Logo" className="punk-logo punk-logo2" />
      <img src="/Projects/punkpucker/punkpucker-logo.png" alt="Punk Pucker Logo" className="punk-logo punk-logo3" />
      <img src="/Projects/punkpucker/punkpucker-logo.png" alt="Punk Pucker Logo" className="punk-logo punk-logo4" />

      <section className="project-intro" style={{ "--section-index": 0 }}>
        <h1 className="project-title">Punk Pucker</h1>
        <p className="project-description">
          Punk Pucker is more than a sour beer brand — it’s a loud, unapologetic celebration of design rebellion.
          I created this brand identity as a way to experiment with expressive typography, unexpected colour combinations,
          and dynamic layouts. I used Illustrator for everything from hand-drawing logos to refining layouts,
          and went through dozens of iterations — exploring what "punk" could look like when bottled.
        </p>
        <p className="project-description">
          This project pushed me to dig into market research, design theory, and packaging trends while trusting
          my instincts and aesthetic judgment. It’s one of the projects I’m most proud of — not just because it looks cool,
          but because it captures my process: bold ideas, experimentation, and obsessive visual refinement.
        </p>
      </section>

      <section className="project-section" style={{ "--section-index": 1 }}>
        <h2>Logo Development</h2>
        <p>
          The logo was created using a custom hand-drawn font, built with the Pen Tool to capture a gritty,
          handmade feel. It features a pair of lips and warped lettering that reflects the mouth-puckering
          flavour of sour beer.
        </p>
      </section>

      <section className="project-section" style={{ "--section-index": 2 }}>
        <h2>Fonts</h2>
        <p>
          Two custom fonts were used: Subway New York SC and Subway New York Std, paired with a fully hand-built
          custom logotype. This combination of clean sans-serifs and chaotic brush typography supports the brand’s contrast of order vs. rebellion.
        </p>
      </section>

      <section className="project-section" style={{ "--section-index": 3 }}>
        <h2>Colour Palette</h2>
        <p>
          The palette is loud, electric, and youthful — a combination of neon pinks, bright greens, soft aquas,
          and intense yellows, grounded by black for maximum contrast.
        </p>
        <ul className="color-palette">
          <li style={{ background: "#ff0080" }}></li>
          <li style={{ background: "#c80076" }}></li>
          <li style={{ background: "#ff00ff" }}></li>
          <li style={{ background: "#ff1493" }}></li>
          <li style={{ background: "#dfff00" }}></li>
          <li style={{ background: "#99ff00" }}></li>
          <li style={{ background: "#00eaff" }}></li>
          <li style={{ background: "#000000" }}></li>
        </ul>
      </section>

      <section className="project-section" style={{ "--section-index": 4 }}>
        <h2>Can Labels</h2>
        <p>Each flavour received a unique label with a consistent layout and distinct colour scheme:</p>
        <div className="project-images">
          <img src="/Projects/punkpucker/heartbreaker.png" alt="Heartbreaker Label" />
          <img src="/Projects/punkpucker/hyper-zest.png" alt="Hyper Zest Label" />
          <img src="/Projects/punkpucker/zap.png" alt="Zap Label" />
        </div>
      </section>

      <section className="project-section" style={{ "--section-index": 5 }}>
        <h2>Final Can Mockups</h2>
        <div className="project-images">
          <img src="/Projects/punkpucker/heartbreaker-can.png" alt="Heartbreaker Can" />
          <img src="/Projects/punkpucker/hyper-zest-can.png" alt="Hyper Zest Can" />
          <img src="/Projects/punkpucker/zap-can.png" alt="Zap Can" />
        </div>
      </section>

      <section className="project-section" style={{ "--section-index": 6 }}>
        <h2>Sticker + Poster Mockups</h2>
        <p>
          These applications explore how Punk Pucker could live in real environments — used as
          posters, stickers, and graphics in urban spaces with grungy, rebellious aesthetics.
        </p>
        <div className="project-images">
          <img src="/Projects/punkpucker/sticker-mockup.jpg" alt="Sticker Mockup" />
        </div>
      </section>
    </div>
  );
}

export default PunkPucker;
