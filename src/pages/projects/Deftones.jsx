import React from 'react';
import '../../styles/deftones.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import { Helmet } from "react-helmet";

function Deftones() {
  return (
    <div className="deftones-page">
      <Helmet>
        <title>Deftones Portrait | Illustrator Project by Lily Taylor</title>
        <meta
          name="description"
          content="A stylized illustrated reinterpretation of Deftones' 'Around the Fur' album cover by Lily Taylor. Created entirely in Illustrator using the pen tool and in-depth reference research."
        />
      </Helmet>

      <Link to="/" className="deftones-logo-link">
        <img src={Logo} alt="Logo" className="deftones-logo-img" />
      </Link>
    
      <header className="deftones-hero">
        <h1 className="deftones-title">Deftones</h1>
        <p className="deftones-subtitle">An illustrated reinterpretation of <em>Around the Fur</em></p>
      </header>
    
      <section className="deftones-gallery">
        <img
          src="/Projects/deftones/deftones-cover.png"
          alt="Deftones Portrait Project"
          className="deftones-image"
        />
      </section>

      <section className="deftones-description">
        <p>
          This portrait is my own stylized take on Deftones’ <em>Around the Fur</em> album cover.
          Instead of mimicking the photo style, I reimagined the mood through minimalist illustration,
          recreating the entire image using only the pen tool in Illustrator, and an artsistic reference photo.
        </p>
        <p>
          Every line was plotted manually — this project pushed my patience, sharpened my precision,
          and really deepened my understanding of color balance and visual texture in flat vector work.
        </p>
        <p>
          I wanted the final piece to feel emotional, a little offbeat, and full of layered meaning — just like the music.
        </p>
        <p>
          Tools used: Adobe Illustrator and a lot of reference research.
        </p>
      </section>

      <Link to="/work" className="deftones-back-button">← Back to Work</Link>
    </div>
  );
}

export default Deftones;
