import React from 'react';
import './Home.css';
import { spray4, circles, star1, squares } from '../assets/graphics';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="home-wrapper">
      <Helmet>
        <title>Lily Taylor | Designer & Creative Developer</title>
        <meta
          name="description"
          content="Explore the portfolio of Lily Taylor — a multidisciplinary designer and creative developer based in Vancouver. Bold, expressive, and built with purpose."
        />
      </Helmet>

      {/* Background Graphics */}
      <img src={circles} alt="Circles" className="bg-graphic circles" />
      <img src={circles} alt="Circles" className="bg-graphic circles dup1" />
      <img src={circles} alt="Circles" className="bg-graphic circles dup2" />

      <img src={squares} alt="Squares" className="bg-graphic squares" />
      <img src={squares} alt="Squares" className="bg-graphic squares dup1" />

      <img src={star1} alt="Star" className="bg-graphic star1" />
      <img src={star1} alt="Star" className="bg-graphic star1 dup1" />

      <img src={spray4} alt="Spray" className="spray-bg" />

      {/* Hero Section */}
      <section className="home container">
        <div className="hero">
          <div className="home-logo-container">
            <img src={Logo} alt="Lily Taylor Logo" className="home-logo" />
          </div>

          <h1 className="hero-title">Lily Taylor</h1>
          <p className="hero-tagline">Visual storytelling through colour, chaos, and care.</p>
          <Link to="/work" className="hero-btn">See My Work</Link>
        </div>

        {/* Featured Project */}
        <div className="featured-project">
          <h2 className="section-heading">Featured Project</h2>
          <div className="project-card">
            <h2 className="home-project-title">Punk Pucker Sour Beer Brand</h2>
            <p className="project-desc">
              A bold, pop-art beer identity with attitude. Designed to punch expectations in the mouth.
            </p>
            <Link to="/projects/punkpucker" className="view-project">
              View Project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
