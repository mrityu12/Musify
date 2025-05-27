import React, { useState } from "react";
import "../styles/CreatePage.css";

export default function CreatePage() {
  const [prompt, setPrompt] = useState("");
  const [genre, setGenre] = useState("lofi");
  const [file, setFile] = useState(null);
 

  const handleGenerate = (e) => {
    e.preventDefault();
    console.log("Prompt:", prompt);
    console.log("Genre:", genre);
    console.log("Uploaded file:", file);
  
  };

  return (
    <section className="create-page">
      <div className="create-container">
        <h2>Create Your Music</h2>
        <p>Use AI to generate custom music based on your ideas. 🎶</p>

        <form className="create-form" onSubmit={handleGenerate}>
          <label>🎤 Describe your idea or mood:</label>
          <textarea
            placeholder="e.g. A chill evening beat with lo-fi vibes..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          ></textarea>

          <label>🎧 Choose a music style:</label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="lofi">Lo-Fi</option>
            <option value="pop">Pop</option>
            <option value="hiphop">Hip-Hop</option>
            <option value="edm">EDM</option>
            <option value="classical">Classical</option>
          </select>

          <label>📁 (Optional) Upload inspiration audio:</label>
          <input type="file" accept="audio/*" onChange={(e) => setFile(e.target.files[0])} />

          <button type="submit">Generate Music</button>
        </form>

        <div className="generated-music">
          <p>🎵 Your generated music will appear here...</p>
        </div>
      </div>
    </section>
  );
}
