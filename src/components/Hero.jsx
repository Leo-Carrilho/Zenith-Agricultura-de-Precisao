import { ArrowRight, Download, History, Radar, ScanLine, Sprout } from "lucide-react";
import { heroImage } from "../constants/media";

export function Hero() {
  return (
    <section className="hero section" id="inicio">
      <img className="hero-bg" src={heroImage} alt="" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-grid container">
        <div className="hero-copy">
          <span className="eyebrow">Zenith AgTech / Agricultura de precisão</span>
          <h1>Sua precisão agrícola <span>no ponto mais alto.</span></h1>
          <p>O Zenith integra imagens capturadas por drones, inteligência artificial e ferramentas de gestão para apoiar o monitoramento de lavouras de soja.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#sobre">Conhecer o projeto <ArrowRight size={18} aria-hidden="true" /></a>
            <a className="btn secondary" href="#instalacao">Instalar aplicativo <Download size={18} aria-hidden="true" /></a>
          </div>
          <div className="hero-chips" aria-label="Destaques do projeto">
            <span>PWA responsiva</span>
            <span>IA aplicada à soja</span>
            <span>Gestão integrada</span>
          </div>
        </div>
        <figure className="hero-media drone-hud">
          <img src={heroImage} alt="Drone sobrevoando uma plantação de soja" width="420" height="460" />
          <div className="hud-frame" aria-hidden="true">
            <span className="hud-corner top-left" />
            <span className="hud-corner top-right" />
            <span className="hud-corner bottom-left" />
            <span className="hud-corner bottom-right" />
          </div>
          <div className="hero-radar" aria-hidden="true"><Radar size={22} /></div>
          <figcaption className="hero-system-card">
            <span>Análise recente</span>
            <strong>Imagem recebida</strong>
            <p>Registro pronto para processamento e acompanhamento.</p>
            <div><Sprout size={16} /><History size={16} /><ScanLine size={16} /></div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
