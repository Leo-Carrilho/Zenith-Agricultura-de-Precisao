import { ArrowRight } from "lucide-react";
import { fieldImage } from "../../constants/media";
import { ZENITH_APP_URL } from "../../data/siteData";

export function CTASection() {
  return (
    <section className="section cta-section" id="contato">
      <div className="container cta-grid">
        <div className="section-copy reveal">
          <span className="eyebrow">Próximo passo</span>
          <h2>Conheça uma nova forma de acompanhar o campo.</h2>
          <p>Explore o Zenith e veja como imagens, análises e informações da propriedade podem ficar organizadas em uma única plataforma.</p>
          <div className="hero-actions">
            <a className="btn primary light-button" href="#sobre">Explorar o Zenith <ArrowRight size={18} aria-hidden="true" /></a>
            <a className="btn secondary light-outline" href={ZENITH_APP_URL} target="_blank" rel="noreferrer">Acessar plataforma</a>
          </div>
        </div>
        <img src={fieldImage} alt="Faixa de lavoura usada como imagem final do Zenith" loading="lazy" />
      </div>
    </section>
  );
}
