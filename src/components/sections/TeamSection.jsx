import { team } from "../../data/siteData";

export function TeamSection() {
  return (
    <section className="section team-section" id="equipe">
      <div className="container section-head reveal">
        <span className="eyebrow">Equipe</span>
        <h2>Quatro frentes trabalhando no mesmo produto.</h2>
      </div>
      <div className="container team-grid stagger">
        {team.map(([name, role, text, initials, Icon]) => (
          <article className="team-card" key={name}>
            <div className="team-avatar" aria-hidden="true">{initials}</div>
            <Icon size={24} aria-hidden="true" />
            <h3>{name}</h3>
            <strong>{role}</strong>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
