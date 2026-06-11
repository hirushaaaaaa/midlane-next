"use client";

import React from "react";
import "./Booking.css";
import { Phone, Calendar, Music } from "lucide-react";

export default function Booking() {
  return (
    <section id="booking" className="booking-section">
      <div className="booking-bg-glow"></div>

      <div className="booking-container">
        <div className="booking-header">
          <p className="booking-eyebrow">Get In Touch</p>
          <h2 className="booking-title">BOOK MIDLANE</h2>
          <div className="booking-divider">
            <span className="booking-divider-line"></span>
            <span className="booking-divider-dot"></span>
            <span className="booking-divider-line"></span>
          </div>
          <p className="booking-description">
            Ready to make your event unforgettable? Let us bring the energy and create memories that last forever.
          </p>
        </div>

        <div className="booking-grid">
          <div className="booking-cta-card">
            <div className="booking-cta-icon">
              <Phone size={32} />
            </div>
            <h3>Call Us Directly</h3>
            <p>Speak with our booking manager about your event details, pricing, and availability.</p>
            <a href="tel:+94711089909" className="booking-btn">
              +94 71 108 9909
            </a>
          </div>

          <div className="booking-events-card">
            <div className="booking-cta-icon">
              <Music size={32} />
            </div>
            <h3>We Play For</h3>
            <div className="events-tags">
              {["Weddings", "Corporate Events", "Private Parties", "Festivals", "Concerts", "Birthdays", "Club Nights", "Special Events"].map((event, i) => (
                <span key={i} className="event-tag">{event}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="booking-note">
          <Calendar size={16} />
          <span>Book 3+ months in advance for best availability — Available across Sri Lanka and beyond</span>
        </div>
      </div>
    </section>
  );
}
