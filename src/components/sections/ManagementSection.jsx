import { managementModules } from "../../data/siteData";

export function ManagementSection() {
  return (
    <section className="section management-section" id="gestao">
      <div className="container section-head reveal">
        <span className="eyebrow">Gestão da propriedade</span>
        <h2>Análise e gestão em um só lugar.</h2>
      </div>
      <div className="container property-panel reveal" aria-label="Resumo da propriedade">
        <article><span>Organização</span><strong>Por propriedade</strong></article>
        <article><span>Acompanhamento</span><strong>Por talhão</strong></article>
        <article><span>Equipe e atividades</span><strong>Tarefas e responsáveis</strong></article>
        <article><span>Registros</span><strong>Histórico de campo</strong></article>
      </div>
      <div className="container module-grid stagger">
        {managementModules.map(([Icon, title, text]) => (
          <article key={title}>
            <Icon size={26} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
