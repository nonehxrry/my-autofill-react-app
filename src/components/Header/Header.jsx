// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [scrolled, setScrolled] = useState(false); // State to track scroll

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is beyond a certain threshold (e.g., 50px)
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    // Apply 'scrolled' class conditionally
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
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
