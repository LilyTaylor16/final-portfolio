import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import "./App.css";
import "./styles/variables.css";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

// Project Pages
import PunkPucker from './pages/projects/PunkPucker';
import Zine from './pages/projects/Zine';
import Deftones from './pages/projects/Deftones';
import OrbitStudios from './pages/projects/Orbit';
import Project5 from "./pages/projects/Project5";
import Project6 from "./pages/projects/Project6";
import Project7 from "./pages/projects/Project7";
import Project8 from "./pages/projects/Project8";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/punkpucker" element={<PunkPucker />} />
            <Route path="/projects/zine" element={<Zine />} />
            <Route path="/projects/deftones" element={<Deftones />} />
            <Route path="/projects/orbitstudios" element={<OrbitStudios />} />
            <Route path="/projects/project5" element={<Project5 />} />
            <Route path="/projects/project6" element={<Project6 />} />
            <Route path="/projects/project7" element={<Project7 />} />
            <Route path="/projects/project8" element={<Project8 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
