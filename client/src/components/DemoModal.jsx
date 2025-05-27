import React from "react";
import "../styles/DemoModal.css";

export function DemoModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>🎬 Watch the Demo</h2>
        <iframe width="100%"  height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Demo Video"  allowFullScreen ></iframe>
      </div>
    </div>
  );
}
