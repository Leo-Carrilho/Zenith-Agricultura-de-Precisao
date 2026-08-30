import { ArrowRight } from "lucide-react";
import { navItems, ZENITH_APP_URL } from "../data/siteData";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/assets/zenith-logo.png" alt="Zenith Agro" width="118" height="70" />
          <h2>Zenith Agro</h2>
          <p>Plataforma de agricultura de precisão para monitoramento e gestão de lavouras de soja.</p>
        </div>
        <nav aria-label="Navegação do rodapé">
          <strong>Navegação</strong>
          {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <nav aria-label="Acesso">
          <strong>Acesso</strong>
          <a href={ZENITH_APP_URL} target="_blank" rel="noreferrer">Acessar plataforma <ArrowRight size={14} aria-hidden="true" /></a>
          <a href="#instalacao">Instalação PWA</a>
          <a href="#faq">Perguntas frequentes</a>
        </nav>
        <div className="footer-place">
          <strong>Localização</strong>
          <span>Americana - SP</span>
          <span>Projeto Zenith Agro</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Zenith Agro.</span>
        <span>Projeto acadêmico e tecnológico em agricultura de precisão.</span>
      </div>
    </footer>
  );
}
