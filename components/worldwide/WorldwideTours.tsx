"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./WorldwideTours.css";

const worldwideTours = [
  { image: "/images/worldwide/italy2025.jpg", name: "ITALY 2025" },
  { image: "/images/worldwide/akausnew.jpg", name: "AUSTRALIA & NZ" },
  { image: "/images/worldwide/japan.jpg", name: "TOKYO" },
  { image: "/images/worldwide/dubai.jpg", name: "DUBAI" },
  { image: "/images/worldwide/akbrisbane.jpg", name: "BRISBANE" },
  { image: "/images/worldwide/akmelb.jpg", name: "MELBOURNE" },
  { image: "/images/worldwide/akperth.jpg", name: "PERTH" },
  { image: "/images/worldwide/aksyd.jpg", name: "SYDNEY" },
  { image: "/images/worldwide/aktas.jpg", name: "TASMANIA" },
  { image: "/images/worldwide/mathakayan.jpg", name: "NEW ZEALAND" },
  { image: "/images/worldwide/italy2024.jpg", name: "ITALY 2024" },
  { image: "/images/worldwide/maldives.jpg", name: "MALDIVES" },
];

export default function WorldwideTours() {
  const [showAll, setShowAll] = useState(false);
  const visibleTours = showAll ? worldwideTours : worldwideTours.slice(0, 8);

  return (
    <section className="worldwide-section">
      <div className="container">
        <div className="worldwide-header">
          <p className="worldwide-eyebrow">International</p>
          <h2 className="section-title">WORLDWIDE TOURS</h2>
          <div className="worldwide-divider">
            <span className="worldwide-divider-line"></span>
            <span className="worldwide-divider-dot"></span>
            <span className="worldwide-divider-line"></span>
          </div>
        </div>
        <div className="worldwide-grid">
          {visibleTours.map((tour, index) => (
            <div key={index} className="worldwide-card">
              <Image src={tour.image} alt={tour.name} className="worldwide-image" width={400} height={400} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div className="worldwide-name">{tour.name}</div>
            </div>
          ))}
        </div>
        <div className="show-more-wrapper">
          <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}
