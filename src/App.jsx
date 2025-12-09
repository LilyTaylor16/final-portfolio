// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import "./App.css";
import "./styles/variables.css";

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
import BeyondRides from "./pages/projects/BeyondRides";
import TypographicAnatomy from "./pages/projects/TypographicAnatomy";
import Scrap from "./pages/projects/Scrap"; // ← new import
import Project8 from "./pages/projects/Project8";

function App() {
  return (
    <Router>
      <Helmet>
        <link rel="icon" type="image/png" href="/favicon.png" />

        <meta
          property="og:title"
          content="Lily Taylor | Designer and Creative Developer"
        />
        <meta
          property="og:description"
          content="Portfolio of Lily Taylor with branding work web projects motion and interactive pieces created during BCIT New Media Design and Web Development and personal practice."
        />
        <meta
          property="og:image"
          content="https://lily-taylor.ca/pink-star.png"
        />
        <meta property="og:url" content="https://lily-taylor.ca" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Lily Taylor | Designer and Creative Developer"
        />
        <meta
          name="twitter:description"
          content="Portfolio of Lily Taylor with design motion and interactive digital work."
        />
        <meta
          name="twitter:image"
          content="https://lily-taylor.ca/pink-star.png"
        />
      </Helmet>

      <div className="app-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />

            {/* Project pages */}
            <Route path="/projects/punkpucker" element={<PunkPucker />} />
            <Route path="/projects/zine" element={<Zine />} />
            <Route path="/projects/deftones" element={<Deftones />} />
            <Route path="/projects/orbitstudios" element={<OrbitStudios />} />
            <Route path="/projects/beyondrides" element={<BeyondRides />} />
            <Route
              path="/projects/typographicanatomy"
              element={<TypographicAnatomy />}
            />

            {/* Scrap replaces Project 7 */}
            <Route path="/projects/scrap" element={<Scrap />} />

            {/* Future project */}
            <Route path="/projects/project8" element={<Project8 />} />

            {/* Catch all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
