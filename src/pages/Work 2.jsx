import React, { useState } from "react";
import "../styles/Work.css";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import { Helmet } from "react-helmet";

const projects = [
  {
    title: "Punk Pucker",
    path: "/projects/punkpucker",
    img: "/Projects/project1.png",
  },
  {
    title: "Zine",
    path: "/projects/zine",
    img: "/public/zine/lilyzine5.jpg",
  },
  {
    title: "Deftones",
    path: "/projects/deftones",
    img: "/Projects/deftones/deftones-cover.png",
  },
  {
    title: "Orbit Studios",
    path: "/projects/orbitstudios",
    img: "/Projects/Orbit/orbitlogo.png",
  },
  {
    title: "Project 5",
    path: "/projects/project5",
    img: "/assets/Projects/project5.png",
  },
  {
    title: "Project 6",
    path: "/projects/project6",
    img: "/assets/Projects/project6.png",
  },
  {
    title: "Project 7",
    path: "/projects/project7",
    img: "/assets/Projects/project7.png",
  },
  {
    title: "Project 8",
    path: "/projects/project8",
    img: "/assets/Projects/project8.png",
  },
];

function Work() {
  const angle = 360 / projects.length;
  const [rotation, setRotation] = useState(0);

  const handleNext = () => {
    setRotation((prev) => prev - angle);
  };

  const handlePrev = () => {
    setRotation((prev) => prev + angle);
  };

  return (
    <div className="work-page">
      <Helmet>
        <title>My Work | Lily Taylor Portfolio</title>
        <meta
          name="description"
          content="Explore Lily Taylor’s creative portfolio featuring branding, interactive media, illustration, and UI/UX design projects. View featured works from her time at BCIT's New Media Design and Web Development program."
        />
      </Helmet>

      <Link to="/" className="work-logo-link">
        <img src={Logo} alt="Logo" className="work-logo-img" />
      </Link>

      <h1 className="carousel-title">My Work</h1>

      <div className="carousel-wrapper">
        <div className="carousel">
          <div
            className="carousel-ring"
            style={{
              transform: `rotateY(${rotation}deg)`,
            }}
          >
            {projects.map((project, index) => (
              <div
                className="carousel-slide"
                key={index}
                style={{
                  transform: `rotateY(${index * angle}deg) translateZ(400px)`,
                }}
              >
                <Link to={project.path}>
                  <img src={project.img} alt={project.title} />
                  <h3>{project.title}</h3>
                  <p>View Project →</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-controls">
          <button onClick={handlePrev} className="carousel-btn">
            ←
          </button>
          <button onClick={handleNext} className="carousel-btn">
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Work;
