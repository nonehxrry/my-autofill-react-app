// src/App.js
import React from 'react';
import './index.css'; // Import your global/base CSS here

// Import all your individual component files
import Header from './components/Header/Header.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import StatsBar from './components/StatsBar/StatsBar.jsx';
import FeatureHighlight from './components/FeatureHighlight/FeatureHighlight.jsx';
import JobBoardSection from './components/JobBoardSection/JobBoardSection.jsx';
import TestimonialSection from './components/TestimonialSection/TestimonialSection.jsx';
import HowItWorksSection from './components/HowItWorksSection/HowItWorksSection.jsx';
import FAQSection from './components/FAQSection/FAQSection.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  // Data for reusable FeatureHighlight components
  const featureSections = [
    {
      id: 'autofill-ats',
      title: "Autofill Job Applications On All Major ATSs",
      description: "With 1-click job application autofill, you can apply to hundreds of jobs each day without manually re-entering the same information, increasing your odds of landing more interviews.",
      imageUrl: "/images/autofill-ats-illustration.png", // Path from public folder
      atsLogos: [
        "/images/workday-logo.png",
        "/images/greenhouse-logo.png",
        "/images/ashby-logo.png",
        "/images/lever-logo.png",
        "/images/icims-logo.png"
      ],
      reverseLayout: false,
    },
    {
      id: 'tailor-resume',
      title: "Tailor Your Resume For Each Job With AI",
      description: "Generate tailored, recruiter-optimized resumes in <1 min, no matter where you are applying, with fast generation and autofill your tailored resume for this job application.",
      imageUrl: "/images/tailor-resume-illustration.png",
      atsLogos: [], // No ATS logos for this section
      reverseLayout: true, // Alternate layout
    },
    {
      id: 'match-score',
      title: "Get A Match Score For Every Application",
      description: "Get your fit for each job application based on your skills, not just the title. See your matching score instantly before autofill, and make smarter applications with ease.",
      imageUrl: "/images/match-score-illustration.png",
      atsLogos: [], // No ATS logos for this section
      reverseLayout: false,
    },
  ];

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <StatsBar />

      {/* Render each FeatureHighlight using the data array */}
      {featureSections.map((section) => (
        <FeatureHighlight
          key={section.id} // Use a unique ID for the key
          title={section.title}
          description={section.description}
          imageUrl={section.imageUrl}
          atsLogos={section.atsLogos}
          reverseLayout={section.reverseLayout}
        />
      ))}

      <JobBoardSection />
      <TestimonialSection />
      <HowItWorksSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;