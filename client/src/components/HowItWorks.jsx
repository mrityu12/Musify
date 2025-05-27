import React from "react";
import "../styles/HowItWorks.css";

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Describe Your Idea',
      description: 'Use natural language to describe the music you want to create',
      image: '../src/assets/images/step-1.png'
    },
    {
      number: '02',
      title: 'Generate & Refine',
      description: 'Our AI creates multiple variations for you to choose from and refine',
      image: '../src/assets/images/step-2.png'
    },
    {
      number: '03',
      title: 'Customize & Edit',
      description: 'Fine-tune your creation with our intuitive editing tools',
      image: '../src/assets/images/step-3.png'
    },
    {
      number: '04',
      title: 'Export & Share',
      description: 'Download your music or share it directly to your favorite platforms',
      image: '../src/assets/images/step-4.png'
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Four simple steps to create music you'll love</p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <div className="step-image">
                <img src={step.image} alt={step.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
