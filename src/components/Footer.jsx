import { navItems } from "../data/siteData";
import { Brand } from "./Header";
import { PlatformCTA } from "./PlatformCTA";
export function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div className="footer-brand"><Brand /><p>Plataforma de agricultura de precisão para monitoramento e gestão de lavouras de soja.</p></div>
    <nav aria-label="Navegação do rodapé"><strong>Explore</strong>{navItems.map(([label,href])=><a key={href} href={`/${href}`}>{label}</a>)}</nav>
    <nav aria-label="Acesso"><strong>Uma Zenith. Dois ambientes.</strong><PlatformCTA intent="desktop" className="footer-link" /><PlatformCTA intent="mobile" className="footer-link">Versão mobile</PlatformCTA><a href="/#instalacao">Como instalar</a><a href="/#faq">Perguntas frequentes</a></nav>
    <nav aria-label="Projeto"><strong>O projeto</strong><a href="/#equipe">Nossa equipe</a><a href="/#como-funciona">Como funciona</a><span>Americana — SP</span><span>Zenith Agro</span></nav>
  </div><div className="container footer-bottom"><span>© 2026 Zenith Agro.</span><span>Projeto acadêmico e tecnológico em agricultura de precisão.</span></div></footer>;
}

