import { ScanSearch } from "lucide-react";
import { computingVision } from "../../constants/media";

export function PlantingVision() {
  return (
    <section className="section planting-vision" id="visao-computacional">
      <div className="container section-head reveal">
        <span className="eyebrow">Visão computacional</span>
        <h2>Monitoramento visual do plantio.</h2>
        <p>Uma simulação de como o Zenith pode apresentar a leitura do talhão: imagem original, camada de análise, indicadores qualitativos e interpretação para apoiar a inspeção em campo.</p>
      </div>
      <div className="container planting-card reveal">
        <div className="planting-preview">
          <div className="preview-tabs" aria-label="Visualização simulada">
            <strong>Original</strong>
            <span>Análise</span>
          </div>
          <div className="preview-image">
            <img src={computingVision} alt="Simulação de monitoramento visual de plantio de soja" loading="lazy" />
            <div className="row-lines" aria-hidden="true" />
            <div className="analysis-marks" aria-hidden="true">
              <span className="mark vegetation"><b>TARGET DETECTED</b></span>
              <span className="mark attention"><b>ZONE 03</b></span>
              <span className="mark critical"><b>ANOMALY</b></span>
              <span className="route" />
              <em className="vision-label">CONFIDENCE 96.4%</em>
            </div>
          </div>
          <div className="analysis-legend">
            <span><i className="green" /> Vegetação reconhecida</span>
            <span><i className="orange" /> Atenção moderada</span>
            <span><i className="red" /> Falha crítica</span>
            <span><i className="blue" /> Caminho de leitura</span>
          </div>
        </div>
        <div className="planting-report">
          <div className="report-title">
            <ScanSearch size={24} aria-hidden="true" />
            <div>
              <span>Simulação Zenith</span>
              <h3>Análise do talhão</h3>
            </div>
          </div>
          <div className="report-rings">
            {[
              ["Cobertura", "Alta"],
              ["Uniformidade", "Boa"],
              ["Falhas", "Baixas"]
            ].map(([label, value]) => (
              <article key={label}>
                <div className="ring"><strong>{value}</strong></div>
                <span>{label}</span>
              </article>
            ))}
          </div>
          <div className="report-chips">
            <article><strong>Fileiras</strong><span>Alinhamento visível</span></article>
            <article><strong>Imagem</strong><span>Condição adequada</span></article>
          </div>
          <div className="interpretation">
            <strong>Interpretação</strong>
            <ul>
              <li>Boa presença visual de vegetação na maior parte da área analisada.</li>
              <li>Pequenas regiões de atenção aparecem para conferência em campo.</li>
              <li>As linhas sugerem leitura de fileiras, sem substituir avaliação técnica.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
