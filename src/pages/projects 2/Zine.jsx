import React, { useState } from "react";
import "../../styles/Zine.css";
import { Helmet } from "react-helmet";

const zinePages = [
  ["/zine/lilyzine1.jpg"],
  ["/zine/lilyzine2.jpg", "/zine/lilyzine3.jpg"],
  ["/zine/lilyzine4.jpg", "/zine/lilyzine5.jpg"],
  ["/zine/lilyzine6.jpg", "/zine/lilyzine7.jpg"],
  ["/zine/lilyzine8.jpg", "/zine/lilyzine9.jpg"],
  ["/zine/lilyzine10.jpg", "/zine/lilyzine11.jpg"],
  ["/zine/lilyzine12.jpg", "/zine/lilyzine13.jpg"],
  ["/zine/lilyzine14.jpg"]
];

export default function Zine() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < zinePages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="zine-wrapper">
      <Helmet>
        <title>Lyrics of Life | Visual Zine by Lily Taylor</title>
        <meta 
          name="description" 
          content="Explore 'Lyrics of Life' — a personal visual zine by Lily Taylor. Childhood photos, handwritten lyrics, and emotional design collide in this creative scrapbook project." 
        />
      </Helmet>

      <h1 className="zine-title">Lyrics of Life</h1>

      <div className="zine-gallery">
        <div className={`zine-spread ${zinePages[currentIndex].length === 1 ? "zine-single" : ""}`}>
          {zinePages[currentIndex].map((src, i) => (
            <img src={src} alt={`Zine page ${currentIndex}-${i}`} key={i} />
          ))}
        </div>

        <div className="zine-nav">
          <button className="zine-arrow" onClick={goToPrevious}>&larr;</button>
          <button className="zine-arrow" onClick={goToNext}>&rarr;</button>
        </div>
      </div>

      <div className="zine-description">
        <p>
          This project began with a rediscovery of my digital past. I went on a hunt for lost drives and pulled out childhood snapshots — the kind of grainy, off-balance, flash-heavy memories that still feel emotional even when pixelated. I brought them into Photoshop, where I distorted, tinted, duplicated, erased, and rebuilt the fragments. In Illustrator, I overlaid the raw edges with graphic shapes and experimental typography, and then laid it all out in InDesign like a visual journal.
        </p>
        <p>
          I approached this like a visual scrapbook — imperfect by design and sensitive in tone. Each page became a conversation between image and lyric. The songs are personal to me, but they serve more as emotional textures than headlines. What matters most to me is the sensory collision — where pink torn pieces blend with tape edges in a way that feels intuitive, not structured.
        </p>
        <p>
          This piece let me experiment with visual language in a pure and cathartic way. It was about trusting the emotional weight of imagery. A way to remove the harsh clarity of memory preservation, and let emotion be its honesty.
        </p>
      </div>
    </div>
  );
}
