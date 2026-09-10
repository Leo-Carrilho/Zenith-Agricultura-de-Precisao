import { PlatformCTA } from "../PlatformCTA";
export function InstallSection() {
  return <section className="section install-section" id="instalacao" tabIndex={-1}>
    <div className="container section-head reveal"><span className="eyebrow">ACESSE O ECOSSISTEMA</span><h2>No escritório ou em campo.<br />A mesma Zenith.</h2><p>Escolha a experiência para o seu dispositivo. Suas informações continuam conectadas à propriedade.</p></div>
    <div className="container install-grid">
      <article className="install-card reveal">
        <figure className="install-preview mobile-preview"><img src="/assets/dashboard_mobile.webp" alt="Captura da interface mobile Zenith" width="340" height="581" loading="lazy" /></figure>
        <h3>Zenith no celular</h3><p>Consulte informações e acompanhe a rotina em campo pela versão mobile oficial.</p>
        <details className="install-help"><summary>Como instalar no celular</summary><p><strong>iPhone ou iPad:</strong> abra a instalação oficial no Safari e use Compartilhar → Adicionar à Tela de Início.</p><p><strong>Android:</strong> abra a instalação oficial no Chrome. Use a opção de instalação quando oferecida, ou procure Instalar aplicativo / Adicionar à tela inicial no menu.</p><p>Se a instalação não estiver disponível, abra o link no Safari ou Chrome atualizado. As opções dependem do navegador e do dispositivo.</p></details>
        <PlatformCTA intent="mobile">Instalar aplicativo</PlatformCTA>
      </article>
      <article className="install-card reveal">
        <figure className="install-preview desktop-preview"><img src="/assets/dashboard.jpeg" alt="Captura da interface web Zenith" width="1600" height="620" loading="lazy" /></figure>
        <h3>Zenith no computador</h3><p>Análises detalhadas, gestão da equipe e visualização dos módulos em telas maiores. Acesse diretamente pelo navegador do seu computador ou notebook.</p>
        <PlatformCTA intent="desktop" className="btn secondary" />
      </article>
    </div>
    <div className="container install-steps reveal" aria-label="Passos para acessar">{["Escolha seu dispositivo", "Abra a versão oficial", "Entre na sua conta", "Acompanhe a lavoura"].map((step,i)=><span key={step}><strong>0{i+1}</strong>{step}</span>)}</div>
    <p className="container offline-note">O carregamento básico pode utilizar cache, mas análises, clima e sincronização dependem de conexão.</p>
  </section>;
}

