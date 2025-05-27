import React from "react";
import {
  FaMagic,
  FaSlidersH,
  FaMusic,
  FaShareAlt,
  FaFolderOpen,
  FaRocket,
} from "react-icons/fa";
import "../styles/Feature.css";

export default function Features() {
  const features = [
    {
      icon: <FaMagic className="feature-icon" />,
      title: "AI-Powered Composition",
      description: "Create original music using text prompts and our advanced AI models.",
    },
    {
      icon: <FaSlidersH className="feature-icon" />,
      title: "Full Customization",
      description: "Adjust tempo, instruments, mood, and structure to get exactly what you want.",
    },
    {
      icon: <FaMusic className="feature-icon green" />,
      title: "Professional Quality",
      description: "Export studio-quality tracks ready for use in any project.",
    },
    {
      icon: <FaShareAlt className="feature-icon purple" />,
      title: "Easy Sharing",
      description: "Share your creations directly to social media or export for other platforms.",
    },
    {
      icon: <FaFolderOpen className="feature-icon orange" />,
      title: "Extensive Library",
      description: "Access thousands of instruments, samples, and presets for endless possibilities.",
    },
    {
      icon: <FaRocket className="feature-icon red" />,
      title: "No Experience Needed",
      description: "Our intuitive interface makes music creation accessible to everyone.",
    },
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2>Features That Inspire</h2>
          <p>Everything you need to bring your musical ideas to life</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon-wrapper">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
