import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { navItems, ZENITH_APP_URL } from "../data/siteData";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [progress, setProgress] = useState(0);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main section"));
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setTheme(visible.target.dataset.headerTheme || "light");
        }
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0.12, 0.3, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  const handleAnchorClick = (event, href, shouldFocusButton = false) => {
    if (!href.startsWith("#")) return;
    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    setOpen(false);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", href);

    if (shouldFocusButton) {
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} theme-${theme}`}>
      <span className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="header-shell">
        <a className="brand" href="#inicio" aria-label="Zenith Agro - início" onClick={(event) => handleAnchorClick(event, "#inicio")}>
          <img src="/assets/zenith-logo.png" alt="Zenith Agro" width="50" height="50" />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={(event) => handleAnchorClick(event, href)}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href={ZENITH_APP_URL} target="_blank" rel="noreferrer">
          Acessar plataforma <ArrowRight size={17} aria-hidden="true" />
        </a>
        <button ref={menuButtonRef} className="menu-button" type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <nav id="mobile-menu" className={`mobile-panel ${open ? "is-open" : ""}`} aria-label="Navegação mobile">
        {navItems.map(([label, href]) => (
          <a key={label} href={href} onClick={(event) => handleAnchorClick(event, href, true)}>{label}</a>
        ))}
        <a className="mobile-cta" href={ZENITH_APP_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>Acessar plataforma</a>
      </nav>
    </header>
  );
}
