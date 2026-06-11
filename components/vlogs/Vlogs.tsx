"use client";

import React from "react";
import "./Vlogs.css";

const topRowVideos = [
  { id: 1, src: "https://www.youtube.com/embed/V3hixwS1WJw", thumbnail: "https://img.youtube.com/vi/V3hixwS1WJw/maxresdefault.jpg", title: "Midlane Vlog 1" },
  { id: 2, src: "https://www.youtube.com/embed/SGl4JQTlAgI", thumbnail: "https://img.youtube.com/vi/SGl4JQTlAgI/maxresdefault.jpg", title: "Midlane Vlog 2" },
  { id: 3, src: "https://www.youtube.com/embed/_aMlGNnu1bk", thumbnail: "https://img.youtube.com/vi/_aMlGNnu1bk/maxresdefault.jpg", title: "Midlane Vlog 3" },
  { id: 4, src: "https://www.youtube.com/embed/dKqS9Axrr48", thumbnail: "https://img.youtube.com/vi/dKqS9Axrr48/maxresdefault.jpg", title: "Midlane Vlog 4" },
  { id: 5, src: "https://www.youtube.com/embed/Js0NQtuZL8Q", thumbnail: "https://img.youtube.com/vi/Js0NQtuZL8Q/maxresdefault.jpg", title: "Midlane Vlog 5" },
  { id: 6, src: "https://www.youtube.com/embed/dT_vzoZKKSw", thumbnail: "https://img.youtube.com/vi/dT_vzoZKKSw/maxresdefault.jpg", title: "Midlane Vlog 6" },
  { id: 7, src: "https://www.youtube.com/embed/X4gQ8Ekh_As", thumbnail: "https://img.youtube.com/vi/X4gQ8Ekh_As/maxresdefault.jpg", title: "Midlane Vlog 7" },
  { id: 8, src: "https://www.youtube.com/embed/tfEee9ZnSxs", thumbnail: "https://img.youtube.com/vi/tfEee9ZnSxs/maxresdefault.jpg", title: "Midlane Vlog 8" },
  { id: 9, src: "https://www.youtube.com/embed/7QVn1OnUQDs", thumbnail: "https://img.youtube.com/vi/7QVn1OnUQDs/maxresdefault.jpg", title: "Midlane Vlog 9" },
  { id: 10, src: "https://www.youtube.com/embed/7j0NyATQ-_c", thumbnail: "https://img.youtube.com/vi/7j0NyATQ-_c/maxresdefault.jpg", title: "Midlane Vlog 10" },
];

const bottomRowVideos = [
  { id: 11, src: "https://www.youtube.com/embed/f17Hv8wUcPA", thumbnail: "https://img.youtube.com/vi/f17Hv8wUcPA/maxresdefault.jpg", title: "Midlane Vlog 11" },
  { id: 12, src: "https://www.youtube.com/embed/qcijEIULhOg", thumbnail: "https://img.youtube.com/vi/qcijEIULhOg/maxresdefault.jpg", title: "Midlane Vlog 12" },
  { id: 13, src: "https://www.youtube.com/embed/ypi33A14sac", thumbnail: "https://img.youtube.com/vi/ypi33A14sac/maxresdefault.jpg", title: "Midlane Vlog 13" },
  { id: 14, src: "https://www.youtube.com/embed/UWdfenCIWKo", thumbnail: "https://img.youtube.com/vi/UWdfenCIWKo/maxresdefault.jpg", title: "Midlane Vlog 14" },
  { id: 15, src: "https://www.youtube.com/embed/FZ8Fx9n53gA", thumbnail: "https://img.youtube.com/vi/FZ8Fx9n53gA/maxresdefault.jpg", title: "Midlane Vlog 15" },
  { id: 16, src: "https://www.youtube.com/embed/d5HZMz7Rbk4", thumbnail: "https://img.youtube.com/vi/d5HZMz7Rbk4/maxresdefault.jpg", title: "Midlane Vlog 16" },
  { id: 17, src: "https://www.youtube.com/embed/k4IVWpVtil4", thumbnail: "https://img.youtube.com/vi/k4IVWpVtil4/maxresdefault.jpg", title: "Midlane Vlog 17" },
  { id: 18, src: "https://www.youtube.com/embed/gEaTKoWNfpQ", thumbnail: "https://img.youtube.com/vi/gEaTKoWNfpQ/maxresdefault.jpg", title: "Midlane Vlog 18" },
  { id: 19, src: "https://www.youtube.com/embed/d2zECs939Wg", thumbnail: "https://img.youtube.com/vi/d2zECs939Wg/maxresdefault.jpg", title: "Midlane Vlog 19" },
  { id: 20, src: "https://www.youtube.com/embed/CgTbgk-qjdQ", thumbnail: "https://img.youtube.com/vi/CgTbgk-qjdQ/maxresdefault.jpg", title: "Midlane Vlog 20" },
  { id: 21, src: "https://www.youtube.com/embed/3G_ZHXP3vkk", thumbnail: "https://img.youtube.com/vi/3G_ZHXP3vkk/maxresdefault.jpg", title: "Midlane Vlog 21" }
];

export default function Vlogs() {
  const handleVideoClick = (videoSrc: string) => {
    window.open(videoSrc.replace("/embed/", "/watch?v="), "_blank");
  };

  const PlayIcon = () => (
    <svg width="50" height="50" viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="30" fill="rgba(220, 20, 60, 0.85)" />
      <path d="M24 18L42 30L24 42V18Z" fill="white" />
    </svg>
  );

  return (
    <div className="vlogs-section">
      <div className="vlogs-container">
        <div className="vlogs-header">
          <p className="vlogs-eyebrow">Behind The Scenes</p>
          <h2 className="vlogs-title">VLOGS & HIGHLIGHTS</h2>
          <div className="vlogs-divider">
            <span className="vlogs-divider-line"></span>
            <span className="vlogs-divider-dot"></span>
            <span className="vlogs-divider-line"></span>
          </div>
          <p className="vlogs-description">
            Get an inside look at Midlane journey through our exclusive vlogs and highlights
          </p>
        </div>

        <div className="carousel-wrapper">
          <div className="carousel-track carousel-track-ltr">
            {[...topRowVideos, ...topRowVideos].map((video, i) => (
              <div key={i} className="vlog-card" onClick={() => handleVideoClick(video.src)}>
                <div className="vlog-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-overlay"><PlayIcon /></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-wrapper">
          <div className="carousel-track carousel-track-rtl">
            {[...bottomRowVideos, ...bottomRowVideos].map((video, i) => (
              <div key={i} className="vlog-card" onClick={() => handleVideoClick(video.src)}>
                <div className="vlog-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-overlay"><PlayIcon /></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
