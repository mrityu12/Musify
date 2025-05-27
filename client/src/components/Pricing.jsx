import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Pricing.css";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const navigate = useNavigate();
  
  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for beginners exploring music creation',
      features: [
        'Up to 5 songs per month',
        'Basic editing tools',
        'Standard quality exports',
        'Community support'
      ],
      highlighted: false,
      buttonText: 'Get Started',
      action: () => navigate("/signin")
    },
    {
      name: 'Creator',
      price: { monthly: 15, annual: 149 },
      description: 'For serious creators who need more power',
      features: [
        'Unlimited songs',
        'Advanced editing tools',
        'High-quality exports',
        'Priority support',
        'No watermarks',
        'Extended instrument library'
      ],
      highlighted: true,
      buttonText: 'Start Creating',
      action: () => navigate("/create") 
    },
    {
      name: 'Professional',
      price: { monthly: 39, annual: 399 },
      description: 'Everything you need for professional production',
      features: [
        'All Creator features',
        'Stem separation',
        'Commercial usage rights',
        'Dedicated support team',
        'API access',
        'Custom training options'
      ],
      highlighted: false,
      buttonText: 'Contact Sales',
      action: () => window.location.href = "mailto:sales@musify.com"
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Pricing Plans</h2>
          <p>Choose the plan that fits your creative needs</p>
        </div>
        
        <div className="pricing-toggle">
          <span className={!isAnnual ? 'active' : ''}>Monthly</span>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={isAnnual} 
              onChange={() => setIsAnnual(!isAnnual)} 
            />
            <span className="slider round"></span>
          </label>
          <span className={isAnnual ? 'active' : ''}>
            Annual <span className="discount">Save 20%</span>
          </span>
        </div>
        
        <div className="pricing-plans">
          {plans.map((plan, index) => (
            <div className={`pricing-plan ${plan.highlighted ? 'highlighted' : ''}`} key={index}>
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">{isAnnual ? plan.price.annual : plan.price.monthly}</span>
                <span className="period">/{isAnnual ? 'year' : 'month'}</span>
              </div>
              <p className="plan-description">{plan.description}</p>
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-outline'}`} 
              onClick={plan.action}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
