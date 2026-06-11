"use client";

import React from "react";
import Image from "next/image";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>

      <div className="about-container">
        <div className="about-image-wrapper">
          <Image
            src="/images/newgroup.jpg"
            alt="About Midlane Band"
            className="about-image"
            width={500}
            height={600}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="about-text">
          <p className="about-eyebrow">Our Story</p>
          <h2>ABOUT MIDLANE</h2>
          <div className="about-divider">
            <span className="about-divider-line"></span>
            <span className="about-divider-dot"></span>
          </div>
          <p>
            Midlane is a passionate rock band that blends soulful melodies with electrifying energy. Formed by musicians from diverse backgrounds, the band is dedicated to crafting music that speaks to the heart and moves the soul.
          </p>
          <p>
            Our journey started in 2020, and since then, we have performed across multiple venues, connecting with fans through powerful live performances and heartfelt recordings.
          </p>
          <p>
            Join us on this musical adventure as we continue to explore new sounds, share our stories, and rock stages worldwide.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-number">5+</span>
              <span className="about-stat-label">Years Together</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">200+</span>
              <span className="about-stat-label">Shows Played</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">10+</span>
              <span className="about-stat-label">Countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
