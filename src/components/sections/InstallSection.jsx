import { Download, MonitorDown } from "lucide-react";
import { ZENITH_DESKTOP_APP_URL } from "../../data/siteData";
import { useInstallPrompt } from "../../hooks/useInstallPrompt";
import { dashboardDesktop, dashboardMobile } from "../../constants/media";

export function InstallSection() {
  const { canInstall, installed, install, message, platform } = useInstallPrompt();
  const installLabel = installed ? "Aplicativo instalado" : canInstall ? "Instalar aplicativo" : platform === "desktop" ? "Instalar no PC" : "Instalar no celular";

  return (
    <section className="section install-section" id="instalacao">
      <div className="container section-head reveal">
        <span className="eyebrow">Instalação</span>
        <h2>Zenith em todos os lugares.</h2>
        <p>Instale como aplicativo no celular ou acesse a experiência completa no computador.</p>
      </div>
      <div className="container install-grid">
        <article className="install-card reveal">
          <figure className="install-preview mobile-preview">
            <img src={dashboardMobile} alt="Dashboard mobile" height={400} />
          </figure>
          <h3>Instalação inteligente</h3>
          <p>Ao clicar, o Zenith identifica se você está no celular ou no computador e abre a instalação correta.</p>
          <button className="btn primary" type="button" onClick={install}><Download size={18} aria-hidden="true" />{installLabel}</button>
        </article>
        <article className="install-card reveal">
          <figure className="install-preview desktop-preview">
            <img src={dashboardDesktop} alt="Dashboard desktop" width={600} />
          </figure>
          <h3>Plataforma desktop</h3>
          <p>Análises detalhadas, gestão da equipe e visualização dos módulos em telas maiores.</p>
          <a className="btn secondary" href={ZENITH_DESKTOP_APP_URL} target="_blank" rel="noreferrer"><MonitorDown size={18} aria-hidden="true" />Acessar plataforma</a>
        </article>
      </div>
      <div className="container install-steps reveal" aria-label="Passos de instalação">
        {["Baixe", "Instale", "Entre na conta", "Comece a monitorar"].map((step, index) => (
          <span key={step}><strong>{String(index + 1).padStart(2, "0")}</strong>{step}</span>
        ))}
      </div>
      <p className="container offline-note" role="status">{message || "O carregamento básico pode utilizar cache, mas análises, clima e sincronização dependem de conexão."}</p>
    </section>
  );
}
