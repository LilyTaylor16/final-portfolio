import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg'; 

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Lily Taylor Logo" className="logo-img" />
        </Link>

        <nav className="main-nav">
          <ul className="nav-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/contact">Contact</Link></li> 
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
