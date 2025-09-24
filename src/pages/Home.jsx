import React, { useEffect } from 'react';
import './Home.css';
import { spray4, circles, star1, squares } from '../assets/graphics';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import { Helmet } from "react-helmet";

// Import your custom SVG headers
import AboutHeader from "../assets/graphics/headers/aboutblack.svg";
import WorkHeader from "../assets/graphics/headers/workblack.svg";
import ContactHeader from "../assets/graphics/headers/contactblack.svg";


function Home() {

  // Fade-in on scroll for preview sections
  useEffect(() => {
    const els = document.querySelectorAll('.preview-section');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

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

      {/* Main */}
      <section className="home container">
        {/* Hero */}
        <div className="hero">
          <div className="home-logo-container">
            <img src={Logo} alt="Lily Taylor Logo" className="home-logo" />
          </div>

          <h1 className="hero-title">Lily Taylor</h1>
          <p className="hero-tagline">Design & Motion student — turning ideas into visuals & stories</p>
          <Link to="/work" className="hero-btn btn--spike">See My Work</Link>
        </div>

        {/* Featured Project */}
        <div className="featured-project spiky-card">
          <h2 className="section-heading">Featured Project</h2>
          <div className="project-card spiky-card">
            <h2 className="home-project-title">Punk Pucker Sour Beer Brand</h2>
            <p className="project-desc">
              Packaging and brand system exploring bold form, color, and market positioning.
            </p>
            <Link to="/projects/punkpucker" className="view-project btn--spike">
              View Project →
            </Link>
          </div>
        </div>

        {/* Scrollable Previews with SVG headers */}
        <section id="about-preview" className="preview-section spiky-card">
          <img src={AboutHeader} alt="About" className="svg-header" />
          <p>
            Multidisciplinary designer focused on purposeful, detail-driven work across branding, motion, and front-end.
          </p>
          <Link to="/about" className="preview-link btn--spike">Read More →</Link>
        </section>

        <section id="work-preview" className="preview-section spiky-card">
          <img src={WorkHeader} alt="Work" className="svg-header" />
          <p>
            Selected projects in branding, UI, motion, and interactive media.
          </p>
          <Link to="/work" className="preview-link btn--spike">Explore Projects →</Link>
        </section>

        <section id="contact-preview" className="preview-section spiky-card">
          <img src={ContactHeader} alt="Contact" className="svg-header" />
          <p>
            Available for internships, collaborations, and freelance inquiries.
          </p>
          <Link to="/contact" className="preview-link btn--spike">Get in Touch →</Link>
        </section>
      </section>
    </div>
  );
}

export default Home;
