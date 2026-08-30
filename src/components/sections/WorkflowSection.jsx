import { workflowSteps } from "../../data/siteData";

export function WorkflowSection() {
  return (
    <section className="section workflow-section" id="como-funciona">
      <div className="container section-head reveal">
        <span className="eyebrow">Drone operations / Como funciona</span>
        <h2>Do voo ao acompanhamento.</h2>
      </div>
      <div className="container workflow-stage reveal" aria-hidden="true">
        <span className="drone-node">DRONE</span>
        <span className="signal-line" />
        <span className="drone-node alt">ZENITH AI</span>
      </div>
      <div className="container workflow-grid stagger">
        {workflowSteps.map(([number, title, text]) => (
          <article className="workflow-card" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <p className="container support-note reveal">As análises funcionam como apoio e devem ser confirmadas por um responsável técnico.</p>
    </section>
  );
}
