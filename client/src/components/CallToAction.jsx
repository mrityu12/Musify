import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CallToAction.css";

const CallToAction = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signin"); 
  };

  const handleSeePlans = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/"); 
      setTimeout(() => {
        const section = document.getElementById("pricing");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };
  return (
    <section className="call-to-action">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Create Your Music?</h2>
          <p>Join thousands of creators and start making music today — no experience needed.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large" onClick={handleGetStarted}>Get Started Free</button>
            <button className="btn btn-outline btn-large" onClick={handleSeePlans}>See Plans</button>
          </div>
        </div>
        <div className="cta-image">
          <img src="../src/assets/images/musiccreation.jpg" alt="Music Creation" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;