"use client";

import React, { useEffect } from "react";
import "./Cursor.css";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor") as HTMLElement;

    if (cursor) {
      cursor.style.zIndex = "100000";
      cursor.style.position = "fixed";
    }

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleClick = () => {
      if (cursor) {
        cursor.classList.add("click");
        setTimeout(() => cursor.classList.remove("click"), 300);
      }
    };

    const handleMouseEnter = () => {
      if (cursor) cursor.style.transform += " scale(1.5)";
    };

    const handleMouseLeave = () => {
      if (cursor) cursor.style.transform = cursor.style.transform.replace(" scale(1.5)", "");
    };

    const interactiveElements = document.querySelectorAll<HTMLElement>(
      "button, a, [role=button], .mobile-toggle, .navbar-links a"
    );

    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("click", handleClick);
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return <div className="custom-cursor"></div>;
};

export default Cursor;