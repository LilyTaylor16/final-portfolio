import React, { useEffect, useRef, useState } from "react";
import "./BoxRotator.css";

/**
 * BoxRotator
 * - Keeps all media in the SAME fixed box (no layout jump)
 * - Mixed image sizes allowed (object-fit: contain) → no cropping
 * - Simple crossfade, pauses on hover
 */
export default function BoxRotator({ slides = [], interval = 3000 }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const hoverRef = useRef(false);

  const next = () => setIndex((i) => (i + 1) % slides.length);

  useEffect(() => {
    if (!slides.length) return;
    if (hoverRef.current) return;
    timerRef.current = setTimeout(next, interval);
    return () => clearTimeout(timerRef.current);
  }, [index, slides, interval]);

  const onEnter = () => { hoverRef.current = true; clearTimeout(timerRef.current); };
  const onLeave = () => { hoverRef.current = false; timerRef.current = setTimeout(next, interval); };

  return (
    <div className="br-box" onMouseEnter={onEnter} onMouseLeave={onLeave} aria-label="Preview">
      {slides.map((s, i) => (
        <img
          key={i}
          className={`br-media ${i === index ? "is-active" : ""}`}
          src={s.src}
          alt={s.alt || ""}
          loading={i === 0 ? "eager" : "lazy"}
          style={s.objectPosition ? { objectPosition: s.objectPosition } : undefined}
        />
      ))}
    </div>
  );
}
