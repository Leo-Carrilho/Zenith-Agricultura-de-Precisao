import { BrainCircuit, Camera, CheckCircle2, Database, Drone, Eye, Monitor, Sprout } from "lucide-react";

const flow = [
  [Drone, "Drone", "sensor"],
  [Camera, "Captura", "imagem"],
  [Database, "Dados", "envio"],
  [Eye, "Visão", "interpretação"],
  [BrainCircuit, "IA", "diagnóstico"],
  [Monitor, "Plataforma", "gestão"],
  [CheckCircle2, "Decisão", "apoio"]
];

export function SignatureSection() {
  return (
    <section className="section signature-section" id="fluxo-zenith" data-header-theme="dark">
      <div className="container signature-grid">
        <div className="section-copy reveal">
          <span className="eyebrow">Campo → decisão</span>
          <h2>Da imagem até a decisão.</h2>
          <p>O Zenith transforma imagens do campo em informações organizadas para apoiar decisões mais inteligentes na propriedade.</p>
          <div className="signature-proof" aria-label="Síntese do fluxo Zenith">
            <Sprout size={18} aria-hidden="true" />
            <span>Campo como entrada. Drone como sensor. Plataforma como centro de decisão.</span>
          </div>
        </div>
        <div className="data-route reveal" aria-label="Fluxo de informação do Zenith">
          <span className="route-line" aria-hidden="true" />
          {flow.map(([Icon, title, label], index) => (
            <article className="route-step" key={title}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <Icon size={22} aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <span>{label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
