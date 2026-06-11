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

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const scrollTriggerRef = useRef(null);

  const refreshAnimations = () => {
    setTimeout(() => {
      ScrollTrigger.refresh();
      const currentScroll = window.scrollY;
      window.scrollTo(0, currentScroll + 1);
      window.scrollTo(0, currentScroll - 1);
    }, 100);
  };

 const handleLoadingComplete = () => {
  setLoadingComplete(true);
  setTimeout(() => {
    ScrollTrigger.refresh(true);
  }, 800); // give GSAP time to set up all ScrollTriggers first
};

  useEffect(() => {
    if (!loadingComplete) return;

    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setupLayout = () => {
      const navbar = document.querySelector(".navbar");
      const cursor = document.querySelector(".custom-cursor");

      if (navbar) {
        gsap.set(navbar, {
          position: "fixed", top: 0, left: 0, right: 0,
          zIndex: 1000, clearProps: "transform,x,y,scale,rotation", force3D: true,
        });
        document.body.style.paddingTop = "0";
        document.body.style.margin = "0";
      }

      if (cursor) {
        gsap.set(cursor, { zIndex: 1001, position: "fixed" });
      }
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

    const getAnimationConfig = () => {
      if (isMobile) return { duration: 0.6, y: 30, stagger: 0.1, scrollStart: "top 90%", ease: "power2.out" };
      if (isTablet) return { duration: 0.8, y: 40, stagger: 0.15, scrollStart: "top 85%", ease: "power2.out" };
      return { duration: 1, y: 50, stagger: 0.2, scrollStart: "top 80%", ease: "power2.out" };
    };

    const config = getAnimationConfig();

    const heroTitle = document.querySelector(".hero-title");
    if (heroTitle) {
      gsap.set(heroTitle, { opacity: 1, visibility: "visible" });
      gsap.from(heroTitle, {
        duration: config.duration * 1.5, y: config.y, opacity: 0,
        scale: 0.95, rotationX: -5, transformOrigin: "center bottom",
        ease: "power4.out", delay: 0,
      });
      gsap.to(heroTitle, { y: -10, duration: 3, ease: "sine.inOut", repeat: -1, yoyo: true });
    }

    const heroSection = document.querySelector(".hero");
    if (heroSection && !isMobile) {
      gsap.to(heroSection, {
        yPercent: 30, ease: "none",
        scrollTrigger: { trigger: heroSection, start: "top top", end: "bottom top", scrub: 1 },
      });
    }

    const navbar = document.querySelector(".navbar");
    if (navbar) {
      ScrollTrigger.create({
        start: "top -50", end: 99999,
        toggleClass: { className: "scrolled", targets: navbar },
        onUpdate: (self) => {
          const progress = Math.min(self.progress * 2, 1);
          gsap.to(navbar, {
            backdropFilter: `blur(${progress * 10 + 15}px)`,
            backgroundColor: `rgba(0, 0, 0, ${progress * 0.2 + 0.1})`,
            duration: 0.3,
          });
        },
      });
    }

    let mm = gsap.matchMedia();
    scrollTriggerRef.current = mm as any;

    const setupSectionAnimations = () => {
      mm.add("(max-width: 768px)", () => {
        const sections = gsap.utils.toArray("section:not(.hero):not(.navbar)");
        sections.forEach((section) => {
          gsap.fromTo(section,
            { opacity: 0, y: 40, scale: 0.98 },
            {
              opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out",
              immediateRender: true,
              scrollTrigger: {
                trigger: section as Element, start: "top 95%", end: "bottom 5%",
                toggleActions: "play none none none", invalidateOnRefresh: true,
              }
            }
          );
        });

        const cards = gsap.utils.toArray(".music-placeholder, .member-card, .tour-card");
        if (cards.length > 0) {
          gsap.set(cards, { opacity: 0, y: 30, scale: 0.95, rotationY: 5 });
          ScrollTrigger.batch(cards as Element[], {
            start: "top 95%",
            onEnter: (elements) => gsap.to(elements, { opacity: 1, y: 0, scale: 1, rotationY: 0, duration: 0.6, stagger: 0.08, ease: "back.out(1.2)" }),
            onLeave: (elements) => gsap.to(elements, { opacity: 1, scale: 1, duration: 0.4 }),
            onEnterBack: (elements) => gsap.to(elements, { opacity: 1, scale: 1, duration: 0.5 }),
          });
        }
      });

      mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
        const sections = gsap.utils.toArray("section:not(.hero):not(.navbar)");
        sections.forEach((section) => {
          gsap.fromTo(section,
            { opacity: 0, y: 60, scale: 0.95 },
            {
              opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out",
              immediateRender: true,
              scrollTrigger: {
                trigger: section as Element, start: "top 90%", end: "bottom 10%",
                toggleActions: "play none none none",
              }
            }
          );
        });

        const cards = gsap.utils.toArray(".member-card, .tour-card");
        cards.forEach((card) => {
          (card as Element).addEventListener("mouseenter", () => gsap.to(card, { scale: 1.05, y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.3)", duration: 0.3, ease: "power2.out" }));
          (card as Element).addEventListener("mouseleave", () => gsap.to(card, { scale: 1, y: 0, boxShadow: "0 5px 15px rgba(0,0,0,0.1)", duration: 0.3, ease: "power2.inOut" }));
        });
      });

      mm.add("(min-width: 1025px)", () => {
        const sections = gsap.utils.toArray("section:not(.hero):not(.navbar)");
        sections.forEach((section) => {
          gsap.fromTo(section,
            { opacity: 0, y: 80, scale: 0.9 },
            {
              opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out",
              immediateRender: true,
              scrollTrigger: {
                trigger: section as Element, start: "top 85%", end: "bottom 15%",
                toggleActions: "play none none none",
              }
            }
          );
        });

        const aboutImageWrapper = document.querySelector(".about-image-wrapper");
        if (aboutImageWrapper) {
          gsap.set(aboutImageWrapper, { transformStyle: "preserve-3d", transformPerspective: 1000 });
          gsap.fromTo(aboutImageWrapper,
            { opacity: 0, scale: 0.9, rotationY: 15, rotationX: 5, z: -50 },
            {
              opacity: 1, scale: 1, rotationY: 0, rotationX: 0, z: 0, duration: 1.2, ease: "power3.out",
              immediateRender: true,
              scrollTrigger: { trigger: aboutImageWrapper, start: "top 90%", toggleActions: "play none none none" }
            }
          );

          aboutImageWrapper.addEventListener("mousemove", (e) => {
            const evt = e as MouseEvent;
            const rect = (aboutImageWrapper as HTMLElement).getBoundingClientRect();
            const rotateX = (evt.clientY - rect.top - rect.height / 2) / 20;
            const rotateY = (rect.width / 2 - (evt.clientX - rect.left)) / 20;
            gsap.to(aboutImageWrapper, { rotationX: rotateX, rotationY: rotateY, transformPerspective: 1000, duration: 0.3, ease: "power2.out" });
          });

          aboutImageWrapper.addEventListener("mouseleave", () => {
            gsap.to(aboutImageWrapper, { rotationX: 0, rotationY: 0, duration: 0.5, ease: "power2.out" });
          });
        }

        const memberCards = gsap.utils.toArray(".member-card");
        memberCards.forEach((element) => {
          const memberName = (element as Element).querySelector(".member-name, .member-title, h3, h4, .name");
          if (memberName) {
            gsap.set(memberName, { opacity: 1, y: 0, scale: 1, rotationX: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" });
          }

          gsap.fromTo(element,
            { opacity: 0, scale: 0.85, rotationY: 25, rotationX: 10, z: -100 },
            {
              opacity: 1, scale: 1, rotationY: 0, rotationX: 0, z: 0, duration: 1.2, ease: "power3.out",
              immediateRender: true,
              scrollTrigger: { trigger: element as Element, start: "top 90%", toggleActions: "play none none none" }
            }
          );

          (element as Element).addEventListener("mousemove", (e) => {
            const evt = e as MouseEvent;
            const rect = (element as HTMLElement).getBoundingClientRect();
            const rotateX = (evt.clientY - rect.top - rect.height / 2) / 10;
            const rotateY = (rect.width / 2 - (evt.clientX - rect.left)) / 10;
            gsap.to(element, { rotationX: rotateX, rotationY: rotateY, transformPerspective: 1000, duration: 0.5, ease: "power2.out" });
          });

          (element as Element).addEventListener("mouseleave", () => {
            gsap.to(element, { rotationX: 0, rotationY: 0, duration: 0.5, ease: "power2.out" });
          });
        });

        const aboutImage = document.querySelector(".about-image-wrapper img");
        if (aboutImage) {
          gsap.to(aboutImage, {
            yPercent: 15, ease: "none",
            scrollTrigger: { trigger: (aboutImage as HTMLElement).parentElement, start: "top bottom", end: "bottom top", scrub: 1 },
          });
        }

        const heroImages = gsap.utils.toArray(".hero img");
        heroImages.forEach((img) => {
          gsap.to(img, {
            yPercent: 30, ease: "none",
            scrollTrigger: { trigger: (img as HTMLElement).parentElement, start: "top bottom", end: "bottom top", scrub: 1 },
          });
        });

        const headings = gsap.utils.toArray("h1:not(.navbar h1), h2:not(.navbar h2), h3:not(.navbar h3):not(.member-card h3), h4:not(.navbar h4):not(.member-card h4)");
        headings.forEach((heading) => {
          gsap.fromTo(heading,
            { opacity: 0, y: 50, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
            {
              opacity: 1, y: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1, ease: "power3.out",
              immediateRender: true,
              scrollTrigger: { trigger: heading as Element, start: "top 90%", toggleActions: "play none none none" }
            }
          );
        });

        const grids = gsap.utils.toArray(".members-grid, .originals-grid, .tours-grid");
        grids.forEach((grid) => {
          const items = (grid as HTMLElement).children;
          gsap.fromTo(items,
            { opacity: 0, y: 60, scale: 0.9, rotationX: -15 },
            {
              opacity: 1, y: 0, scale: 1, rotationX: 0, duration: 0.8,
              stagger: { amount: 0.6, from: "start", ease: "power2.out" },
              ease: "back.out(1.4)",
              immediateRender: true,
              scrollTrigger: { trigger: grid as Element, start: "top 85%", toggleActions: "play none none none" }
            }
          );
        });
      });
    };

    requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    setupSectionAnimations();
    ScrollTrigger.refresh(true);
  });
});

    if (isMobile || isTouchDevice) {
      ScrollTrigger.config({ limitCallbacks: true, syncInterval: 150, autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" });
      let scrollTimeout: ReturnType<typeof setTimeout>;
      let isScrolling = false;
      const handleScroll = () => {
        if (!isScrolling) { isScrolling = true; gsap.ticker.lagSmoothing(0); }
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => { isScrolling = false; gsap.ticker.lagSmoothing(500, 33); }, 150);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => { window.removeEventListener("scroll", handleScroll); clearTimeout(scrollTimeout); };
    }

    const handleOrientationChange = () => setTimeout(() => { ScrollTrigger.refresh(); setupLayout(); refreshAnimations(); }, 100);
    const handleResize = () => setTimeout(() => { ScrollTrigger.refresh(); setupLayout(); refreshAnimations(); }, 100);
    const handleNavigation = () => setTimeout(() => refreshAnimations(), 500);

    window.addEventListener("orientationchange", handleOrientationChange);
    window.addEventListener("resize", handleResize);
    window.addEventListener("hashchange", handleNavigation);

    return () => {
      mm.revert();
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("hashchange", handleNavigation);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [loadingComplete]);

  return (
    <div>
      <Loader onLoadingComplete={handleLoadingComplete} />
      {loadingComplete && (
        <>
          <Cursor />
          <Navbar onNavigation={refreshAnimations} />
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