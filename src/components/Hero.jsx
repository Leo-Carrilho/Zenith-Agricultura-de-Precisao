import { ArrowRight } from "lucide-react";
import { PlatformCTA } from "./PlatformCTA";

export function Hero() {
  return (
    <section className="hero section" id="inicio" tabIndex={-1} data-header-theme="dark">
      <img className="hero-bg" src="/assets/zenith-field-sunset.webp" alt="" aria-hidden="true" width="1536" height="1024" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-orbits" aria-hidden="true"><i /><i /><i /></div>
      <div className="hero-grid">
        <div className="hero-copy">
          <h1>Sua precisão<br />agrícola <span>no</span><br /><span className="hero-title-last">ponto mais alto.</span></h1>
          <p>Drones, inteligência artificial e dados em campo<br className="hero-desktop-break" /> para uma lavoura mais produtiva, sustentável<br className="hero-desktop-break" /> e rentável.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#sobre">Conhecer o projeto <ArrowRight aria-hidden="true" /></a>
            <PlatformCTA className="btn secondary" />
          </div>
        </div>
        <figure className="hero-visual" aria-label="Exemplo ilustrativo de monitoramento aéreo e vigor da lavoura">
          <div className="hero-media">
           <img src="/assets/zenith-drone-sunset.webp" srcSet="/assets/zenith-drone-sunset-800.webp 800w, /assets/zenith-drone-sunset.webp 1536w" sizes="(max-width: 1023px) 88vw, 50vw" alt="Drone com câmera sobre uma lavoura de soja ao pôr do sol" width="1536" height="1024" fetchpriority="high" />
          </div>
          <svg className="hero-media-outline" viewBox="0 0 1000 840" preserveAspectRatio="none" aria-hidden="true"><path className="outline-desktop" d="M35 1 H965 Q999 1 999 35 V670 Q999 700 970 700 H715 L570 839 H35 Q1 839 1 805 V35 Q1 1 35 1Z" /><path className="outline-mobile" d="M40 1 H960 Q999 1 999 40 V755 Q999 795 960 795 H530 L490 839 H40 Q1 839 1 799 V40 Q1 1 40 1Z" /></svg>
        </figure>
      </div>
    </section>
  );
}
