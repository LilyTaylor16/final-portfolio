// src/pages/projects/BeyondRides.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import '../../styles/beyondrides.css';
import Logo from '../../assets/images/logo.svg';

function BeyondRides() {
  return (
    <div className="beyond-page">
      <Helmet>
        <title>Beyond Rides | Promotional Video Project by Lily Taylor</title>
        <meta
          name="description"
          content="Beyond Rides is a promotional storytelling video created by Lily Taylor with teammates Emily and Kaveen. This project includes filming, audio work, editing, and branding."
        />
      </Helmet>

      {/* logo */}
      <Link to="/" className="beyond-logo-link">
        <img
          src={Logo}
          alt="Lily Taylor portfolio logo"
          className="beyond-logo-img"
        />
      </Link>

      {/* hero */}
      <header className="beyond-hero">
        <div className="beyond-tag">Film and audio project</div>
        <h1 className="beyond-title">Beyond Rides</h1>
        <p className="beyond-subtitle">
          A full day shoot with original audio, editing and emotional storytelling.
        </p>
      </header>

      {/* highlight strip */}
      <div className="beyond-highlights">
        <p>Full day shoot</p>
        <p>Original sound design</p>
        <p>Collaborative direction</p>
      </div>

      {/* main video */}
      <section className="beyond-section beyond-video-main">
        <div className="beyond-section-header-row">
          <h2 className="beyond-section-title">Final promotional video</h2>
          <span className="beyond-pill">Watch first</span>
        </div>

        <p className="beyond-video-text">
          This is the final Beyond Rides video that we built from start to finish. 
          We planned the story, filmed everything, recorded the audio and pulled it all together into one piece.
        </p>

        <div className="beyond-video-frame">
          <video
            controls
            className="beyond-video"
            src="/Projects/beyondrides/OFFICIALBeyond_Rides.mp4"
          />
        </div>
      </section>

      {/* overview */}
      <section className="beyond-section beyond-overview">
        <h2 className="beyond-section-title">Project overview</h2>
        <p>
          Beyond Rides is a storytelling video that I made with{" "}
          <a 
            href="https://emilyrsmith.ca/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="beyond-link"
          >
            Emily
          </a>{" "}
          and{" "}
          <a 
            href="https://www.kaveenwickramasinghe.ca/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="beyond-link"
          >
            Kaveen
          </a>. 
          We created a fictional ride share company called Beyond Rides that focuses on care, emotional safety and community.
        </p>

        <p>
          None of us had made a full promotional video before, so we were learning as we went. 
          We filmed over multiple days, carried gear around the city and spent a lot of late nights editing. 
          It pushed us a lot but it also became one of my favourite memories from that term.
        </p>

        <p>
          Working on this together made me,{" "}
          <a 
            href="https://emilyrsmith.ca/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="beyond-link"
          >
            Emily
          </a>{" "}
          and{" "}
          <a 
            href="https://www.kaveenwickramasinghe.ca/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="beyond-link"
          >
            Kaveen
          </a>{" "}
          feel a lot closer. 
          We spent so much time filming and trying things out that the project became just as much about the experience as the finished video.
        </p>
      </section>

      {/* my role */}
      <section className="beyond-section beyond-role">
        <h2 className="beyond-section-title">My role</h2>
        <p>
          I was the main actor in the video, but I also did most of the work behind the scenes. 
          I edited around eighty percent of the full piece, including timing, pacing, cuts and transitions so the story felt right.
        </p>

        <p>
          I handled all of the sound design, sound effects, ambience, dialogue levels and mixing so each scene felt balanced and intentional. 
          We recorded everything ourselves, so I cleaned and rebuilt the audio in Adobe Audition.
        </p>

        <p>
          I also designed the Beyond Rides logo, created the on screen animations and helped shape the visual direction of the brand in the video.
        </p>
      </section>

      {/* audio screenshot */}
      <section className="beyond-section beyond-audio">
        <h2 className="beyond-section-title">Sound editing and audio mixing</h2>
        <p className="beyond-section-intro">
          We built every layer of audio from scratch. Music, ambient sound, dialogue and the small details that make the story feel real. 
          This screenshot is from the Adobe Audition session where I mixed everything together.
        </p>

        <img
          src="/Projects/beyondrides/Audiofile.png"
          alt="Adobe Audition project screenshot for Beyond Rides"
          className="beyond-audio-image"
        />
      </section>

      {/* bloopers */}
      <section className="beyond-section beyond-bloopers">
        <div className="beyond-section-header-row">
          <h2 className="beyond-section-title">Bloopers</h2>
          <span className="beyond-pill">Just for fun</span>
        </div>

        <p className="beyond-section-intro">
          This project was a lot of work but also genuinely fun. 
          We spent full days filming and waiting for the right moments, so of course we ended up with plenty of funny clips and random moments.
        </p>

        <div className="beyond-video-frame">
          <video
            controls
            className="beyond-video"
            src="/Projects/beyondrides/Bloopers.mp4"
          />
        </div>
      </section>

      {/* reflection */}
      <section className="beyond-section beyond-reflection">
        <h2 className="beyond-section-title">Reflection</h2>
        <p>
          Beyond Rides is one of those projects where I learned a lot by just doing it. 
          Taking on filming, acting, editing and sound work at the same time made me feel more confident with video and storytelling.
        </p>

        <p>
          It also made me want to keep exploring this kind of work. 
          I like emotional and narrative driven projects and this one made me feel excited about doing more of them.
        </p>

        <p>
          On top of that, it gave me a memory that I really care about. 
          Making this with{" "}
          <a 
            href="https://emilyrsmith.ca/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="beyond-link"
          >
            Emily
          </a>{" "}
          and{" "}
          <a 
            href="https://www.kaveenwickramasinghe.ca/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="beyond-link"
          >
            Kaveen
          </a>{" "}
          brought us closer and made the whole thing feel personal in a way that I am still proud of.
        </p>
      </section>

      <Link to="/work" className="beyond-back-button">
        ← Back to Work
      </Link>
    </div>
  );
}

export default BeyondRides;
