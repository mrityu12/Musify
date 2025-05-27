import React, { useState, useEffect } from "react";
import "../styles/Hero.css";
import { DemoModal } from "./DemoModal";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

 
  const [creators, setCreators] = useState(() => {
    return Number(localStorage.getItem("creators")) || 120;
  });

  const [songs, setSongs] = useState(() => {
    return Number(localStorage.getItem("songs")) || 500;
  });

  const rating = 5.0;

  useEffect(() => {
    localStorage.setItem("creators", creators);
    localStorage.setItem("songs", songs);
  }, [creators, songs]);

  const handleStartCreating = () => {
    setCreators(prev => prev + 1);
    setSongs(prev => prev + 1);
    navigate("/create");
  };

  const handleWatchDemo = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Turn Your Ideas Into Music{" "}
            
          </h1>
          <p className="hero-subtitle">
            Muse Sessions uses AI to help you create original music from simple prompts. No musical experience needed.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary btn-large" onClick={handleStartCreating}>
              Start Creating
            </button>
            <button className="btn btn-outline btn-large" onClick={handleWatchDemo}>
              Watch Demo
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">{creators}+</span>
              <span className="stat-label">Creators</span>
            </div>
            <div className="stat">
              <span className="stat-number">{songs}+</span>
              <span className="stat-label">Songs Created</span>
            </div>
            <div className="stat">
              <span className="stat-number">{rating}/5</span>
              <span className="stat-label">User Rating</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src="../src/assets/images/musify1.png" alt="Muse Sessions Interface" />
        </div>
      </div>

      
      {isModalOpen && <DemoModal onClose={() => setIsModalOpen(false)} />}

      <div className="gradient-bg"></div>
    </section>
  );
}
