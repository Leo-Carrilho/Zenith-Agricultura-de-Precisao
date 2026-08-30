import { ArrowRight } from "lucide-react";

const MODEL_3D_URL = "https://tccamsamericana-zenith-modelo-3d.static.hf.space/";

export function ThreeDMonitor() {
  return (
    <section className="section three-d" id="monitoramento-3d">
      <div className="container terrain-grid">
        <div className="modelo-3d reveal">
          <iframe
            src={MODEL_3D_URL}
            title="Prévia 3D Zenith"
            loading="lazy"
            allow="fullscreen"
            allowFullScreen
          />
        </div>
        <div className="section-copy reveal">
          <span className="eyebrow">Protótipo em integração controlada</span>
          <h2>Reconstrução fotogramétrica 3D.</h2>
          <p>O Zenith pode organizar imagens sequenciais do mesmo voo e encaminhá-las para a criação de um modelo tridimensional da área.</p>
          <div className="step-list">
            <span>Imagens sequenciais do mesmo voo</span>
            <span>Processamento fotogramétrico</span>
            <span>Modelo interativo para inspeção</span>
          </div>
          <a className="model-link" href={MODEL_3D_URL} target="_blank" rel="noreferrer">Abrir modelo em tela cheia <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
