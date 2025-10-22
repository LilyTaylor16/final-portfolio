import React, { useEffect } from 'react';
import './Home.css';
import { spray4, circles, star1, squares } from '../assets/graphics';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import { Helmet } from "react-helmet";

// Rotator
import BoxRotator from "../components/BoxRotator";

// ---- Import ABOUT images from src/assets/about (Vite style) ----
import about1 from "../assets/about/1.jpg";
import about2 from "../assets/about/2.jpg";
import about3 from "../assets/about/3.jpg";
import about4 from "../assets/about/4.jpg";
import about5 from "../assets/about/5.jpg";
import about6 from "../assets/about/6.jpg";

// ---- NEW: Hand-drawn SVG headers (homepage only) ----
import WorkHeader from "../assets/graphics/headers/WorkBlack.svg";
import AboutHeader from "../assets/graphics/headers/AboutBlack.svg";
import ContactHeader from "../assets/graphics/headers/ContactBlack.svg";

function Home() {
  // keep your fade-in utility, harmless
  useEffect(() => {
    const els = document.querySelectorAll('.preview-section, .split-full');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // RIGHT-SIDE ROTATORS
  const projectSlides = [
    { src: "/Projects/punkpucker/heartbreaker-can.png", alt: "Punk Pucker — Heartbreaker" },
    { src: "/Projects/punkpucker/hyper-zest-can.png",  alt: "Punk Pucker — Hyper Zest" },
    { src: "/Projects/Orbit/w7.png",                   alt: "Orbit Studios — Wireframe" },
    { src: "/Projects/deftones/deftones-cover.png",    alt: "Deftones Portrait" },
    { src: "/zine/lilyzine5.jpg",                      alt: "Zine Spread" },
  ];

  // About images: imported above from src/assets/about
  const aboutSlides = [
    { src: about6, alt: "About photo 6" },
    { src: about5, alt: "About photo 5" },
    { src: about4, alt: "About photo 4" },
    { src: about3, alt: "About photo 3" },
    { src: about2, alt: "About photo 2" },
    { src: about1, alt: "About photo 1" },
  ];

  // Contact: reuse existing graphics you already import (no new assets)
  const contactSlides = [
    { src: star1,   alt: "Graphic star" },
    { src: squares, alt: "Graphic squares" },
    { src: circles, alt: "Graphic circles" },
    { src: spray4,  alt: "Graphic spray" },
  ];

  return (
    <div className="home-wrapper">
      <Helmet>
        <title>Lily Taylor | Designer & Creative Developer</title>
        <meta
          name="description"
          content="Explore the portfolio of Lily Taylor — a multidisciplinary designer and creative developer based in Vancouver. Bold, expressive, and built with purpose."
        />
      </Helmet>

      {/* Background Graphics (unchanged) */}
      <img src={circles} alt="Circles" className="bg-graphic circles" />
      <img src={circles} alt="Circles" className="bg-graphic circles dup1" />
      <img src={circles} alt="Circles" className="bg-graphic circles dup2" />

      <img src={squares} alt="Squares" className="bg-graphic squares" />
      <img src={squares} alt="Squares" className="bg-graphic squares dup1" />

      <img src={star1} alt="Star" className="bg-graphic star1" />
      <img src={star1} alt="Star" className="bg-graphic star1 dup1" />

      <img src={spray4} alt="Spray" className="spray-bg" />

      {/* Hero (unchanged) */}
      <section className="home container">
        <div className="hero">
          <div className="home-logo-container">
            <img src={Logo} alt="Lily Taylor Logo" className="home-logo" />
          </div>

          <h1 className="hero-title">Lily Taylor</h1>
          <p className="hero-tagline">Design & Motion student — turning ideas into visuals & stories</p>
          <Link to="/work" className="hero-btn btn--spike">See My Work</Link>
        </div>
      </section>

      {/* FLOW WRAPPER: vertical leading line + nodes tie sections together */}
      <div className="flow">
        {/* Split: Work (formerly Projects) */}
        <section className="split-full minimal-split">
          <div className="flow-node" aria-hidden="true" />
          <div className="split-col split-left">
            {/* Replace text title with SVG image */}
            <h2 className="split-title rule-to-spine" aria-label="Work">
              <img src={WorkHeader} alt="Work" className="split-title-img" />
            </h2>
            <p className="split-sub">Branding, UI, motion, interactive</p>
            <div className="split-links">
              <Link to="/projects/punkpucker">Punk Pucker</Link>
              <Link to="/projects/orbitstudios">Orbit Studios</Link>
              <Link to="/projects/zine">Zine</Link>
              <Link to="/projects/deftones">Deftones</Link>
            </div>
          </div>
          <div className="split-col split-right">
            {/* Faster rotation */}
            <BoxRotator slides={projectSlides} interval={1800} />
          </div>
        </section>

        {/* Split: About */}
        <section className="split-full minimal-split">
          <div className="flow-node" aria-hidden="true" />
          <div className="split-col split-left">
            {/* Replace text title with SVG image */}
            <h2 className="split-title rule-to-spine" aria-label="About">
              <img src={AboutHeader} alt="About" className="split-title-img" />
            </h2>
            <p className="split-sub">A little bit about why I am the way I am. </p>
            <div className="split-links">
              <Link to="/about">Read my story →</Link>
            </div>
          </div>
          <div className="split-col split-right">
            {/* Faster rotation */}
            <BoxRotator slides={aboutSlides} interval={1600} />
          </div>
        </section>

        {/* Split: Contact */}
        <section className="split-full minimal-split">
          <div className="flow-node" aria-hidden="true" />
          <div className="split-col split-left">
            {/* Replace text title with SVG image */}
            <h2 className="split-title rule-to-spine" aria-label="Contact">
              <img src={ContactHeader} alt="Contact" className="split-title-img" />
            </h2>
            <p className="split-sub">Wanna chat?</p>
            <div className="split-links">
              <Link to="/contact">Get in touch →</Link>
            </div>
          </div>
          <div className="split-col split-right">
            {/* Slightly faster */}
            <BoxRotator slides={contactSlides} interval={1500} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
