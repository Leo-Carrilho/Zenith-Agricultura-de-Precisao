import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimations() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduceMotion) return;

      const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });
      heroTl
        .from(".header-shell", { y: -18, opacity: 0, duration: 0.7 })
        .from(".hero .eyebrow", { y: 22, opacity: 0, letterSpacing: "0.22em", duration: 0.7 }, "-=0.35")
        .from(".hero h1", { y: 48, opacity: 0, duration: 0.9 }, "-=0.35")
        .from(".hero-copy p", { y: 24, opacity: 0, duration: 0.7 }, "-=0.45")
        .from(".hero-media", { x: -96, y: 35, rotation: -4, scale: 0.94, opacity: 0, duration: 1.05, ease: "expo.out" }, "-=0.45")
        .from(".hud-frame, .hero-radar, .capture-scan, .capture-points span", { opacity: 0, scale: 0.92, duration: 0.62, stagger: 0.08 }, "-=0.35")
        .from(".hero-actions .btn, .hero-chips span", { y: 20, opacity: 0, duration: 0.58, stagger: 0.07 }, "-=0.25")
        .from(".hero-system-card", { y: 24, opacity: 0, duration: 0.65 }, "-=0.25");

      gsap.to(".hero-media", {
        y: -10,
        rotation: 0.4,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(".capture-scan", {
        y: -52,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(".hero-bg", {
        yPercent: 5,
        scale: 1.05,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true, invalidateOnRefresh: true }
      });

      gsap.to(".hero-media", {
        yPercent: -7,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true, invalidateOnRefresh: true }
      });

      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 34,
          opacity: 0,
          duration: 0.72,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 84%", invalidateOnRefresh: true }
        });
      });

      gsap.utils.toArray(".stagger").forEach((group) => {
        const cards = gsap.utils.toArray(group.children);

        gsap.from(cards, {
          y: 34,
          opacity: 0,
          duration: 0.7,
          stagger: 0.09,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: { trigger: group, start: "top 82%", invalidateOnRefresh: true }
        });
      });

      gsap.from(".workflow-card", {
        y: 42,
        opacity: 0,
        duration: 0.72,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".workflow-section", start: "top 68%", invalidateOnRefresh: true }
      });

      gsap.to(".flight-map img", {
        scale: 1.08,
        yPercent: -4,
        ease: "none",
        scrollTrigger: { trigger: ".workflow-section", start: "top 30%", end: "bottom 72%", scrub: true, invalidateOnRefresh: true }
      });

      gsap.fromTo(".route-line", { scaleY: 0 }, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: ".signature-section", start: "top 70%", end: "bottom 70%", scrub: true, invalidateOnRefresh: true }
      });

      gsap.from(".route-step", {
        x: 36,
        opacity: 0,
        duration: 0.55,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: { trigger: ".data-route", start: "top 78%", invalidateOnRefresh: true }
      });

      gsap.fromTo(".signal-line", { scaleX: 0 }, {
        scaleX: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: ".workflow-stage", start: "top 78%", invalidateOnRefresh: true }
      });

      gsap.from(".dashboard-mock", {
        y: 52,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: { trigger: ".platform", start: "top 68%", invalidateOnRefresh: true }
      });

      gsap.to(".dashboard-mock img", {
        scale: 1.08,
        xPercent: -2,
        yPercent: -1,
        ease: "none",
        scrollTrigger: { trigger: ".platform", start: "top 62%", end: "bottom 40%", scrub: true, invalidateOnRefresh: true }
      });

      gsap.from(".console-metrics article, .ai-flow article, .status-chip", {
        y: 24,
        opacity: 0,
        duration: 0.58,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: ".ai-console", start: "top 76%", invalidateOnRefresh: true }
      });

      gsap.from(".analysis-marks span, .analysis-marks em, .row-lines", {
        opacity: 0,
        scale: 0.92,
        duration: 0.55,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: ".planting-vision", start: "top 68%", invalidateOnRefresh: true }
      });

      gsap.from(".tech-row article", {
        y: 30,
        opacity: 0,
        duration: 0.66,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".technology-section", start: "top 72%", invalidateOnRefresh: true }
      });

      gsap.from(".cta-grid > *", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: ".cta-section", start: "top 72%", invalidateOnRefresh: true }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return root;
}
