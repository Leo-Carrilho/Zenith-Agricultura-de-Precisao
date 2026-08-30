import { workflowSteps } from "../../data/siteData";

export function WorkflowSection() {
  return (
    <section className="section workflow-section" id="como-funciona" data-header-theme="dark">
      <div className="container workflow-sticky">
        <div className="workflow-visual reveal">
          <div className="flight-map" aria-hidden="true">
            <span className="field-row row-a" />
            <span className="field-row row-b" />
            <span className="field-row row-c" />
            <span className="flight-path" />
            <span className="flight-drone">DRONE</span>
            <span className="scan-window" />
            <span className="data-packet packet-a" />
            <span className="data-packet packet-b" />
          </div>
        </div>
        <div className="workflow-content">
          <div className="section-head reveal">
            <span className="eyebrow">Drone operations / Como funciona</span>
            <h2>Do voo ao acompanhamento.</h2>
          </div>
          <div className="workflow-stage reveal" aria-hidden="true">
            <span className="drone-node">CAPTURA</span>
            <span className="signal-line" />
            <span className="drone-node alt">ZENITH AI</span>
          </div>
          <div className="workflow-grid stagger">
            {workflowSteps.map(([number, title, text]) => (
              <article className="workflow-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <p className="container support-note reveal">As análises funcionam como apoio e devem ser confirmadas por um responsável técnico.</p>
    </section>
  );
}
