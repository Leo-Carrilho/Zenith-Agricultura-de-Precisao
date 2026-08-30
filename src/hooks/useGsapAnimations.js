import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimations() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.classList.add("gsap-ready");

    const ctx = gsap.context(() => {
      const cardEase = "power3.out";
      const revealElement = (selector, vars = {}) => {
        gsap.utils.toArray(selector).forEach((el) => {
          gsap.set(el, {
            autoAlpha: 0,
            y: vars.y ?? 54,
            scale: vars.scale ?? 1,
            clipPath: vars.clipPathFrom,
            willChange: "transform, opacity"
          });

          gsap.to(el, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            clipPath: vars.clipPathTo,
            duration: vars.duration ?? 0.92,
            ease: vars.ease ?? cardEase,
            clearProps: vars.clearProps ?? "transform,opacity,visibility,willChange",
            scrollTrigger: {
              trigger: el,
              start: vars.start ?? "top 94%",
              once: true,
              invalidateOnRefresh: true
            }
          });
        });
      };

      const revealGroup = (selector, vars = {}) => {
        gsap.utils.toArray(selector).forEach((group) => {
          const items = gsap.utils.toArray(group.children);
          gsap.set(items, {
            autoAlpha: 0,
            y: vars.y ?? 64,
            scale: vars.scale ?? 0.98,
            willChange: "transform, opacity"
          });

          gsap.to(items, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: vars.duration ?? 0.86,
            stagger: vars.stagger ?? 0.11,
            ease: vars.ease ?? cardEase,
            clearProps: "transform,opacity,visibility,willChange",
            scrollTrigger: {
              trigger: group,
              start: vars.start ?? "top 94%",
              once: true,
              invalidateOnRefresh: true
            }
          });
        });
      };

      if (reduceMotion) {
        gsap.set(".header-shell, .hero .eyebrow, .hero h1, .hero-copy p, .hero-media, .hud-frame, .hero-radar, .capture-scan, .capture-points span, .hero-actions .btn, .hero-chips span, .hero-system-card", {
          clearProps: "all"
        });
      } else {
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
      }

      if (!reduceMotion) {
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
      }

      revealElement(".reveal:not(.hero-copy):not(.hero-media):not(.dashboard-mock):not(.workflow-visual):not(.planting-card):not(.modelo-3d)", { y: 46, duration: 0.86 });
      revealGroup(".stagger", { y: 68, scale: 0.97, stagger: 0.11, start: "top 94%" });
      revealElement(".install-preview, .dashboard-mock, .workflow-visual, .planting-card, .modelo-3d", {
        y: 42,
        scale: 0.98,
        duration: 0.9,
        clipPathFrom: "inset(16% 0 0 0 round 24px)",
        clipPathTo: "inset(0% 0 0 0 round 24px)",
        clearProps: "transform,opacity,visibility,clipPath"
      });

      if (!reduceMotion) {
        gsap.to(".flight-map img", {
          scale: 1.08,
          yPercent: -4,
          ease: "none",
          scrollTrigger: { trigger: ".workflow-section", start: "top 30%", end: "bottom 72%", scrub: true, invalidateOnRefresh: true }
        });
      }

      gsap.fromTo(".route-line", { scaleY: 0 }, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: ".signature-section", start: "top 70%", end: "bottom 70%", scrub: true, invalidateOnRefresh: true }
      });

      gsap.fromTo(".route-step", { autoAlpha: 0, x: 34, y: 18, scale: 0.98 }, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.58,
        stagger: 0.08,
        ease: cardEase,
        clearProps: "transform,opacity,visibility",
        scrollTrigger: { trigger: ".data-route", start: "top 80%", once: true, invalidateOnRefresh: true }
      });

      gsap.fromTo(".signal-line", { scaleX: 0 }, {
        scaleX: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: ".workflow-stage", start: "top 78%", invalidateOnRefresh: true }
      });

      if (!reduceMotion) {
        gsap.to(".dashboard-mock img", {
          scale: 1.08,
          xPercent: -2,
          yPercent: -1,
          ease: "none",
          scrollTrigger: { trigger: ".platform", start: "top 62%", end: "bottom 40%", scrub: true, invalidateOnRefresh: true }
        });
      }

      gsap.fromTo(".console-metrics article, .ai-flow article, .status-chip", { autoAlpha: 0, y: 34, scale: 0.96 }, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.72,
        stagger: 0.1,
        ease: cardEase,
        clearProps: "transform,opacity,visibility",
        scrollTrigger: { trigger: ".ai-console", start: "top 78%", once: true, invalidateOnRefresh: true }
      });

      gsap.from(".analysis-marks span, .analysis-marks em, .row-lines", {
        opacity: 0,
        scale: 0.92,
        duration: 0.55,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: ".planting-vision", start: "top 68%", invalidateOnRefresh: true }
      });

      revealGroup(".tech-row", { y: 60, scale: 0.97, stagger: 0.1, start: "top 78%" });
      revealGroup(".cta-grid", { y: 46, scale: 0.98, stagger: 0.12, start: "top 76%" });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, root);

    return () => {
      document.body.classList.remove("gsap-ready");
      ctx.revert();
    };
  }, []);

  return root;
}
