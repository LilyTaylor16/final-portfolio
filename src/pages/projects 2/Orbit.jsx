import React from 'react';
import '../../styles/orbitstudios.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import { Helmet } from "react-helmet";

function OrbitStudios() {
  const wireframes = Array.from({ length: 14 }, (_, i) => `/Projects/Orbit/w${i + 1}.png`);

  return (
    <div className="orbit-page">
      <Helmet>
        <title>Orbit Studios | Web Design + Agile Project by Lily Taylor</title>
        <meta
          name="description"
          content="Orbit Studios is a fictional music production studio project designed by Lily Taylor. Created using Agile Scrum methodology, this project showcases full branding, UI/UX design, and web development."
        />
      </Helmet>

      <Link to="/" className="orbit-logo-link">
        <img src={Logo} alt="Logo" className="orbit-logo-img" />
      </Link>

      <header className="orbit-hero">
        <h1 className="orbit-title">Orbit Studios</h1>
        <p className="orbit-subtitle">Project Management • Agile Scrum • Full Website Build</p>
      </header>

      <section className="orbit-intro">
        <p>
          Orbit Studios is a fictional recording studio created as part of a collaborative project using the Agile Scrum methodology. I came up with the concept and visual identity for Orbit, and served as the group's graphic designer and creative lead.
        </p>
        <p>
          Our goal was to design a clean, intuitive website for indie artists looking for affordable access to studio space, equipment, audio/video services, and creative guidance.
        </p>
      </section>

      <section className="orbit-section">
        <h2>My Role</h2>
        <p>
          I designed the logo, colour palette, and overall brand aesthetic. I also collaborated on wireframes and user flows in Figma, wrote copy for the site, and made design decisions that emphasized creativity, comfort, and accessibility for independent artists.
        </p>
      </section>

      <section className="orbit-section">
        <h2>Sprint Overview</h2>
        <ul className="orbit-list">
          <li><strong>Sprint 1:</strong> Initial wireframes, value statement, logo concepts, booking flow</li>
          <li><strong>Sprint 2:</strong> WordPress setup, layout implementation, UI refinement</li>
          <li><strong>Sprint 3:</strong> Hi-fi wireframes, booking plugin research, social mockups</li>
          <li><strong>Sprint 4:</strong> Switched to hand-coded site, finalized visuals and content</li>
          <li><strong>Sprint 5:</strong> Polishing and presenting final deliverables</li>
        </ul>
      </section>

      <section className="orbit-section">
        <h2>Branding & Assets</h2>
        <div className="orbit-brand-grid">
          <img src="/Projects/Orbit/orbitlogo.png" alt="Orbit Logo" />
          <img src="/Projects/Orbit/logo2.png" alt="Secondary Logo" />
          <img src="/Projects/Orbit/colourpalette.png" alt="Colour Palette" />
          <img src="/Projects/Orbit/insta.png" alt="Instagram Mockup 1" />
          <img src="/Projects/Orbit/insta2.png" alt="Instagram Mockup 2" />
        </div>
      </section>

      <section className="orbit-section">
        <h2>Wireframes</h2>
        <div className="orbit-wireframe-grid">
          {wireframes.map((src, index) => (
            <img key={index} src={src} alt={`Wireframe ${index + 1}`} />
          ))}
        </div>
      </section>

      <Link to="/work" className="orbit-back-button">← Back to Work</Link>
    </div>
  );
}

export default OrbitStudios;
