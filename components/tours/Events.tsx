"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./Events.css";

const pastEvents = [
  { image: "/images/aluthkalawak.jpg", name: "Aluth Kalawak (once more)" },
  { image: "/images/ahankaranagare.jpg", name: "Ahankara Nagare" },
  { image: "/images/interflash.jpg", name: "Interflash" },
  { image: "/images/islandjam.jpg", name: "Island Jam" },
  { image: "/images/boomtown.jpg", name: "Derana Boom Town" },
  { image: "/images/fuze.jpg", name: "Fuze" },
  { image: "/images/cokegalleface.jpg", name: "Coke Kottu Beat Party" },
  { image: "/images/rota.jpg", name: "Rota Fiesta" },
  { image: "/images/smartyouth.jpg", name: "Smart Youth 31st Night" },
  { image: "/images/murukku.jpg", name: "Murukku" },
  { image: "/images/horizon.jpg", name: "Horizon" },
  { image: "/images/charikawak.jpg", name: "Charikawak" },
  { image: "/images/nadagama.jpg", name: "Naadagama" },
];

export default function Events() {
  const [showAll, setShowAll] = useState(false);
  const visibleEvents = showAll ? pastEvents : pastEvents.slice(0, 8);

  return (
    <section id="events" className="events-section">
      <div className="container">
        <div className="events-header">
          <p className="events-eyebrow">Live</p>
          <h2 className="section-title">PAST EVENTS</h2>
          <div className="events-divider">
            <span className="events-divider-line"></span>
            <span className="events-divider-dot"></span>
            <span className="events-divider-line"></span>
          </div>
        </div>
        <div className="events-grid">
          {visibleEvents.map((event, index) => (
            <div key={index} className="simple-event-card">
              <Image src={event.image} alt={event.name} className="event-image" width={400} height={300} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div className="event-name">{event.name}</div>
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
