import React from "react";
import "../styles/Work.css";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import { Helmet } from "react-helmet";

const projects = [
  {
    title: "Punk & Pucker",
    path: "/projects/punkpucker",
    img: "public/Projects/punkpucker/heartbreaker-can.png",
    category: "Brand Identity · Packaging · Web",
    tagline: "Sour beer brand with bold visual identity, packaging system, and a digital experience."
  },
  {
    title: "Zine",
    path: "/projects/zine",
    img: "/zine/lilyzine5.jpg",
    category: "Editorial · Experimental",
    tagline: "A 14-page digital zine combining childhood photos, lyrics, and collage-based layout design."
  },
  {
    title: "Deftones Portrait",
    path: "/projects/deftones",
    img: "/Projects/deftones/deftones-cover.png",
    category: "Illustration · Digital Art",
    tagline: "Vector portrait inspired by Deftones’ 'Around the Fur', fully recreated in Illustrator."
  },
  {
    title: "Orbit Studios",
    path: "/projects/orbitstudios",
    img: "/Projects/Orbit/orbitlogo.png",
    category: "Branding · UX/UI",
    tagline: "Brand identity and web experience for a fictional recording studio for independent artists."
  },
  {
    title: "Project 5",
    path: "/projects/project5",
    img: "/Projects/project5.png",
    category: "Case Study Coming Soon",
    tagline: "New work in progress. This slot will be replaced with a full case study."
  },
  {
    title: "Project 6",
    path: "/projects/project6",
    img: "/Projects/project6.png",
    category: "Case Study Coming Soon",
    tagline: "New work in progress. This slot will be replaced with a full case study."
  },
  {
    title: "Project 7",
    path: "/projects/project7",
    img: "/Projects/project7.png",
    category: "Case Study Coming Soon",
    tagline: "New work in progress. This slot will be replaced with a full case study."
  },
  {
    title: "Project 8",
    path: "/projects/project8",
    img: "/Projects/project8.png",
    category: "Case Study Coming Soon",
    tagline: "New work in progress. This slot will be replaced with a full case study."
  }
];

function Work() {
  return (
    <div className="work-page">
      <Helmet>
        <title>My Work | Lily Taylor Portfolio</title>
        <meta
          name="description"
          content="Selected projects by Lily Taylor, including brand identity, web design, illustration, and interactive media created during BCIT’s New Media Design & Web Development program and beyond."
        />
      </Helmet>

      {/* Simple top nav with logo */}
      <header className="work-nav">
        <Link to="/" className="work-logo-link">
          <img
            src={Logo}
            alt="Lily Taylor portfolio logo"
            className="work-logo-img"
          />
        </Link>
        <nav className="work-nav-links">
          <Link to="/" className="work-nav-link">Home</Link>
          <span className="work-nav-divider">/</span>
          <span className="work-nav-current">Work</span>
        </nav>
      </header>

      <main className="work-wrapper">
        <section className="work-header">
          <p className="section-label">Selected Projects</p>
          <h1 className="work-title underline--spike">My Work</h1>
          <p className="work-subtitle">
            A curated selection of branding, web, illustration, and motion pieces.
            Each project includes process, context, and the role I played in bringing it to life.
          </p>
        </section>

        <section className="work-grid" aria-label="Project gallery">
          {projects.map((project) => (
            <Link
              key={project.path}
              to={project.path}
              className="project-card"
            >
              <div className="project-img-wrapper">
                <img
                  src={project.img}
                  alt={`${project.title} project thumbnail`}
                  className="project-img"
                />
              </div>

              <div className="project-content">
                {project.category && (
                  <span className="project-category-pill">{project.category}</span>
                )}
                <h2 className="project-title">{project.title}</h2>
                {project.tagline && (
                  <p className="project-tagline">{project.tagline}</p>
                )}
                <span className="project-link">View project</span>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Work;
