import { operationFlow } from "../../data/siteData";

export function AboutProject() {
  return (
    <section className="section about-project" id="sobre">
      <div className="container two-column">
        <div className="section-copy reveal">
          <span className="eyebrow">01 / Sobre o projeto</span>
          <h2>O campo produz dados. O Zenith transforma em informação.</h2>
        </div>
        <div className="body-copy reveal">
          <p>O monitoramento manual pode ser demorado e dificultar a identificação precoce de problemas na plantação.</p>
          <p>O Zenith centraliza imagens, análises e registros da propriedade em uma plataforma responsiva para celular e computador.</p>
          <div className="about-metrics" aria-label="Indicadores do projeto">
            <article><strong>Drone</strong><span>captura aérea</span></article>
            <article><strong>IA</strong><span>apoio diagnóstico</span></article>
            <article><strong>PWA</strong><span>campo e desktop</span></article>
          </div>
        </div>
      </div>
      <div className="container flow-track stagger" aria-label="Fluxo do projeto">
        {operationFlow.map(([Icon, title, text]) => (
          <article className="flow-card" key={title}>
            <Icon size={26} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
