import { operationFeatures } from "../../data/siteData";

export function OperationCenter() {
  return (
    <section className="section operation-center" id="recursos">
      <div className="container section-head reveal">
        <span className="eyebrow">Recursos reais</span>
        <h2>Uma central de operações para a lavoura.</h2>
      </div>
      <div className="container resource-grid stagger">
        {operationFeatures.map(([Icon, title, text]) => (
          <article className="resource-card" key={title}>
            <span className="card-indicator" aria-hidden="true" />
            <Icon size={28} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
