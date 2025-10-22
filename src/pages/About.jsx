// src/pages/about.jsx
import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import img1 from '../assets/about/1.jpg';
import img2 from '../assets/about/2.jpg';
import img3 from '../assets/about/3.jpg';
import img4 from '../assets/about/4.jpg';
import img5 from '../assets/about/5.jpg';
import img6 from '../assets/about/6.jpg';
import southAfricaVideo from '../assets/about/SouthAfrica.mp4';
import Logo from '../assets/images/logo.svg';

import SpotifyDailyThree from '../components/SpotifyDailyThree';
import AlbumOfTheMonth from '../components/AlbumOfTheMonth';

import { spray1, spray4, spray6, star1, star2, circles } from '../assets/graphics';

// 🔒 No client-side env vars for Spotify anymore
const PLAYLIST_ID = "2Jyo5t2r0wGybqlL85baRT"; // your playlist id

function About() {
  return (
    <div className="about-wrapper">
      <Helmet>
        <title>About | Lily Taylor Portfolio</title>
        <meta
          name="description"
          content="Learn more about Lily Taylor — a multi-disciplinary creative and New Media student with a story shaped by the world, passion for design, and eye for purpose-driven digital experiences."
        />
      </Helmet>

      {/* Background art (unchanged) */}
      <img src={spray1} alt="Spray 1" className="bg-graphic spray spray1" />
      <img src={spray4} alt="Spray 4" className="bg-graphic spray spray4" />
      <img src={spray6} alt="Spray 6" className="bg-graphic spray spray6" />
      <img src={star1} alt="Star 1" className="bg-graphic star star1" />
      <img src={star2} alt="Star 2" className="bg-graphic star star2" />
      <img src={circles} alt="Circles" className="bg-graphic circles" />

      <div className="about-logo-container">
        <Link to="/">
          <img src={Logo} alt="Lily Taylor Logo" className="about-logo" />
        </Link>
      </div>

      <h1 className="about-title underline--spike">Hey, I’m Lily Taylor</h1>

      <div className="about-grid">
        <div className="about-block">
          <img src={img3} alt="Borneo" className="about-img" />
          <p className="about-text spiky-card">
            My journey began in the jungles of Miri, Borneo, where I was born premature as an elective caesarean...
          </p>
        </div>

        <div className="about-block reverse">
          <img src={img2} alt="Scotland" className="about-img" />
          <p className="about-text spiky-card">
            When I was 2, my family moved to Kent, England...
          </p>
        </div>

        <div className="about-block">
          <video className="about-img" autoPlay muted loop>
            <source src={southAfricaVideo} type="video/mp4" />
          </video>
          <p className="about-text spiky-card">
            I loved Ladysmith with every fibre of my being...
          </p>
        </div>

        <div className="about-block reverse">
          <img src={img1} alt="North Vancouver" className="about-img" />
          <p className="about-text spiky-card">
            Now I live in North Vancouver, and it feels like home...
          </p>
        </div>

        <div className="about-block">
          <img src={img4} alt="Soccer" className="about-img" />
          <p className="about-text spiky-card">
            Throughout my school years, I bounced between interests constantly...
          </p>
        </div>

        <div className="about-block reverse">
          <img src={img5} alt="Family background" className="about-img" />
          <p className="about-text spiky-card">
            Creativity has always been part of me...
          </p>
        </div>

        <div className="about-block">
          <img src={img6} alt="New Media" className="about-img" />
          <p className="about-text spiky-card">
            That’s what drew me to New Media and Web Development...
          </p>
        </div>

        <div className="about-block reverse">
          <p className="about-text spiky-card">
            <strong>What’s Next</strong><br />
            As I move forward in New Media and Web Development...
          </p>
        </div>

        {/* === MUSIC SECTION === */}
        <section className="about-music-section">
          <h2 className="about-music-title">Music</h2>
          <p className="about-music-desc">
            Music is a huge part of my life. Here are 3 songs from my playlist that refresh daily!
          </p>

          <div className="music-grid-2col">
            {/* LEFT: Daily 3 (now fetches from Netlify function) */}
            <div className="music-left">
              <SpotifyDailyThree />
            </div>

            {/* RIGHT: full playlist embed + dynamic AOTM */}
            <div className="music-right">
              <div className="music-panel">
                <h4 className="music-subtitle">Full Playlist</h4>
                <iframe
                  src={`https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator`}
                  width="100%"
                  height="200"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Full Playlist"
                />
              </div>

              <div className="music-panel">
                {/* Dynamic monthly pick from the SAME playlist using Netlify function */}
                <AlbumOfTheMonth playlistId={PLAYLIST_ID} />
              </div>
            </div>
          </div>
        </section>
        {/* === /MUSIC SECTION === */}
      </div>
    </div>
  );
}

export default About;
