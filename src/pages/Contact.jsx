import React, { useState } from 'react';
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
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('Your message has been recorded on this page. The form is front end only right now so please use the email link below if you need to reach me.');
  };

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
        <img
          src={Logo}
          alt="Lily Taylor portfolio logo"
          className="contact-logo-img"
        />
      </Link>

      {/* Background graphics (decorative) */}
      <img src={spray1} className="contact-bg spray1" alt="" aria-hidden="true" />
      <img src={spray2} className="contact-bg spray2" alt="" aria-hidden="true" />
      <img src={spray3} className="contact-bg spray3" alt="" aria-hidden="true" />
      <img src={spray4} className="contact-bg spray4" alt="" aria-hidden="true" />
      <img src={spray5} className="contact-bg spray5" alt="" aria-hidden="true" />
      <img src={spray6} className="contact-bg spray6" alt="" aria-hidden="true" />
      <img src={spray7} className="contact-bg spray7" alt="" aria-hidden="true" />
      <img src={circles} className="contact-bg circles" alt="" aria-hidden="true" />
      <img src={linespray1} className="contact-bg linespray1" alt="" aria-hidden="true" />
      <img src={squares} className="contact-bg squares" alt="" aria-hidden="true" />
      <img src={star1} className="contact-bg star1" alt="" aria-hidden="true" />
      <img src={star2} className="contact-bg star2" alt="" aria-hidden="true" />

      <section className="contact container">
        <h1 className="contact-title underline--spike">Get in Touch</h1>
        <p className="contact-text">
          Have a project idea, a question, or just want to connect? Drop me a message below.
        </p>

        <div className="contact-card spiky-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="btn--spike">Send Message</button>

            {submitStatus && (
              <p className="contact-status">
                {submitStatus}
              </p>
            )}
          </form>
        </div>

        <p className="contact-footer-text">
          Or email me directly at{' '}
          <a href="mailto:lily444taylor@gmail.com">
            lily444taylor@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}

export default Contact;
