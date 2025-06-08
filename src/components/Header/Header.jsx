// src/components/Header/Header.js
import React from 'react';
import './Header.css'; // Import the specific CSS for this component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">RezuWizard</div> {/* Or <img src="/images/your-logo.png" alt="Your Logo" /> */}
        <nav className="main-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">How It Works?</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="Search"><FontAwesomeIcon icon={faSearch} /></button>
          <button className="btn btn-outline">Sign In</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;