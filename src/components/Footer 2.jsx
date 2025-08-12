

import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} Lily Taylor —{" "}
          <a href="mailto:lily444taylor@gmail.com">lily444taylor@gmail.com</a>
        </p>
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/lily-taylor-159a8725a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/lilyyttaylorr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
