import { PlatformCTA } from "../PlatformCTA";
export function InstallSection() {
  return <section className="section install-section" id="instalacao" tabIndex={-1}>
    <div className="container section-head reveal"><span className="eyebrow">ACESSE O ECOSSISTEMA</span><h2>No escritório ou em campo.<br />A mesma Zenith.</h2><p>Escolha a experiência para o seu dispositivo. Suas informações continuam conectadas à propriedade.</p></div>
    <div className="container install-grid">
      <article className="install-card reveal">
        <figure className="install-preview mobile-preview"><img src="/assets/dashboard_mobile.webp" alt="Captura da interface mobile Zenith" width="340" height="581" loading="lazy" /></figure>
        <h3>Zenith no celular</h3><p>A versão mobile está em desenvolvimento para apoiar a rotina em campo.</p>
        <p className="offline-note">O aplicativo está em desenvolvimento e será disponibilizado em breve.</p>
        <PlatformCTA intent="mobile" />
      </article>
      <article className="install-card reveal">
        <figure className="install-preview desktop-preview"><img src="/assets/dashboard.jpeg" alt="Captura da interface web Zenith" width="1600" height="620" loading="lazy" /></figure>
        <h3>Zenith no computador</h3><p>A plataforma desktop está em desenvolvimento para análises detalhadas e gestão da operação.</p>
        <PlatformCTA intent="desktop" className="btn secondary" />
      </article>
    </div>
    <div className="container install-steps reveal" aria-label="Etapas de desenvolvimento">{["Planejamento", "Desenvolvimento", "Testes", "Lançamento em breve"].map((step,i)=><span key={step}><strong>0{i+1}</strong>{step}</span>)}</div>
    <p className="container offline-note">O carregamento básico pode utilizar cache, mas análises, clima e sincronização dependem de conexão.</p>
  </section>;
}

