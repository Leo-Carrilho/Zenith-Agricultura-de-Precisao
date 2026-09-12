import { ArrowRight, ArrowUpRight, Cpu, Drone, Leaf, Sprout } from "lucide-react";
import { PlatformCTA } from "./PlatformCTA";

const highlights = [
  { Icon: Cpu, title: "Visão computacional", description: "IA no campo" },
  { Icon: Leaf, title: "Talhões organizados", description: "Gestão simplificada" },
  { Icon: Drone, title: "Monitoramento aéreo", description: "Cobertura em larga escala" },
];

// Illustrative vigor map; the hero does not represent a connected property.
function VigorMap() {
  const boundary = "M17 18 178 14 184 150 22 155Z";
  return <svg className="vigor-map" viewBox="0 0 200 170" aria-hidden="true">
    <defs>
      <clipPath id="hero-field-clip"><path d={boundary} /></clipPath>
      <filter id="hero-field-contours" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency=".065" numOctaves="3" seed="12" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id="hero-field-texture">
        <feTurbulence type="fractalNoise" baseFrequency=".7" numOctaves="3" seed="8" />
        <feColorMatrix type="saturate" values="0" />
        <feBlend in="SourceGraphic" mode="soft-light" />
      </filter>
      <pattern id="hero-crop-rows" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-3)">
        <path d="M1 0V5" stroke="#e3efbd" strokeWidth=".55" opacity=".22" />
      </pattern>
    </defs>
    <g clipPath="url(#hero-field-clip)">
      <path d={boundary} fill="#368946" />
      <g filter="url(#hero-field-contours)">
        <path d="M5 20H100C87 40 108 54 85 72S64 100 77 127L66 168H5Z" fill="#579d46" />
        <path d="M134 0H195V166H131C150 135 128 120 143 95S157 61 137 45Z" fill="#247640" />
        <path d="M42 5C60 21 52 36 70 49S102 58 108 77 92 97 102 116 137 135 128 168H91C98 147 79 136 74 120S81 89 65 80 40 57 43 43 27 15 25 5Z" fill="#91b64c" />
        <path d="M51 22C60 40 55 49 76 60S92 80 83 94L69 104C74 81 57 79 50 62S49 40 43 31Z" fill="#c9c45a" />
        <path d="M86 108C107 104 111 123 122 133S128 152 116 163L99 163C107 145 88 144 84 133S76 117 86 108Z" fill="#c6bc51" />
        <path d="M91 119C105 114 102 130 113 138S112 153 105 150 96 137 89 133Z" fill="#d79940" />
        <path d="M96 128C104 125 101 135 108 140L102 146 95 139Z" fill="#bc663c" />
        <path d="M145 58C160 43 169 55 169 73S153 92 145 82 136 69 145 58Z" fill="#65a049" />
      </g>
      <path d={boundary} fill="url(#hero-crop-rows)" />
      <path d={boundary} fill="#81976c" filter="url(#hero-field-texture)" opacity=".18" />
      <path d="M20 23 175 19M26 150 180 145" stroke="#d3d9ad" strokeWidth="1.3" opacity=".5" />
    </g>
    <path d={boundary} fill="none" stroke="#d0dfb2" strokeWidth="1.2" strokeLinejoin="round" />
  </svg>;
}

export function Hero() {
  return (
    <section className="hero section" id="inicio" tabIndex={-1} data-header-theme="dark">
      <img className="hero-bg" src="/assets/zenith-field-sunset.webp" alt="" aria-hidden="true" width="1536" height="1024" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-orbits" aria-hidden="true"><i /><i /><i /></div>
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><i aria-hidden="true" /> Zenith AgTech / Inteligência de campo</span>
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
          <div className="hero-viewfinder" aria-hidden="true"><i /><i /></div>
          <div className="hero-telemetry" aria-hidden="true">Mapeamento<br />Monitoramento<br />Resultados<br />em campo real<span /></div>
          <div className="vigor-card">
            <div className="vigor-heading"><Leaf aria-hidden="true" /><span>Lavoura saudável</span></div>
            <strong>92<span>%</span></strong>
            <span className="vigor-label">Índice de vigor</span>
            <div className="vigor-bar" aria-hidden="true"><i /></div>
          </div>
          <div className="field-card">
            <div className="field-heading"><Sprout aria-hidden="true" /><div><strong>Talhão 01</strong><span>Soja · 127,4 ha</span></div><ArrowUpRight className="field-arrow" aria-hidden="true" /></div>
            <div className="field-map-panel"><VigorMap /><ul><li><i />Alto vigor</li><li><i />Vigor moderado</li><li><i />Atenção</li><li><i />Baixo vigor</li></ul></div>
          </div>
          <figcaption className="hero-data-caption"><i />Dados reais<br />Decisões mais inteligentes<br />Um agro mais forte</figcaption>
        </figure>
        <div className="hero-highlights" aria-label="Destaques do projeto">
          {highlights.map(({ Icon, title, description }) => <div className="hero-highlight" key={title}><Icon aria-hidden="true" /><div><strong>{title}</strong><span>{description}</span></div></div>)}
        </div>
        <div className="hero-signoff"><i aria-hidden="true" />Tecnologia que impulsiona o agro</div>
      </div>
    </section>
  );
}
