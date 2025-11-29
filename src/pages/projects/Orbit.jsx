import React from 'react';
import '../../styles/orbitstudios.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import { Helmet } from "react-helmet";

function Orbit() {
  return (
    <div className="orbit-page">
      <Helmet>
        <title>Orbit Studios | Web and brand project by Lily Taylor</title>
        <meta
          name="description"
          content="Orbit Studios is a fictional music studio project by Lily Taylor. It brings together branding, web design and group work using a sprint based process."
        />
      </Helmet>

      <Link to="/" className="orbit-logo-link">
        <img
          src={Logo}
          alt="Lily Taylor portfolio logo"
          className="orbit-logo-img"
        />
      </Link>

      <header className="orbit-hero">
        <div className="orbit-tag">Web and brand project</div>
        <h1 className="orbit-title">Orbit Studios</h1>
        <p className="orbit-subtitle">
          A recording studio concept for indie artists
        </p>
      </header>

      {/* main overview */}
      <section className="orbit-main">
        <div className="orbit-main-image-wrap">
          <img
            src="/Projects/Orbit/orbitlogo.png"
            alt="Orbit Studios logo"
            className="orbit-main-image"
          />
        </div>

        <div className="orbit-main-text">
          <h2 className="orbit-section-title">Project overview</h2>
          <p>
            Orbit Studios is a fictional recording studio based in Vancouver that focuses on smaller indie artists. The idea was to build
            a space and a site that feels supportive and creative rather than cold and technical.
          </p>
          <p>
            This project was part of a group assignment where we had to plan a full studio experience, from value statement and sitemap
            to booking flow, branding and a working site.
          </p>
          <p>
            The site gives artists clear paths to explore rooms, services, engineers and booking without feeling lost, while still keeping
            a strong visual mood tied to music and coloured light.
          </p>
        </div>
      </section>

      {/* my role */}
      <section className="orbit-section orbit-role">
        <h2 className="orbit-section-title">My role</h2>
        <p>
          I came up with the concept for Orbit and acted as the designer for the project. I created the logo, colour system and overall
          visual direction, and helped shape the story of Orbit as a studio built for artists run by people who care about
          the creative process.
        </p>
        <p>
          I worked on logo ideas, the style guide, layout direction and social mockups, and supported the team during the build so the
          final site still felt aligned with the brand.
        </p>
      </section>

      {/* goals */}
      <section className="orbit-section orbit-goals">
        <h2 className="orbit-section-title">Project goals</h2>
        <ul className="orbit-list">
          <li>Make the site easy for indie artists to move through without stress</li>
          <li>Show rooms, services and engineers in a clear organised way</li>
          <li>Keep the brand bold and music driven without making the layout hard to read</li>
          <li>Use a sprint based process that still leaves room for creative decisions</li>
        </ul>
      </section>

      {/* branding */}
      <section className="orbit-section orbit-branding">
        <h2 className="orbit-section-title">Branding and visuals</h2>
        <p className="orbit-section-intro">
          The brand leans into bright magenta, deep dark backgrounds and studio imagery with coloured light. The logo nods to a record
          and an orbit at the same time, tying back to the name and the idea of pulling artists into a creative space.
        </p>

        <div className="orbit-brand-grid">
          <img src="/Projects/Orbit/orbitlogo.png" alt="Orbit logo" />
          <img src="/Projects/Orbit/logo2.png" alt="Orbit secondary logo" />
          <img src="/Projects/Orbit/colourpalette.png" alt="Orbit colour palette" />
          <img src="/Projects/Orbit/insta.png" alt="Orbit Instagram mockup one" />
          <img src="/Projects/Orbit/insta2.png" alt="Orbit Instagram mockup two" />
        </div>
      </section>

      {/* PDF */}
      <section className="orbit-section orbit-pdf">
        <h2 className="orbit-section-title">Full project document</h2>
        <p className="orbit-section-intro">
          This PDF shows the full Orbit Studios process including the concept, moodboard, style guide, sitemap, flows and presentation
          work that shaped the final site.
        </p>

        <div className="orbit-pdf-frame">
          <iframe
            src="/Projects/Orbit/Orbit%20Studios.pdf"
            title="Orbit Studios PDF"
            className="orbit-pdf-embed"
          ></iframe>
        </div>

        <a
          className="orbit-pdf-button"
          href="/Projects/Orbit/Orbit%20Studios.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View the full PDF in a new tab
        </a>
      </section>

      {/* process */}
      <section className="orbit-section orbit-process">
        <h2 className="orbit-section-title">Process and sprints</h2>
        <p>
          We used a sprint based process. Early on we made the value statement, sitemap and booking flow, then moved into early layouts.
          We first set up the site in a content system, but later moved to a hand coded build to get more control over layout and style.
        </p>
        <ul className="orbit-list">
          <li><strong>Sprint one:</strong> concept, value statement, logo ideas and booking flow</li>
          <li><strong>Sprint two:</strong> base layout, navigation and content planning</li>
          <li><strong>Sprint three:</strong> high detail wireframes and social mockups</li>
          <li><strong>Sprint four:</strong> coded build and visual refinement</li>
          <li><strong>Sprint five:</strong> polish, report and presentation</li>
        </ul>
      </section>

      {/* reflection */}
      <section className="orbit-section orbit-reflection">
        <h2 className="orbit-section-title">Reflection</h2>
        <p>
          Orbit Studios taught me a lot about working in a team and letting other people shape the final result. I had to balance my
          own visual ideas with the practical side of what we could build.
        </p>
        <p>
          It also pushed me to think about brand systems in a fuller way. Every touchpoint needed to feel connected to the same universe.
        </p>
        <p>
          Even with the usual group chaos, I am proud of how Orbit turned out. It still feels close to my style and has a clear concept.
        </p>
      </section>

      <Link to="/work" className="orbit-back-button">
        ← Back to Work
      </Link>
    </div>
  );
}

export default Orbit;
