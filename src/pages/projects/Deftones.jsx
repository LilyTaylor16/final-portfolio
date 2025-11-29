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
          content="A stylized illustrated reinterpretation of the Deftones record Around the Fur by Lily Taylor. Created in Illustrator with the pen tool and layered color work."
        />
      </Helmet>

      <Link to="/" className="deftones-logo-link">
        <img
          src={Logo}
          alt="Lily Taylor portfolio logo"
          className="deftones-logo-img"
        />
      </Link>

      <header className="deftones-hero">
        <div className="deftones-tag">Illustrator study</div>
        <h1 className="deftones-title">Deftones portrait</h1>
        <p className="deftones-subtitle">
          A vector portrait inspired by the Deftones record <em>Around the Fur</em>
        </p>
      </header>

      {/* main layout: image and overview together so it feels alive and not like stacked blocks */}
      <section className="deftones-main">
        <div className="deftones-main-image-wrap">
          <img
            src="/Projects/deftones/deftones-cover.png"
            alt="Deftones Around the Fur inspired portrait illustration by Lily Taylor"
            className="deftones-image"
          />
        </div>

        <div className="deftones-main-text">
          <h2 className="deftones-section-title">Project overview</h2>
          <p>
            This portrait is my own version of the Deftones record <em>Around the Fur</em>. I wanted to take the original
            cover and turn it into a clean vector build that still feels sweaty, noisy and a little uneasy the way the record sounds.
          </p>
          <p>
            I built everything in Illustrator with the pen tool and an art reference. No tracing and no filters. Just slow plotting of shapes
            and color and a lot of zoomed in moments staring at anchor points.
          </p>
          <p>
            It fits really well with the rest of my work because it is sharp and graphic but still very emotional and rooted in music.
          </p>
          <p className="deftones-tools">
            Tools used: Adobe Illustrator and a lot of patience.
          </p>
        </div>
      </section>

      {/* thought process */}
      <section className="deftones-section deftones-process">
        <h2 className="deftones-section-title">Thought process</h2>
        <p>
          I picked this record because the cover already has such a strong mood. It feels humid and a bit blurred and I was curious
          if I could keep that feeling while turning it into a very clean vector portrait.
        </p>
        <p>
          I started by blocking in the main shapes of the face and shoulders, then kept breaking everything down into smaller pieces.
          Shadows, mid tones and highlights all sit in separate layers so I could push and pull the mood with color.
        </p>
        <p>
          The main focus was on light and color rather than exact likeness. I wanted it to feel like a person you recognise from the record
          without trying to copy every tiny detail from the photo.
        </p>
      </section>

      {/* process video */}
      <section className="deftones-section deftones-video-section">
        <div className="deftones-section-header-row">
          <h2 className="deftones-section-title">Process video</h2>
          <span className="deftones-pill">Layers breakdown</span>
        </div>
        <p className="deftones-video-text">
          I made this short video to show the different parts of the build and how many shapes are sitting under the final image.
          It is all vector work built by hand. No quick tricks. Just a lot of small decisions.
        </p>
        <div className="deftones-video-frame">
          <video
            className="deftones-video"
            controls
            src="/Projects/deftones/Portrait.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* reflection */}
      <section className="deftones-section deftones-reflection">
        <h2 className="deftones-section-title">Reflection</h2>
        <p>
          This project ended up taking a lot longer than I expected. Building a portrait this way is basically a patience test.
          It is all small moves and tiny tweaks instead of big dramatic changes.
        </p>
        <p>
          It made me way more confident with the pen tool and with building faces in a graphic way. I also learned how much color can push a mood
          even when the shapes stay really simple.
        </p>
        <p>
          I like this piece because it feels honest to how I see music and design. It is clean and sharp on the surface but there is a lot of feeling
          and noise sitting underneath.
        </p>
      </section>

      <Link to="/work" className="deftones-back-button">
        ← Back to Work
      </Link>
    </div>
  );
}

export default Deftones;
