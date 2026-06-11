"use client";

import React from "react";
import "./Partners.css";

const logoFiles = [
  "derana", "dialog", "rupavahini", "softlogic", "bourne",
  "aura", "naada", "janacrew", "agastra", "eventstalk",
  "watermelon", "sheraton", "salota", "hill", "seylan",
  "hiru", "yfm", "hirufm", "airforce", "elcardo",
  "youth", "aiesec", "cocacola", "lion", "syzygy", "sakya", "ctc"
];

const logos = logoFiles.map(name => `/images/${name}.jpg`);

export default function Partners() {
  const half = Math.ceil(logos.length / 2);
  const topRow = logos.slice(0, half);
  const bottomRow = logos.slice(half);

  return (
    <section id="partners" className="partners-section">
      <div className="partners-container">
        <div className="partners-header">
          <p className="partners-eyebrow">Collaborations</p>
          <h2 className="partners-title">OUR PARTNERS</h2>
          <div className="partners-divider">
            <span className="partners-divider-line"></span>
            <span className="partners-divider-dot"></span>
            <span className="partners-divider-line"></span>
          </div>
          <p className="partners-subtitle">Proud to collaborate with industry leaders who fuel our journey</p>
        </div>

        <div className="scroll-row-wrapper">
          <div className="scroll-row right">
            {[...topRow, ...topRow].map((logo, index) => (
              <div className="partner-card" key={`top-${index}`}>
                <img src={logo} alt="Partner logo" className="partner-logo" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="scroll-row left">
            {[...bottomRow, ...bottomRow].map((logo, index) => (
              <div className="partner-card" key={`bottom-${index}`}>
                <img src={logo} alt="Partner logo" className="partner-logo" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
