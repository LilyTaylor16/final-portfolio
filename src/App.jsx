import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import "./App.css";
import "./styles/variables.css";

// Helmet
import { Helmet } from "react-helmet";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Project Pages
import PunkPucker from "./pages/projects/PunkPucker";
import Zine from "./pages/projects/Zine";
import Deftones from "./pages/projects/Deftones";
import OrbitStudios from "./pages/projects/Orbit";
import Project5 from "./pages/projects/Project5";
import Project6 from "./pages/projects/Project6";
import Project7 from "./pages/projects/Project7";
import Project8 from "./pages/projects/Project8";

// Spotify OAuth callback
import SpotifyCallback from "./pages/SpotifyCallback";

function App() {
  return (
    <Router>
      {/* GLOBAL META + OG TAGS */}
      <Helmet>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />

        {/* Primary Meta */}
        <title>Lily Taylor | Designer & Creative Technologist</title>
        <meta
          name="description"
          content="Portfolio of Lily Taylor — a creative designer building bold, expressive, alternative digital experiences through UX/UI, branding, motion, and experimental visuals."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Lily Taylor | Portfolio" />
        <meta
          property="og:description"
          content="Explore experimental design, branding, motion, UX/UI, and creative projects by Lily Taylor."
        />
        <meta property="og:url" content="https://lily-taylor.ca" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lily-taylor.ca/favicon.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lily Taylor | Portfolio" />
        <meta
          name="twitter:description"
          content="Expressive, bold, alternative visual design — view Lily Taylor's work."
        />
        <meta name="twitter:image" content="https://lily-taylor.ca/favicon.png" />
      </Helmet>

      <div className="app-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />

            {/* Project Pages */}
            <Route path="/projects/punkpucker" element={<PunkPucker />} />
            <Route path="/projects/zine" element={<Zine />} />
            <Route path="/projects/deftones" element={<Deftones />} />
            <Route path="/projects/orbitstudios" element={<OrbitStudios />} />
            <Route path="/projects/project5" element={<Project5 />} />
            <Route path="/projects/project6" element={<Project6 />} />
            <Route path="/projects/project7" element={<Project7 />} />
            <Route path="/projects/project8" element={<Project8 />} />

            {/* Spotify Redirect */}
            <Route path="/callback" element={<SpotifyCallback />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
