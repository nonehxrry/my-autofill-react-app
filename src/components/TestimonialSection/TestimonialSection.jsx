// src/components/TestimonialSection/TestimonialSection.js
import React from 'react';
import './TestimonialSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Example solid icon

function TestimonialSection() {
  const testimonials = [
    {
      quote: "omg i cannot believe i am getting a interview after using this. the recommendations is well thought off. highly recommend everyone to use this website.",
      userImage: "/images/user-michelle.png",
      userName: "Michelle V.",
      userTitle: "Sr. Digital Marketing Manager"
    },
    {
      quote: "Jobright has become my go-to for job hunting! I don't waste my time applying to the wrong jobs or companies.",
      userImage: "/images/user-likitha.png",
      userName: "Likitha U.",
      userTitle: "Software Engineer"
    },
    {
      quote: "Discovering Jobright has been a revelation! It's completely free with no hidden costs. The AI makes the job search more tailored to my needs. It's a breath of fresh air in this crazy job market!",
      userImage: "/images/user-uma.png",
      userName: "Uma M.",
      userTitle: "Full stack Developer"
    },
    {
      quote: "Thanks to this platform I've landed a few interviews and accepted an offer within 1 week of interviewing!! It helped me cut through the noise in the job search on LinkedIn and the AI helped me learn why I'm a good fit for each role.",
      userImage: "/images/user-tracy.png",
      userName: "Tracy C.",
      userTitle: "Senior Digital Marketing Consultant"
    }
  ];

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-header">
          <h2>SEE WHAT USERS SAY ABOUT JOBRIGHT'S AI AUTOFILL</h2>
          <div className="heart-icon">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <p>Thank you for your praise and suggestions. With your support, we can go further. We hope to accompany you throughout your job search journey.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p className="quote">“</p>
              <p>{testimonial.quote}</p>
              <div className="user-info">
                <img src={testimonial.userImage} alt={testimonial.userName} className="user-avatar" />
                <div className="user-details">
                  <h4>{testimonial.userName}</h4>
                  <p>{testimonial.userTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;