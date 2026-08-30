import { Check } from "lucide-react";

export function PlatformPreview() {
  return (
    <section className="section platform" id="plataforma">
      <div className="container platform-grid">
        <div className="section-copy reveal">
          <span className="eyebrow">Plataforma</span>
          <h2>Visão completa da sua lavoura.</h2>
          <p>Uma interface para acompanhar dados da propriedade, registros técnicos, tarefas e histórico sem misturar a rotina agrícola com dados comerciais sem validação.</p>
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
            <em>online</em>
          </div>
          <img src="/assets/dashboard.jpeg" alt="Dashboard da plataforma Zenith Agro" loading="lazy" />
          <div className="floating metric-a" aria-hidden="true"><span>Saúde da cultura</span><strong>91%</strong></div>
          <div className="floating metric-b" aria-hidden="true"><span>Talhão ativo</span><strong>03</strong></div>
          <div className="platform-focus focus-a" aria-hidden="true">Propriedade</div>
          <div className="platform-focus focus-b" aria-hidden="true">Diagnóstico</div>
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
