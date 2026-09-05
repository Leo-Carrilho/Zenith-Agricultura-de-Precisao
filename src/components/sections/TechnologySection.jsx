import { Layers3 } from "lucide-react";
import { technologyStack } from "../../data/siteData";

export function TechnologySection() {
  return (
    <section className="section technology-section" id="tecnologia" tabIndex={-1}>
      <div className="container section-head reveal">
        <span className="eyebrow">Arquitetura</span>
        <h2>Tecnologia por trás do Zenith.</h2>
      </div>
      <div className="container tech-row stagger">
        {technologyStack.map(([title, text]) => (
          <article key={title}>
            <span className="tech-pulse" aria-hidden="true" />
            <Layers3 size={24} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
