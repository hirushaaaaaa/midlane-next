"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./Loader.css";

interface LoaderProps {
  onLoadingComplete: () => void;
}

export default function Loader({ onLoadingComplete }: LoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    const timer = setTimeout(() => {
  setIsLoading(false);
  document.body.classList.remove("overflow-hidden");
  // Delay onLoadingComplete so the page fully renders and paints
  // before ScrollTrigger calculates section positions.
  setTimeout(() => onLoadingComplete(), 100);
}, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="loader-container">
      <div className="loader-content">
        <Image
          src="/images/Roundwhite.png"
          alt="Midlane Logo"
          width={350}
          height={350}
          className="loader-logo"
          priority
        />
        <div className="loader-bar-bg">
          <div className="loader-bar-fill"></div>
        </div>
      </div>
    </div>
  );
}
