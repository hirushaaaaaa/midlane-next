"use client";

import React from "react";
import "./MemberModal.css";

function MemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Close">&times;</button>

        {member.video ? (
          <div className="modal-video-container">
            <video className="modal-video" autoPlay muted loop poster={member.image} playsInline>
              <source src={member.video} type="video/mp4" />
              <img src={member.image} alt={member.name} className="modal-image" />
            </video>
          </div>
        ) : (
          <img src={member.image} alt={member.name} className="modal-image" />
        )}

        <div className="modal-body">
          <h2>{member.name}</h2>
          <h4>{member.role}</h4>
          {member.description && <p>{member.description}</p>}
          {member.journey && <p><strong>Journey: </strong>{member.journey}</p>}
          <div className="social-links">
            {member.socials.facebook && <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>}
            {member.socials.instagram && <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>}
            {member.socials.youtube && <a href={member.socials.youtube} target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>}
            {member.socials.spotify && <a href={member.socials.spotify} target="_blank" rel="noopener noreferrer"><i className="fab fa-spotify"></i></a>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberModal;
