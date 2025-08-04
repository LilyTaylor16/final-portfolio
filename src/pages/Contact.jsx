import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import { Helmet } from "react-helmet";

import circles from '../assets/graphics/circles.svg';
import squares from '../assets/graphics/squares.svg';
import spray1 from '../assets/graphics/spray1.svg';
import spray2 from '../assets/graphics/spray2.svg';
import spray3 from '../assets/graphics/spray3.svg';
import spray4 from '../assets/graphics/spray4.svg';
import spray5 from '../assets/graphics/spray5.svg';
import spray6 from '../assets/graphics/spray6.svg';
import spray7 from '../assets/graphics/spray7.svg';
import linespray1 from '../assets/graphics/linespray1.svg';
import star1 from '../assets/graphics/star1.svg';
import star2 from '../assets/graphics/star2.svg';

function Contact() {
  return (
    <div className="contact-wrapper">
      <Helmet>
        <title>Contact | Lily Taylor Portfolio</title>
        <meta 
          name="description" 
          content="Want to work together? Reach out to Lily Taylor for freelance, collaboration, or design inquiries. Fill out the form or email directly." 
        />
      </Helmet>

      <Link to="/" className="contact-logo-link">
        <img src={Logo} alt="Home Logo" className="contact-logo-img" />
      </Link>

      {/* Background graphics */}
      <img src={spray1} className="contact-bg spray1" alt="spray1" />
      <img src={spray2} className="contact-bg spray2" alt="spray2" />
      <img src={spray3} className="contact-bg spray3" alt="spray3" />
      <img src={spray4} className="contact-bg spray4" alt="spray4" />
      <img src={spray5} className="contact-bg spray5" alt="spray5" />
      <img src={spray6} className="contact-bg spray6" alt="spray6" />
      <img src={spray7} className="contact-bg spray7" alt="spray7" />
      <img src={circles} className="contact-bg circles" alt="circles" />
      <img src={linespray1} className="contact-bg linespray1" alt="linespray1" />
      <img src={squares} className="contact-bg squares" alt="squares" />
      <img src={star1} className="contact-bg star1" alt="star1" />
      <img src={star2} className="contact-bg star2" alt="star2" />

      <section className="contact container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-text">
          Have a project idea, a question, or just want to connect? Drop me a message below.
        </p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <p className="contact-footer-text">
          Or email me directly at <a href="mailto:lily444taylor@gmail.com">lily444taylor@gmail.com</a>
        </p>
      </section>
    </div>
  );
}

export default Contact;
