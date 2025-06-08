// src/components/FAQSection/FAQSection.js
import React, { useState } from 'react';
import './FAQSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function FAQSection() {
  // State to keep track of which FAQ item is currently open
  // null means no item is open. If an index is stored, that item is open.
  const [openIndex, setOpenIndex] = useState(null);

  const faqItemsData = [
    {
      question: "Why should I use Autofill for job applications?",
      answer: `<p>Using Autofill can help you in two major ways:</p><ol><li>It saves you significant time...</li><li>You can apply to jobs in seconds...</li></ol>`,
    },
    {
      question: "Can I use Autofill with every job application site?",
      answer: `<p>Our AI is designed to work with most major Applicant Tracking Systems (ATS) including Workday, Greenhouse, Ashby, Lever, iCIMS, and many more. We are constantly updating our compatibility to cover new platforms.</p>`,
    },
    {
      question: "How does Job Application Autofill work?",
      answer: `<p>Once you install our browser extension and set up your profile, you can navigate to any job application form online. Our AI will detect the fields and automatically populate them with your saved information. You can review and edit before submitting.</p>`,
    },
    {
      question: "Is my personal data secure with Autofill?",
      answer: `<p>Absolutely. We prioritize your data privacy and security. All your information is encrypted and stored securely. We do not share your data with third parties without your explicit consent.</p>`,
    },
    {
      question: "Can I customize the information Autofill uses?",
      answer: `<p>Yes, our tool allows full customization of your profile. You can create multiple profiles for different job types or industries, and select which profile to use for specific applications, ensuring tailored submissions every time.</p>`,
    },
    // Add more FAQ items here
  ];

  const toggleFAQ = (index) => {
    // If the clicked item is already open, close it (set openIndex to null)
    // Otherwise, open the clicked item (set openIndex to its index)
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <div className="faq-items">
          {faqItemsData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {item.question}
                <span className="toggle-icon">
                  <FontAwesomeIcon icon={openIndex === index ? faMinus : faPlus} />
                </span>
              </div>
              <div
                className="faq-answer"
                // Set maxHeight dynamically based on state
                style={{
                  maxHeight: openIndex === index ? "500px" : "0", // 500px is a guess, make it large enough for content
                  padding: openIndex === index ? "15px 30px 25px 30px" : "0 30px"
                }}
              >
                {/* dangerouslySetInnerHTML is used because 'answer' contains HTML tags (like <p>, <li>, <ol>) */}
                <div dangerouslySetInnerHTML={{ __html: item.answer }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;