"use client";

import React from "react";
import { FaSpotify, FaApple } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="video-background">
        <video ref={videoRef} autoPlay muted loop playsInline className="video" src="/videos/09299.mp4" />
        <div className="video-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">Sri Lanka</div>
        <h1 className="hero-title">MIDLANE</h1>
        <div className="hero-divider">
          <span className="hero-divider-line"></span>
          <span className="hero-divider-dot"></span>
          <span className="hero-divider-line"></span>
        </div>
        <h2 className="hero-subtitle">Electrifying Rock Experience</h2>
        <div className="listen-buttons">
          <a href="https://open.spotify.com/artist/0jFt2WjOw9GVaXkb451Jnl" className="listen-btn spotify" target="_blank" rel="noopener noreferrer">
            <FaSpotify /> Listen on Spotify
          </a>
          <a href="https://music.apple.com/artist/midlane/1533526949" className="listen-btn apple" target="_blank" rel="noopener noreferrer">
            <FaApple /> Listen on Apple Music
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
