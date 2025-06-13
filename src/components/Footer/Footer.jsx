// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-links">
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <p className="contact-info">Contact Info: Support@Rezuwizard.com</p>
        <div className="logo">RezuWizard</div>
        <p className="tagline">Your gateway to standout resumes</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/company/rezuwizard/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://x.com/RezuWizard"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com/rezuwizard_official/"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <p className="copyright">© 2025 RezuWizard. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
