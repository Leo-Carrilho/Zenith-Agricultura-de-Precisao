import { Check } from "lucide-react";

export function PlatformPreview() {
  return (
    <section className="section platform" id="plataforma">
      <div className="container platform-grid">
        <div className="section-copy reveal">
          <span className="eyebrow">Plataforma</span>
          <h2>Visão completa da sua lavoura.</h2>
          <p>Acompanhe dados da propriedade, registros técnicos, tarefas e histórico em uma interface que conecta as diferentes partes da operação.</p>
          <ul className="check-list">
            {["Interface clara e responsiva", "Dados organizados por propriedade", "Histórico por talhão", "Integração entre os módulos", "Apoio à rotina da equipe"].map((item) => (
              <li key={item}><Check size={18} aria-hidden="true" />{item}</li>
            ))}
          </ul>
        </div>
        <div className="dashboard-mock reveal">
          <div className="mock-topbar" aria-hidden="true">
            <span />
            <strong>Zenith Console</strong>
            <em>Prévia da interface</em>
          </div>
          <img src="/assets/dashboard.webp" alt="Captura da plataforma Zenith Agro, com dados de demonstração" width="1600" height="620" loading="lazy" />
        </div>
        <div className="platform-journey reveal" aria-label="Jornada visual dentro da plataforma">
          {["Dashboard", "Propriedade", "Talhão", "Diagnóstico", "IA", "Resultado", "Decisão"].map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
