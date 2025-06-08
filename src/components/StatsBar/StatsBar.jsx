// src/components/StatsBar/StatsBar.js
import React from 'react';
import './StatsBar.css';

function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container">
        <div className="stat-item">
          <h3>10x</h3>
          <p>Faster Than Manual Form Filling</p>
        </div>
        <div className="stat-item">
          <h3>5 Hrs</h3>
          <p>Saved Per User Every Week</p>
        </div>
        <div className="stat-item">
          <h3>10 Million</h3>
          <p>Applications Autofilled</p>
        </div>
      </div>
    </section>
  );
}

export default StatsBar;