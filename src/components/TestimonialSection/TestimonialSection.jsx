// src/components/TestimonialSection/TestimonialSection.js
import React from 'react';
import './TestimonialSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Example solid icon

function TestimonialSection() {
  const testimonials = [
    {
      quote: "This auto-fill feature has saved me hours! Instead of typing the same information repeatedly, I can now apply to multiple jobs in just a few clicks. Absolute game-changer!",
      userImage: "/images/user-priyansh.png",
      userName: "Priyansh Sehgal",
      userTitle: "Sr. Digital Marketing Manager"
    },
    {
      quote: "Applying for jobs used to be so tedious. This tool made the process smooth and efficient. It feels amazing to apply without the usual hassle.",
      userImage: "/images/user-asis.png",
      userName: "Asis Singh",
      userTitle: "Software Engineer"
    },
    {
      quote: "The way it fills out every field with such accuracy is incredible. It even remembers the small details that I often forget. Impressive automation!",
      userImage: "/images/user-uma.png",
      userName: "Sunchita Singh",
      userTitle: "Full stack Developer"
    },
    {
      quote: "Thanks to this platform I've landed a few interviews and accepted an offer within 1 week of interviewing!! It helped me cut through the noise in the job search on LinkedIn and the AI helped me learn why I'm a good fit for each role.",
      userImage: "/images/user-tracy.png",
      userName: "Akshita Gupta.",
      userTitle: "Senior Digital Marketing Consultant"
    }, // <-- Make sure this comma is there!
    {
      quote: "The interface is super intuitive. I didn't have to watch a tutorial or read long guides. It just works and works well!",
      userImage: "/images/user-sivansh.png",
      userName: "Shivansh Singh",
      userTitle: "App Developer"
    }, // <-- And this comma is crucial!
    {
      quote: "Because I could apply to more jobs faster, I received more interview calls. This feature definitely gave my job hunt a boost!",
      userImage: "/images/user-yatharth.png",
      userName: "Yatharth Gupta.",
      userTitle: "Cloud Engineer"
    }
  ];

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-header">
          <h2>SEE WHAT USERS SAY ABOUT REZUWIZARD'S AI AUTOFILL</h2>
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
