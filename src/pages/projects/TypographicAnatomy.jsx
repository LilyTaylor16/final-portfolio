import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/typographicanatomy.css";

function TypographicAnatomy() {
  // turn off frosted blur ONLY on this page
  useEffect(() => {
    document.body.classList.add("no-sheen-now");
    return () => document.body.classList.remove("no-sheen-now");
  }, []);

  return (
    <div className="typography-wrapper">
      <header className="typography-header">
        <h1>Typographic Anatomy</h1>

        <p className="typography-intro">
          This is a full typographic alphabet created from portrait photography. Each letter is made by arranging
          natural facial features such as eyes lips cheekbones and jawlines into clear letterforms without any
          distortion. I created this during my first term and it still feels like one of the most honest examples
          of how I saw shape before I learned any formal rules. It shows how instinct guided my composition at the
          very beginning.
        </p>
      </header>

      <section className="typography-hero">
        <img
          src="/Projects/typealphabet/typealphabet.png"
          alt="Typographic alphabet built from human facial features"
        />
      </section>

      <section className="typography-details">
        <h2>Tools</h2>
        <p>Photoshop and Illustrator</p>

        <h2>Process</h2>
        <p>
          I collected copyright safe portraits and cut them into forms that already suggested letter shapes.
          Shadows became structure lips created curves and eyes supported counters and small openings in the
          letters. I used black and white to let facial shapes speak for themselves without color and personality
          taking over.
        </p>

        <h2>Concept</h2>
        <p>
          The project explores type as something human rather than mechanical. Instead of building letters from
          lines and math I looked at faces as building blocks. The work is not meant to hide identity but to show
          how natural structure can already feel like language.
        </p>

        <h2>Reflection</h2>
        <p>
          This piece remains in my final portfolio because it carries the feeling of my early creative mind.
          I worked without rules and relied on my eye and curiosity. It reminds me that playful observation is
          just as important as precision.
        </p>
      </section>

      {/* back button */}
      <Link to="/work" className="back-to-work-btn">
        Back to Work
      </Link>
    </div>
  );
}

export default TypographicAnatomy;
