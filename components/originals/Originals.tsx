"use client";

import React from "react";
import "./Originals.css";

const videos = [
  { id: 1, src: "https://www.youtube.com/embed/Ro0-_aQ1b24", title: "Midlane YouTube Video 1" },
  { id: 2, src: "https://www.youtube.com/embed/Wj7xcfYHA64", title: "Midlane YouTube Video 2" },
  { id: 3, src: "https://www.youtube.com/embed/0nqY9HqNepc", title: "Midlane YouTube Video 3" },
  { id: 4, src: "https://www.youtube.com/embed/lV37SVBcJNw", title: "Midlane YouTube Video 4" },
];

export default function Originals() {
  return (
    <section id="originals" className="originals-section">
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="container">
        <div className="originals-header">
          <p className="originals-eyebrow">Music</p>
          <h2 className="section-title">OUR ORIGINALS</h2>
          <div className="originals-divider">
            <span className="originals-divider-line"></span>
            <span className="originals-divider-dot"></span>
            <span className="originals-divider-line"></span>
          </div>
          <p className="section-description">
            Discover our original compositions that showcase Midlane unique sound and artistic vision.
          </p>
        </div>
        <div className="videos-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-container">
              <div className="video-wrapper">
                <iframe
                  src={`${video.src}?rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
