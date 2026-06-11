"use client";

import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>MIDLANE</h3>
            <p>An electrifying rock band from Sri Lanka, bringing soulful melodies and raw energy to stages worldwide.</p>
          </div>
          <div className="footer-links">
            <h4>Navigate</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#members">Members</a></li>
              <li><a href="#originals">Originals</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#booking">Booking</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/midlanesl" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/midlanesl/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.youtube.com/channel/UC-mYZ4TM6CU7IVgbQUlFNUQ" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
              <a href="https://open.spotify.com/artist/0jFt2WjOw9GVaXkb451Jnl" target="_blank" rel="noopener noreferrer"><i className="fab fa-spotify"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Midlane. All rights reserved.</p>
          <p>Rock Band from Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
