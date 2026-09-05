import { MapPin } from "lucide-react";
import { PlatformCTA } from "../PlatformCTA";
export function CTASection() {
  return <section className="section cta-section" id="contato" tabIndex={-1}>
    <div className="container cta-grid">
      <div className="section-copy reveal"><span className="eyebrow">SEU PRÓXIMO PASSO</span><h2>Um olhar mais preciso.<br />Uma decisão mais segura.</h2><p>Conheça a Zenith e conecte imagens, análises e informações da sua propriedade.</p><div className="hero-actions"><PlatformCTA /><a className="btn secondary" href="#equipe">Conhecer a equipe</a></div></div>
      <div className="contact-note reveal"><MapPin size={28} aria-hidden="true" /><span className="eyebrow">AMERICANA · SÃO PAULO</span><h3>Tecnologia com os pés no campo.</h3><p>Zenith Agro é um projeto acadêmico e tecnológico em agricultura de precisão.</p><a href="#equipe">Conheça os responsáveis pelo projeto →</a></div>
    </div>
  </section>;
}

