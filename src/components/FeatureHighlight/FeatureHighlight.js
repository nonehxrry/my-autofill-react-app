// src/components/FeatureHighlight/FeatureHighlight.js
import React from 'react';
import './FeatureHighlight.css';

function FeatureHighlight({ title, description, imageUrl, atsLogos = [], reverseLayout }) {
  const sectionClasses = `feature-highlight ${reverseLayout ? 'feature-reverse-layout' : ''}`;

  return (
    <section className={sectionClasses}>
      <div className="container">
        <div className="feature-content">
          <p className="section-subtitle">CORE FEATURE HIGHLIGHTS</p>
          <h2>{title}</h2>
          <p>{description}</p>
          <button className="btn btn-dark">Start Autofilling for FREE</button>
        </div>
        <div className="feature-image">
          <img src={imageUrl} alt={title} />
          {atsLogos.length > 0 && (
            <div className="ats-logos">
              {atsLogos.map((logoUrl, index) => (
                <img key={index} src={logoUrl} alt={`ATS Logo ${index}`} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeatureHighlight;