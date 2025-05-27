import React, { useState, useEffect } from "react";
import "../styles/Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Independent Filmmaker',
      image: "../src/assets/images/sarah.jpeg",
      content: 'Muse Sessions has revolutionized how I approach film scoring. I can now create custom soundtracks for my projects without blowing my budget on composers.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'YouTube Creator',
      image: "../src/assets/images/micahel.jpeg",
      content: 'As someone with zero musical background, this platform has been a game-changer. I can create original background music for my videos in minutes.',
      rating: 5
    },
    {
      id: 3,
      name: 'Jessica Rivera',
      role: 'Game Developer',
      image: "../src/assets/images/Jessica.jpeg",
      content: 'The ability to generate adaptive music based on emotional cues has taken my indie games to another level. My players constantly comment on how immersive the soundtracks feel.',
      rating: 4
    },
    {
      id: 4,
      name: 'David Okafor',
      role: 'Podcast Producer',
      image: "../src/assets/images/David.jpeg",
      content: 'Finding royalty-free music that fits our podcast mood was always a struggle. Now we generate custom intros and transitions that perfectly match our content.',
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Users Say</h2>
          <p>Join thousands of creators who've found their sound</p>
        </div>
        
        <div className="testimonials-carousel">
          {testimonials.map((testimonial, index) => (
            <div 
              className={`testimonial-card ${index === activeIndex ? 'active' : ''}`} 
              key={testimonial.id}
            >
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`star ${i < testimonial.rating ? 'filled' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
