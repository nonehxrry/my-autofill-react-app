// src/components/HeroSection/HeroSection.js
import React from 'react';
import './HeroSection.css'; // Import specific CSS

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1>Automate Your Job Applications with AI and Land Interviews Faster</h1>
          <p>Our intelligent AI auto-fills applications across thousands of job boards, saving you hours and boosting your chances of getting noticed.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Start Auto-Filling Now</button>
            <button className="btn btn-outline">Watch Demo</button>
          </div>
        </div>
        <div className="hero-image">
          {/* Reference image from the public folder */}
          <img src="/images/autofill-hero-illustration.png" alt="AI Job Autofill" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;