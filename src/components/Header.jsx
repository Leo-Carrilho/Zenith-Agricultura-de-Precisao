import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/siteData";
import { PlatformCTA } from "./PlatformCTA";

export function Brand() {
  return <a className="brand" href="/#inicio" aria-label="Zenith Agro — início"><img src="/assets/zenith-logo.webp" alt="" width="48" height="48" /><span>ZENITH</span></a>;
}
export function Header() {
  const [open, setOpen] = useState(false);
  const trigger = useRef(null);
  const panel = useRef(null);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current.querySelector("a")?.focus();
    const close = () => { setOpen(false); trigger.current?.focus(); };
    const onKey = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "Tab") {
        const links = [...panel.current.querySelectorAll("a")];
        const focusable = [trigger.current, ...links];
        const index = focusable.indexOf(document.activeElement);
        if (event.shiftKey && index === 0) { event.preventDefault(); links.at(-1)?.focus(); }
        if (!event.shiftKey && index === focusable.length - 1) { event.preventDefault(); trigger.current?.focus(); }
      }
    };
    const wide = window.matchMedia("(min-width: 1024px)");
    const onWide = () => { if (wide.matches) close(); };
    document.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);
  const onNavigate = (href) => {
    setOpen(false);
    requestAnimationFrame(() => document.getElementById(href.slice(1))?.focus({ preventScroll: true }));
  };
  const isHome = window.location.pathname.replace(/\/+$/, "") === "";
  return <header className={`site-header${isHome ? " site-header--hero" : ""}`}>
    <a className="skip-link" href="#main">Pular para o conteúdo</a>
    <div className="container header-shell">
      <Brand />
      <nav className="desktop-nav" aria-label="Navegação principal">{navItems.map(([label, href]) => <a key={href} href={`/${href}`}>{label}</a>)}</nav>
      <PlatformCTA className="btn primary header-cta" />
      <button ref={trigger} className="menu-button" type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
    </div>
    {open && <button className="menu-backdrop" aria-label="Fechar navegação" tabIndex={-1} onClick={() => { setOpen(false); trigger.current?.focus(); }} />}
    <nav ref={panel} id="mobile-menu" className={`mobile-panel ${open ? "is-open" : ""}`} aria-label="Navegação mobile" hidden={!open}>
      {navItems.map(([label, href], index) => <a key={href} href={`/${href}`} onClick={() => onNavigate(href)}><span>{label}</span><small>0{index + 1}</small></a>)}
      <PlatformCTA onClick={() => setOpen(false)} />
      <span className="menu-caption">Sua precisão agrícola no ponto mais alto.</span>
    </nav>
  </header>;
}
