// src/components/JobBoardSection/JobBoardSection.js
import React from 'react';
import './JobBoardSection.css';

function JobBoardSection() {
  // You'd typically fetch this data from an API in a real app
  const jobData = [
    { company: "Thomson Reuters", time: "7 hours ago", title: "Software Engineer" },
    { company: "Travelers", time: "3 hours ago", title: "Manager, Data Analyst" },
    { company: "Target", time: "10 hours ago", title: "Senior Product Designer - Guest UX" },
    { company: "Morgan Stanley", time: "1 day ago", title: "VP, Service Operations" },
    // Add more job items as needed
  ];

  return (
    <section className="job-board-section">
      <div className="container">
        <div className="job-board-header">
          <h2>Never Miss Out On New Jobs Again. Join The Largest Job Board!</h2>
          <div className="job-stats">
            <div className="stat-item">
              <h3>400,000+</h3>
              <p>Today's new jobs</p>
            </div>
            <div className="stat-item">
              <h3>8,000,000+</h3>
              <p>Total jobs</p>
            </div>
          </div>
        </div>
        <div className="job-listings">
          {jobData.map((job, index) => (
            <div className="job-card" key={index}>
              <p className="job-time">{job.time}</p>
              <h4 className="job-company">{job.company}</h4>
              <p className="job-title">{job.title}</p>
            </div>
          ))}
          {/* Add a "view all jobs" button if needed */}
        </div>
      </div>
    </section>
  );
}

export default JobBoardSection;