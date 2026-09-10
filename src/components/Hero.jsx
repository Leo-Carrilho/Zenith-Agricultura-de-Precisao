import { ArrowRight, History, MapPin, Radar, ScanLine, Sparkles, Sprout } from "lucide-react";
import { PlatformCTA } from "./PlatformCTA";
import "../styles.css";

export function Hero() {
  return (
    <section className="hero section" id="inicio" tabIndex={-1} data-header-theme="dark">
      <img className="hero-bg" src="/assets/zenith-hero-960.webp" srcSet="/assets/zenith-hero-480.webp 480w, /assets/zenith-hero-960.webp 960w" sizes="100vw" alt="" aria-hidden="true" width="960" height="1280" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-grid container">
        <div className="hero-copy">
          <span className="eyebrow"><i aria-hidden="true" /> Zenith AgTech / Inteligência de campo</span>
          <h1>Sua precisão agrícola <span>no ponto mais alto.</span></h1>
          <p>Imagens aéreas, visão computacional e gestão integrada em um único fluxo para acompanhar sua lavoura de soja com contexto.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#sobre">Conhecer o projeto <ArrowRight size={18} aria-hidden="true" /></a>
            <PlatformCTA className="btn secondary" />
          </div>
          <div className="hero-proof" aria-label="Destaques do projeto">
            <span><Sparkles size={16} aria-hidden="true" /> Visão computacional</span>
            <span><MapPin size={16} aria-hidden="true" /> Talhões organizados</span>
          </div>
        </div>
        <figure className="hero-media drone-hud">
          <img src="/assets/zenith-hero-960.webp" alt="Drone sobrevoando uma plantação de soja" width="960" height="1280" srcSet="/assets/zenith-hero-480.webp 480w, /assets/zenith-hero-960.webp 960w" sizes="(max-width: 767px) 100vw, 46vw" fetchpriority="high" />
          <div className="hud-frame" aria-hidden="true">
            <span className="hud-corner top-left" />
            <span className="hud-corner top-right" />
            <span className="hud-corner bottom-left" />
            <span className="hud-corner bottom-right" />
          </div>
          <div className="capture-scan" aria-hidden="true" />
          <div className="capture-points" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-radar" aria-hidden="true"><Radar size={22} /></div>
          <figcaption className="hero-system-card">
            <span><i aria-hidden="true" /> Operação em campo</span>
            <strong>Imagem pronta para análise</strong>
            <p>Registro aéreo conectado ao histórico da propriedade.</p>
            <div><Sprout size={16} /><History size={16} /><ScanLine size={16} /></div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
