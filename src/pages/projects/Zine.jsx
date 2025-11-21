import React, { useState, useEffect } from "react";
import "../../styles/Zine.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const zinePages = [
  ["/zine/lilyzine1.jpg"],
  ["/zine/lilyzine2.jpg", "/zine/lilyzine3.jpg"],
  ["/zine/lilyzine4.jpg", "/zine/lilyzine5.jpg"],
  ["/zine/lilyzine6.jpg", "/zine/lilyzine7.jpg"],
  ["/zine/lilyzine8.jpg", "/zine/lilyzine9.jpg"],
  ["/zine/lilyzine10.jpg", "/zine/lilyzine11.jpg"],
  ["/zine/lilyzine12.jpg", "/zine/lilyzine13.jpg"],
  ["/zine/lilyzine14.jpg"],
];

const olympusImages = [
  "/zine/1.jpg",
  "/zine/2.jpg",
  "/zine/3.jpg",
  "/zine/4.JPG",
  "/zine/5.JPG",
  "/zine/6.JPG",
  "/zine/7.jpg",
  "/zine/8.jpg",
  "/zine/9.JPG",
  "/zine/10.JPG",
  "/zine/11.JPG",
  "/zine/12.JPG",
];

const indesignScreenshot = "/zine/inprogress.png";

export default function Zine() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.body.classList.add("zine-full-colour");
    return () => {
      document.body.classList.remove("zine-full-colour");
    };
  }, []);

  const goToPrevious = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    if (currentIndex < zinePages.length - 1) setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="zine-wrapper">
      <Helmet>
        <title>Lyrics of Life | Visual Zine by Lily Taylor</title>
        <meta name="description" content="Lyrics of Life — a visual zine by Lily Taylor exploring memory through photography, collage, and music." />
      </Helmet>

      <div className="zine-breadcrumb">
        <Link to="/work" className="zine-back-link">← Back to Work</Link>
      </div>

      <header className="zine-header">
        <h1 className="zine-title">Lyrics of Life</h1>
        <p className="zine-subtitle">
          A visual zine that treats memory, music, and childhood photos like a collage of feelings rather than a neat timeline.
        </p>

        <div className="zine-meta">
          <span>Role: Solo designer</span>
          <span>Tools: Photoshop, Illustrator, InDesign</span>
          <span>Format: 14 page digital zine</span>
        </div>
      </header>

      <section className="zine-gallery">
        <div
          key={currentIndex}
          className={`zine-spread ${zinePages[currentIndex].length === 1 ? "zine-single" : ""}`}
        >
          {zinePages[currentIndex].map((src, i) => (
            <img key={i} src={src} alt={`Zine page ${currentIndex + 1}-${i + 1}`} />
          ))}
        </div>

        <div className="zine-nav">
          <button className="zine-arrow" disabled={currentIndex === 0} onClick={goToPrevious}>←</button>
          <div className="zine-page-indicator">Spread {currentIndex + 1} of {zinePages.length}</div>
          <button className="zine-arrow" disabled={currentIndex === zinePages.length - 1} onClick={goToNext}>→</button>
        </div>
      </section>

      <section className="zine-description">
        <h2>Project overview</h2>
        <p>
          I wanted to see what would happen if I treated old photos and favorite lyrics like pieces in a collage instead of things to display perfectly.
          I dug through forgotten drives and found childhood images that were messy, emotional, and unpolished.
        </p>

        <h2>Process</h2>
        <p>
          In Photoshop, I distorted and rebuilt the photos. In Illustrator, I added type and shapes that act more like whispers than headlines.
          Then I built everything in InDesign as spreads so each turn feels like a shift in mood, not a page turn.
        </p>

        <h2>What I learned</h2>
        <p>
          This project let me work instinctively instead of following layout rules. It taught me that design doesn’t need to be perfect — it needs to be honest.
        </p>
      </section>

      <section className="zine-process">
        <h2>Behind the zine</h2>
        <p>
          All photos were shot on my Olympus 770 SW camera. I leaned into the grain, blur, and flash instead of correcting them.
          These are a few raw, unedited shots before they were torn apart and rebuilt into the zine.
        </p>

        {/* InDesign FIRST */}
        <div className="zine-indesign-block">
          <div className="zine-indesign-text">
            <h3>InDesign layout in progress</h3>
            <p>This screenshot shows the active build with guides and frames visible, before final cleanup.</p>
          </div>
          <div className="zine-indesign-image">
            <img src={indesignScreenshot} alt="InDesign workspace" loading="lazy" />
          </div>
        </div>

        {/* Film Strip Carousel */}
        <div className="zine-carousel">
          <div className="zine-carousel-track">
            {[...olympusImages, ...olympusImages].map((src, index) => (
              <div className="zine-carousel-item" key={`${src}-${index}`}>
                <img src={src} alt={`Raw photo ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
