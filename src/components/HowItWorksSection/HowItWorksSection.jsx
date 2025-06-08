// src/components/HowItWorksSection/HowItWorksSection.js
import React from 'react';
import './HowItWorksSection.css';

function HowItWorksSection() {
  const steps = [
    { number: 1, title: "Install the Autofill Extension", description: "" },
    { number: 2, title: "Set up your profile", description: "" },
    { number: 3, title: "Open a job application site & Click Autofill", description: "" },
    { number: 4, title: "Submit your application, done!", description: "" },
  ];

  return (
    <section className="how-it-works-section">
      <div className="container">
        <h2>GET A FAST JOB APPLICATION IN 4 EASY STEPS</h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              {step.description && <p>{step.description}</p>}
              {index < steps.length - 1 && <div className="step-arrow"></div>}
            </div>
          ))}
        </div>
        <button className="btn btn-dark">Start Autofilling for FREE</button>
      </div>
    </section>
  );
}

export default HowItWorksSection;