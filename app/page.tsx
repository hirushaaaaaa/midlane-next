// @ts-nocheck
"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "@/components/navbar/Navbar";
import Loader from "@/components/loader/Loader";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Members from "@/components/members/Members";
import Originals from "@/components/originals/Originals";
import Vlogs from "@/components/vlogs/Vlogs";
import WorldwideTours from "@/components/worldwide/WorldwideTours";
import Tours from "@/components/tours/Events";
import Partners from "@/components/partners/Partners";
import Booking from "@/components/booking/Booking";
import Footer from "@/components/footer/Footer";
import Cursor from "@/components/cursor/Cursor";

gsap.registerPlugin(ScrollTrigger);

function setVhVariable() {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight * 0.01}px`
  );
}

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const mmRef = useRef(null);

  useEffect(() => {
    setVhVariable();
    window.addEventListener("resize", setVhVariable, { passive: true });
    return () => window.removeEventListener("resize", setVhVariable);
  }, []);

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          ScrollTrigger.refresh(true);
        }, 500);
      });
    });
  };

  useEffect(() => {
    if (!loadingComplete) return;

    const isMobile = window.innerWidth <= 768;
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const setupLayout = () => {
      const navbar = document.querySelector(".navbar");
      const cursor = document.querySelector(".custom-cursor");
      if (navbar) {
        gsap.set(navbar, {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          clearProps: "transform,x,y,scale,rotation",
          force3D: true,
        });
        document.body.style.paddingTop = "0";
        document.body.style.margin = "0";
      }
      if (cursor) gsap.set(cursor, { zIndex: 1001, position: "fixed" });
    };

    if (prefersReducedMotion) {
      gsap.set(".hero-title", { opacity: 1, y: 0, scale: 1, rotationX: 0 });
      gsap.set("section", { opacity: 1, y: 0 });
      setupLayout();
      return;
    }

    setupLayout();
    setTimeout(setupLayout, 50);
    setTimeout(setupLayout, 200);

    // Hero entrance
    const heroTitle = document.querySelector(".hero-title");
    if (heroTitle) {
      gsap.set(heroTitle, { opacity: 1, visibility: "visible" });
      gsap.from(heroTitle, {
        duration: isMobile ? 0.8 : 1.2,
        y: isMobile ? 20 : 50,
        opacity: 0,
        scale: 0.97,
        ease: "power4.out",
        delay: 0,
      });
      if (!isMobile) {
        gsap.to(heroTitle, {
          y: -10,
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    }

    // Hero parallax (desktop only)
    if (!isMobile) {
      const heroSection = document.querySelector(".hero");
      if (heroSection) {
        gsap.to(heroSection, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }

    // Navbar scroll class
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      ScrollTrigger.create({
        start: "top -50",
        end: 99999,
        toggleClass: { className: "scrolled", targets: navbar },
        onUpdate: (self) => {
          const progress = Math.min(self.progress * 2, 1);
          gsap.to(navbar, {
            backdropFilter: `blur(${progress * 10 + 15}px)`,
            backgroundColor: `rgba(0,0,0,${progress * 0.2 + 0.1})`,
            duration: 0.3,
          });
        },
      });
    }

    const mm = gsap.matchMedia();
    mmRef.current = mm;

    // ─── MOBILE: Skip ScrollTrigger section animations entirely ──────────────
    // On mobile, the most reliable approach is to use IntersectionObserver
    // instead of GSAP ScrollTrigger for section reveals. This avoids all the
    // iOS scroll measurement issues.
    mm.add("(max-width: 768px)", () => {
      // Make all sections visible immediately — no opacity:0 trap
      const sections = gsap.utils.toArray(
        "section:not(.hero-section):not(.navbar)"
      );
      sections.forEach((section) => {
        gsap.set(section, { opacity: 1, y: 0, clearProps: "all" });
      });

      // Use IntersectionObserver for card animations (much more reliable on iOS)
      const cards = document.querySelectorAll(
        ".music-placeholder, .member-card, .tour-card, .simple-event-card, .worldwide-card"
      );

      if (cards.length > 0) {
        // Set initial state
        cards.forEach((card) => {
          (card as HTMLElement).style.opacity = "0";
          (card as HTMLElement).style.transform = "translateY(20px)";
          (card as HTMLElement).style.transition = "opacity 0.5s ease, transform 0.5s ease";
        });

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry, i) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  (entry.target as HTMLElement).style.opacity = "1";
                  (entry.target as HTMLElement).style.transform = "translateY(0)";
                }, i * 60);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
        );

        cards.forEach((card) => observer.observe(card));
      }

      // ScrollTrigger only for navbar
      ScrollTrigger.config({
        limitCallbacks: true,
        syncInterval: 40,
        ignoreMobileResize: true,
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
      });
    });

    mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
      const sections = gsap.utils.toArray(
        "section:not(.hero-section):not(.navbar)"
      );
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: section as Element,
              start: "top 92%",
              toggleActions: "play none none none",
              invalidateOnRefresh: true,
            },
          }
        );
      });
    });

    mm.add("(min-width: 1025px)", () => {
      const sections = gsap.utils.toArray(
        "section:not(.hero-section):not(.navbar)"
      );
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 70, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: "power4.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: section as Element,
              start: "top 87%",
              toggleActions: "play none none none",
              invalidateOnRefresh: true,
            },
          }
        );
      });

      // Desktop-only 3D effects
      const aboutImageWrapper = document.querySelector(".about-image-wrapper");
      if (aboutImageWrapper) {
        gsap.set(aboutImageWrapper, {
          transformStyle: "preserve-3d",
          transformPerspective: 1000,
        });
        gsap.fromTo(
          aboutImageWrapper,
          { opacity: 0, scale: 0.9, rotationY: 15 },
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1.1,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: aboutImageWrapper,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
        aboutImageWrapper.addEventListener("mousemove", (e) => {
          const evt = e as MouseEvent;
          const rect = (aboutImageWrapper as HTMLElement).getBoundingClientRect();
          const rX = (evt.clientY - rect.top - rect.height / 2) / 20;
          const rY = (rect.width / 2 - (evt.clientX - rect.left)) / 20;
          gsap.to(aboutImageWrapper, {
            rotationX: rX,
            rotationY: rY,
            transformPerspective: 1000,
            duration: 0.3,
          });
        });
        aboutImageWrapper.addEventListener("mouseleave", () =>
          gsap.to(aboutImageWrapper, { rotationX: 0, rotationY: 0, duration: 0.5 })
        );
      }

      const memberCards = gsap.utils.toArray(".member-card");
      memberCards.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, scale: 0.85, rotationY: 20 },
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1.1,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: element as Element,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          }
        );
        (element as Element).addEventListener("mousemove", (e) => {
          const evt = e as MouseEvent;
          const rect = (element as HTMLElement).getBoundingClientRect();
          gsap.to(element, {
            rotationX: (evt.clientY - rect.top - rect.height / 2) / 10,
            rotationY: (rect.width / 2 - (evt.clientX - rect.left)) / 10,
            transformPerspective: 1000,
            duration: 0.5,
          });
        });
        (element as Element).addEventListener("mouseleave", () =>
          gsap.to(element, { rotationX: 0, rotationY: 0, duration: 0.5 })
        );
      });

      const headings = gsap.utils.toArray(
        "h1:not(.navbar h1), h2:not(.navbar h2), h3:not(.navbar h3):not(.member-card h3)"
      );
      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 40, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 0.9,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: heading as Element,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      const grids = gsap.utils.toArray(
        ".members-grid, .originals-grid, .tours-grid, .videos-grid, .worldwide-grid, .events-grid"
      );
      grids.forEach((grid) => {
        const items = (grid as HTMLElement).children;
        gsap.fromTo(
          items,
          { opacity: 0, y: 50, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: { amount: 0.5, from: "start" },
            ease: "back.out(1.2)",
            immediateRender: false,
            scrollTrigger: {
              trigger: grid as Element,
              start: "top 87%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      const aboutImage = document.querySelector(".about-image-wrapper img");
      if (aboutImage) {
        gsap.to(aboutImage, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: (aboutImage as HTMLElement).parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    });

    const refreshId = setTimeout(() => ScrollTrigger.refresh(true), 600);

    if (isMobile || isTouchDevice) {
      let scrollTimeout: ReturnType<typeof setTimeout>;
      let isScrolling = false;
      const handleScroll = () => {
        if (!isScrolling) {
          isScrolling = true;
          gsap.ticker.lagSmoothing(0);
        }
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
          gsap.ticker.lagSmoothing(500, 33);
        }, 150);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        clearTimeout(refreshId);
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(scrollTimeout);
        mm.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }

    const onOrientationChange = () => {
      setTimeout(() => {
        setVhVariable();
        ScrollTrigger.refresh(true);
        setupLayout();
      }, 200);
    };
    const onResize = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
        setupLayout();
      }, 150);
    };

    window.addEventListener("orientationchange", onOrientationChange);
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(refreshId);
      mm.revert();
      window.removeEventListener("orientationchange", onOrientationChange);
      window.removeEventListener("resize", onResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [loadingComplete]);

  return (
    <div>
      <Loader onLoadingComplete={handleLoadingComplete} />
      {loadingComplete && (
        <>
          <Cursor />
          <Navbar onNavigation={() => ScrollTrigger.refresh()} />
          <Hero />
          <About />
          <Members />
          <Originals />
          <Vlogs />
          <WorldwideTours />
          <Tours />
          <Partners />
          <Booking />
          <Footer />
        </>
      )}
    </div>
  );
}