import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export function useGsapAnimations() {
  const root = useRef(null);
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      if (!("IntersectionObserver" in window)) return;
      const context = gsap.context(() => {}, root);
      context.add("reveal", (target) => {
        gsap.fromTo(target, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out", clearProps: "opacity,transform" });
      });
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (!isIntersecting) return;
          observer.unobserve(target);
          // Content stays visible until its first entrance, with no nested reveals.
          context.reveal(target);
        });
      }, { threshold: 0.08 });
      root.current?.querySelectorAll(".reveal, .stagger").forEach((element) => {
        if (!element.parentElement.closest(".reveal, .stagger")) observer.observe(element);
      });
      return () => { observer.disconnect(); context.revert(); };
    }, root);
    return () => media.revert();
  }, []);
  return root;
}

