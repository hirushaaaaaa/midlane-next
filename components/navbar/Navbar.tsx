"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./Navbar.css";

interface NavbarProps {
  onNavigation?: () => void;
}

export default function Navbar({ onNavigation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-open");
    };
  }, [mobileMenuOpen]);

  const handleMobileToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // No e.preventDefault() — let native anchor scrolling work just like the footer links.
  // scroll-margin-top on each section handles the navbar offset (see note below).
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    onNavigation?.();
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Members", id: "members" },
    { name: "Originals", id: "originals" },
    { name: "Events", id: "events" },
    { name: "Partners", id: "partners" },
    { name: "Booking", id: "booking" },
  ];

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${mobileMenuOpen ? "menu-open" : ""}`}
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}
    >
      <div className="navbar-container">
        <ul className="navbar-links navbar-links-left">
          {navItems.slice(0, 3).map((item) => (
            <li key={item.name}>
              <a href={`#${item.id}`} className="nav-link" onClick={handleLinkClick}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <a href="#home" className="navbar-logo" onClick={handleLinkClick}>
          <Image src="/images/Square.png" alt="Midlane Logo" width={50} height={50} className="logo-img" />
        </a>

        <ul className="navbar-links navbar-links-right">
          {navItems.slice(3).map((item) => (
            <li key={item.name}>
              <a href={`#${item.id}`} className="nav-link" onClick={handleLinkClick}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`mobile-toggle ${mobileMenuOpen ? "active" : ""}`}
          onClick={handleMobileToggle}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          type="button"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? "open" : ""}`}
        style={{ pointerEvents: mobileMenuOpen ? "auto" : "none" }}
      >
        <ul className="mobile-nav">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={`#${item.id}`} className="mobile-link" onClick={handleLinkClick}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}