import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimations() {
  const root = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduceMotion) return;

      gsap.from(".hero-copy > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });

      gsap.fromTo(".hero-bg", { scale: 1.06 }, { scale: 1, duration: 1.4, ease: "power2.out" });
      gsap.fromTo(".hero-media img", { scale: 1.04 }, { scale: 1, duration: 1.2, ease: "power2.out" });
      gsap.from(".hero-system-card", { y: 24, opacity: 0, duration: 0.75, delay: 0.35, ease: "power2.out" });
      gsap.from(".hud-frame, .hero-radar", { opacity: 0, scale: 0.96, duration: 0.8, delay: 0.45, stagger: 0.1, ease: "power2.out" });

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

      gsap.from(".console-metrics article, .ai-flow article, .status-chip", {
        y: 24,
        opacity: 0,
        duration: 0.58,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: ".ai-console", start: "top 76%", invalidateOnRefresh: true }
      });

      gsap.from(".analysis-marks span, .row-lines", {
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
