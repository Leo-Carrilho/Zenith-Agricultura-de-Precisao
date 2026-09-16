import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PARALLAX = {
  text: 16,
  card: 28,
  image: 48,
  decoration: 34,
  hero: 92,
};

const sceneDefaults = { start: "top bottom", end: "bottom top", scrub: 0.65 };

function addScene(root, sectionSelector, build, options = {}) {
  const section = root.querySelector(sectionSelector);
  if (!section) return;
  const q = gsap.utils.selector(section);
  const timeline = gsap.timeline({
    scrollTrigger: { trigger: section, ...sceneDefaults, ...options }
  });
  build(timeline, q);
}

function initScrollReveals(root, motionScale) {
  const sections = root.querySelectorAll("main > .section:not(.hero)");

  sections.forEach((section) => {
    const items = section.querySelectorAll(".reveal, .stagger > article");
    if (!items.length) return;

    gsap.from(items, {
      autoAlpha: 0,
      clipPath: "inset(0 0 12% 0)",
      duration: 0.58 * motionScale,
      stagger: 0.08 * motionScale,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 82%",
        toggleActions: "play none none reverse"
      }
    });
  });
}

function initHeroParallax(root, amount) {
  const hero = root.querySelector(".hero");
  if (!hero) return;
  const q = gsap.utils.selector(hero);

  gsap.timeline({ defaults: { ease: "power3.out" } })
    .from(q(".hero-copy .eyebrow"), { autoAlpha: 0, y: 14, duration: 0.65 })
    .from(q(".hero-copy h1"), { autoAlpha: 0, y: 24, duration: 0.78 }, "-=0.38")
    .from(q(".hero-copy > p, .hero-copy .hero-actions"), { autoAlpha: 0, y: 14, stagger: 0.1, duration: 0.62 }, "-=0.42")
    .from(q(".hero-visual"), { autoAlpha: 0, y: 24, scale: 0.99, duration: 0.9 }, "-=0.6");

  const timeline = gsap.timeline({
    scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.7 }
  });
  timeline
    .to(q(".hero-bg"), { y: amount(PARALLAX.hero * 0.2), scale: 1.07, ease: "none" }, 0)
    .to(q(".hero-orbits"), { y: -amount(PARALLAX.decoration), ease: "none" }, 0)
    .to(q(".hero-copy"), { y: -amount(PARALLAX.hero * 0.55), ease: "none" }, 0)
    .to(q(".hero-highlights"), { y: -amount(PARALLAX.card), ease: "none" }, 0)
    .to(q(".hero-visual"), { x: amount(18), y: -amount(PARALLAX.hero), rotation: 0.7, ease: "none" }, 0)
    .to(q(".hero-media > img"), { scale: 1.06, y: amount(14), ease: "none" }, 0)
    .to(q(".vigor-card"), { x: amount(10), y: -amount(24), ease: "none" }, 0)
    .to(q(".field-card"), { x: -amount(14), y: -amount(36), ease: "none" }, 0);
}

function initFeaturesParallax(root, amount) {
  addScene(root, ".operation-center", (tl, q) => {
    tl.to(q(".section-head"), { y: -amount(PARALLAX.text), ease: "none" }, 0)
      .to(q(".resource-card"), { y: (index) => -amount([16, 27, 22, 34][index] ?? 18), ease: "none" }, 0)
      .to(q(".feature-visual img"), { y: amount(18), scale: 1.04, ease: "none" }, 0);
  });
}

function initWorkflowParallax(root, amount) {
  addScene(root, ".workflow-section", (tl, q) => {
    tl.to(q(".workflow-visual"), { y: -amount(PARALLAX.image), ease: "none" }, 0)
      .to(q(".flight-map img"), { scale: 1.06, y: amount(16), ease: "none" }, 0)
      .to(q(".workflow-content .section-head"), { y: -amount(PARALLAX.text), ease: "none" }, 0)
      .to(q(".workflow-stage"), { x: amount(12), y: -amount(18), ease: "none" }, 0)
      .to(q(".signal-line"), { scaleX: 1.22, transformOrigin: "left center", ease: "none" }, 0)
      .to(q(".workflow-card"), { y: (index) => -amount([13, 22, 17, 27, 20][index] ?? 16), ease: "none" }, 0.08)
      .to(q(".support-note"), { y: -amount(10), ease: "none" }, 0);
  });
}

function initMultispectralParallax(root, amount) {
  addScene(root, ".multispectral-section", (tl, q) => {
    tl.to(q(".multispectral-intro .section-head"), { y: -amount(PARALLAX.text), ease: "none" }, 0)
      .to(q(".multispectral-steps article"), { y: (index) => -amount([12, 22, 16][index] ?? 14), ease: "none" }, 0)
      .to(q(".multispectral-map"), { y: (index) => -amount([12, 22, 16, 27, 18][index] ?? 14), ease: "none" }, 0.12)
      .to(q(".multispectral-map img"), { scale: 1.025, ease: "none" }, 0.12)
      .to(q(".multispectral-note"), { y: -amount(14), ease: "none" }, 0);
  });
}

function initPlatformAndAiParallax(root, amount) {
  addScene(root, ".platform", (tl, q) => {
    tl.to(q(".section-copy"), { y: -amount(PARALLAX.text), ease: "none" }, 0)
      .to(q(".dashboard-mock"), { y: -amount(PARALLAX.image), ease: "none" }, 0)
      .to(q(".dashboard-mock img"), { y: amount(16), scale: 1.035, ease: "none" }, 0)
      .to(q(".platform-journey"), { x: amount(18), y: -amount(12), ease: "none" }, 0);
  });
  addScene(root, ".ai-section", (tl, q) => {
    tl.to(q(".section-copy"), { y: -amount(PARALLAX.text), ease: "none" }, 0)
      .to(q(".ai-console"), { y: -amount(PARALLAX.image), scale: 1.012, ease: "none" }, 0)
      .to(q(".ai-sample"), { x: amount(12), ease: "none" }, 0)
      .to(q(".ai-flow article"), { y: (index) => -amount([12, 20, 15][index] ?? 12), ease: "none" }, 0)
      .to(q(".class-grid article"), { y: (index) => -amount([10, 18, 14, 21][index] ?? 12), ease: "none" }, 0.08);
  });
}

function initMonitoringParallax(root, amount) {
  addScene(root, ".signature-section", (tl, q) => {
    tl.to(q(".section-copy"), { y: -amount(PARALLAX.text), ease: "none" }, 0)
      .to(q(".data-route"), { y: -amount(30), ease: "none" }, 0)
      .to(q(".route-step"), { x: (index) => amount(index % 2 ? 10 : -8), y: (index) => -amount(8 + index * 2), ease: "none" }, 0);
  });
  addScene(root, ".planting-vision", (tl, q) => {
    tl.to(q(".section-head"), { y: -amount(PARALLAX.text), ease: "none" }, 0)
      .to(q(".planting-card"), { y: -amount(28), ease: "none" }, 0)
      .to(q(".preview-image img"), { y: amount(16), scale: 1.035, ease: "none" }, 0)
      .to(q(".planting-report"), { y: -amount(12), ease: "none" }, 0);
  });
  addScene(root, ".three-d", (tl, q) => {
    tl.to(q(".modelo-3d"), { y: -amount(PARALLAX.image), ease: "none" }, 0)
      .to(q(".section-copy"), { y: -amount(PARALLAX.text), ease: "none" }, 0);
  });
}

function initOperationsParallax(root, amount) {
  addScene(root, ".management-section", (tl, q) => {
    tl.to(q(".section-head"), { y: -amount(PARALLAX.text), ease: "none" }, 0)
      .to(q(".property-panel article"), { y: (index) => -amount([10, 16, 13, 20][index] ?? 12), ease: "none" }, 0)
      .to(q(".module-grid article"), { y: (index) => -amount(12 + (index % 3) * 6), ease: "none" }, 0.1);
  });
  addScene(root, ".accounts", (tl, q) => {
    tl.to(q(".section-head"), { y: -amount(PARALLAX.text), ease: "none" }, 0)
      .to(q(".account-console"), { y: -amount(26), ease: "none" }, 0)
      .to(q(".status-line"), { x: amount(14), y: -amount(12), ease: "none" }, 0);
  });
  addScene(root, ".install-section", (tl, q) => {
    tl.to(q(".section-head"), { y: -amount(PARALLAX.text), ease: "none" }, 0)
      .to(q(".install-card"), { y: (index) => -amount([22, 34][index] ?? 22), ease: "none" }, 0)
      .to(q(".install-preview img"), { y: amount(12), scale: 1.03, ease: "none" }, 0);
  });
}

function initClosingParallax(root, amount) {
  addScene(root, ".technology-section", (tl, q) => {
    tl.to(q(".section-head"), { y: -amount(PARALLAX.text), ease: "none" }, 0)
      .to(q(".tech-row article"), { y: (index) => -amount(12 + (index % 3) * 5), ease: "none" }, 0);
  });
  addScene(root, ".team-section", (tl, q) => {
    tl.to(q(".section-head"), { y: -amount(PARALLAX.text), ease: "none" }, 0)
      .to(q(".team-card"), { y: (index) => -amount([16, 28, 20, 32][index] ?? 16), ease: "none" }, 0)
      .to(q(".team-avatar"), { y: -amount(8), scale: 1.04, ease: "none" }, 0);
  });
  addScene(root, ".about-project", (tl, q) => {
    tl.to(q(".section-copy"), { y: -amount(PARALLAX.text), ease: "none" }, 0)
      .to(q(".body-copy"), { y: -amount(24), ease: "none" }, 0)
      .to(q(".about-metrics article"), { y: (index) => -amount(8 + index * 5), ease: "none" }, 0)
      .to(q(".flow-card"), { y: (index) => -amount(12 + (index % 3) * 6), ease: "none" }, 0);
  });
  addScene(root, ".faq-section", (tl, q) => {
    tl.to(q(".section-head"), { y: -amount(PARALLAX.text), ease: "none" }, 0)
      .to(q(".faq-item"), { y: (index) => -amount(6 + index * 3), ease: "none" }, 0);
  });
  addScene(root, ".cta-section", (tl, q) => {
    tl.to(q(".section-copy"), { y: -amount(20), ease: "none" }, 0)
      .to(q(".contact-note"), { x: amount(14), y: -amount(30), ease: "none" }, 0);
  });
  addScene(root, ".footer", (tl, q) => {
    tl.to(q(".footer-brand"), { y: -amount(12), ease: "none" }, 0)
      .to(q(".footer-grid nav"), { y: (index) => -amount(8 + index * 4), ease: "none" }, 0)
      .to(q(".footer-bottom"), { y: -amount(8), ease: "none" }, 0);
  }, { start: "top 95%", end: "bottom bottom" });
}

export function useGsapAnimations() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const scope = root.current;
    if (!scope) return undefined;
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add({ desktop: "(min-width: 768px)", motion: "(prefers-reduced-motion: no-preference)" }, (conditions) => {
        // Alguns navegadores em dispositivos de demonstração reportam movimento
        // reduzido por padrão. Não interrompa o ScrollTrigger nesse cenário:
        // mantenha a navegação com uma intensidade mais discreta.
        const motionScale = conditions.motion ? 1 : 0.42;
        const amount = (value) => value * (conditions.desktop ? 1 : 0.38) * motionScale;
        initScrollReveals(scope, motionScale);
        initHeroParallax(scope, amount);
        initFeaturesParallax(scope, amount);
        initWorkflowParallax(scope, amount);
        initMultispectralParallax(scope, amount);
        initPlatformAndAiParallax(scope, amount);
        initMonitoringParallax(scope, amount);
        initOperationsParallax(scope, amount);
        initClosingParallax(scope, amount);
        requestAnimationFrame(() => ScrollTrigger.refresh());
        return undefined;
      });
    }, scope);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return root;
}
