"use client";

import React, { useState } from "react";
import MemberModal from "./MemberModal";
import "./Members.css";

const memberData = {
  vinuja: {
    name: "Vinuja Tharushka",
    role: "Main Vocalist",
    image: "/images/vinuja5.jpg",
    video: "/videos/vinujaVid.mp4",
    description: "Vinuja is the powerful voice behind Midlane's electrifying sound. With a vocal range that spans from soulful melodies to powerful rock anthems, he brings emotional depth and energy to every performance.",
    journey: "Started singing at age 12 in school choir, later developed his rock voice through years of practice and live performances. Joined Midlane in 2020 and has been the driving force behind our vocal arrangements.",
    socials: { facebook: "https://www.facebook.com/vinuja.gunasekara", instagram: "https://www.instagram.com/vinuja.music/", youtube: "https://www.youtube.com/channel/UCf_xC5j1S3U8RBj5hq4wkGw", spotify: "https://open.spotify.com/artist/6WFq4Wly5bWr76FPU3lLZa" }
  },
  pramoniro: {
    name: "Pramoniro",
    role: "Lead Guitarist",
    image: "/images/pramo.jpg",
    video: "/videos/pramoVidd.mp4",
    description: "Pramoniro is the architect of Midlane's guitar-driven sound. His intricate riffs and soaring solos define the band's musical identity.",
    journey: "Picked up his first guitar at 15 and quickly developed a passion for rock and metal.",
    socials: { facebook: "https://www.facebook.com/pramo.niro.5", instagram: "https://www.instagram.com/pramoniro/", youtube: "https://www.youtube.com/@pramoniro", spotify: "#" }
  },
  isura: {
    name: "Isura Umayangana",
    role: "Drummer",
    image: "/images/isura.jpg",
    video: "/videos/isuraVid.mp4",
    description: "Isura provides the thunderous backbone of Midlane's sound. His dynamic drumming style ranges from subtle grooves to explosive fills.",
    journey: "Started playing drums in school band at age 14.",
    socials: { facebook: "https://www.facebook.com/isura.umayangana.9", instagram: "https://www.instagram.com/isura.umayangana/", youtube: "https://www.youtube.com/@isuradrums", spotify: "#" }
  },
  chamma: {
    name: "Chamma Jay",
    role: "Keyboardist",
    image: "/images/chammaclose.jpg",
    video: "/videos/chammaVid.mp4",
    description: "Chamma Jay brings additional layers of harmonic richness to Midlane's sound.",
    journey: "Started with classical piano training and later explored jazz and rock styles.",
    socials: { facebook: "https://www.facebook.com/chamindu.jayawardane.5", instagram: "https://www.instagram.com/chammajayy/", youtube: "https://www.youtube.com/@chammajayofficial", spotify: "https://open.spotify.com/artist/5G2haOLUZzsrL57sfoIflo" }
  },
  sithum: {
    name: "Sithum",
    role: "Bassist",
    image: "/images/sithum.jpg",
    video: "/videos/sithum.mp4",
    description: "",
    journey: "",
    socials: { facebook: "https://www.facebook.com/profile.php?id=100064151760664", instagram: "https://www.instagram.com/sithum_geethadeva/", youtube: "https://www.youtube.com/@sithumgeethadeva", spotify: "https://open.spotify.com/artist/7jU5Mjpbxv9n9AACS2m0sy" }
  },
  ishan: {
    name: "Ishan",
    role: "Percussion",
    image: "/images/ishan2.jpg",
    video: "/videos/ishanVid.mp4",
    description: "Ishan adds rhythmic complexity and world music flavors to Midlane's sound.",
    journey: "Started with traditional Sri Lankan percussion instruments.",
    socials: { facebook: "https://www.facebook.com/ishanlahiru.silwa", instagram: "https://www.instagram.com/ishan_silva/", youtube: "#", spotify: "#" }
  }
};

export default function Members() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);

  const openModal = (key) => setSelectedMember(memberData[key]);
  const closeModal = () => setSelectedMember(null);

  return (
    <section id="members" className="members-section">
      <div className="members-inner">
        <div className="members-header">
          <p className="members-eyebrow">The Band</p>
          <h2 className="members-title">MEET THE BAND</h2>
          <div className="members-divider">
            <span className="members-divider-line"></span>
            <span className="members-divider-dot"></span>
            <span className="members-divider-line"></span>
          </div>
        </div>

        <div className="members-grid">
          {Object.entries(memberData).map(([key, member]) => (
            <div
              key={key}
              className={`member-card ${hoveredMember === key ? "hovered" : ""}`}
              onClick={() => openModal(key)}
              onMouseEnter={() => setHoveredMember(key)}
              onMouseLeave={() => setHoveredMember(null)}
              tabIndex={0}
              role="button"
            >
              <div className="member-image-wrapper">
                <img src={member.image} alt={member.name} className="member-image" />
                <div className="member-overlay">
                  <span className="member-view">View Profile</span>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
              <div className="member-card-border"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <MemberModal member={selectedMember} onClose={closeModal} />
      )}
    </section>
  );
}
