import { team } from "../../data/siteData";
import { useLanguage } from "../LanguageSelector";

const teamTranslations = {
  "pt-BR": {
    label: "Equipe",
    heading: "Cinco frentes trabalhando no mesmo produto.",
    Leonardo: ["Front-end e experiência PWA", "Interface, responsividade, instalação como app e experiência visual do Zenith."],
    Octavio: ["Inteligência Artificial, visão computacional e Aplicativo Desktop", "Modelos de análise, processamento de imagens e validação técnica dos resultados, estudando técnicas agrícolas, desenvolvimento da aplicação para computador e integração dos fluxos desktop."],
    Samuel: ["Aplicativo mobile e integração", "Fluxos mobile, integração entre serviços, testes e suporte à experiência em campo."],
    "Pietro Gimenez": ["Auxiliar do Aplicativo Desktop", "Desenvolvimento da aplicação para computador, adaptação de fluxos e suporte ao uso em ambiente desktop."],
    "Vinicius Kauan": ["Marketing e comunicação do Zenith", "Estratégia de marca, criação de conteúdo, gestão das redes sociais e divulgação da plataforma, desenvolvendo a comunicação com produtores rurais, empresas e parceiros do agronegócio."]
  },
  en: {
    label: "Team",
    heading: "Five areas working on the same product.",
    Leonardo: ["Front-end and PWA experience", "Interface, responsiveness, app installation and Zenith visual experience."],
    Octavio: ["Artificial Intelligence, computer vision and Desktop App", "Analysis models, image processing, and technical validation of results; research into agricultural techniques; desktop application development; and integration of desktop workflows."],
    Samuel: ["Mobile app and integration", "Mobile workflows, service integration, testing, and support for the in-field experience."],
    "Pietro Gimenez": ["Desktop App Assistant", "Desktop application development, workflow adaptation, and support for desktop use."],
    "Vinicius Kauan": ["Zenith marketing and communications", "Brand strategy, content creation, social media management, and platform promotion, strengthening communication with farmers, businesses, and agribusiness partners."]
  },
  es: {
    label: "Equipo",
    heading: "Cinco frentes trabajando en el mismo producto.",
    Leonardo: ["Front-end y experiencia PWA", "Interfaz, responsividad, instalación como app y experiencia visual de Zenith."],
    Octavio: ["Inteligencia Artificial, visión computacional y Aplicación de escritorio", "Modelos de análisis, procesamiento de imágenes y validación técnica de resultados; estudio de técnicas agrícolas; desarrollo de la aplicación para computadora; e integración de los flujos de escritorio."],
    Samuel: ["Aplicación móvil e integración", "Flujos móviles, integración de servicios, pruebas y soporte para la experiencia en campo."],
    "Pietro Gimenez": ["Auxiliar de la Aplicación de escritorio", "Desarrollo de la aplicación para computadora, adaptación de flujos y soporte para el uso en un entorno de escritorio."],
    "Vinicius Kauan": ["Marketing y comunicación de Zenith", "Estrategia de marca, creación de contenido, gestión de redes sociales y difusión de la plataforma, fortaleciendo la comunicación con productores rurales, empresas y socios del agronegocio."]
  }
};

export function TeamSection() {
  const { language } = useLanguage() ?? {};
  const translation = teamTranslations[language] ?? teamTranslations["pt-BR"];

  return (
    <section className="section team-section" id="equipe">
      <div className="container section-head reveal">
        <span className="eyebrow">{translation.label}</span>
        <h2>{translation.heading}</h2>
      </div>
      <div className="container team-grid stagger">
        {team.map(([name, role, text, initials, Icon]) => {
          const [translatedRole, translatedText] = translation[name] ?? [role, text];
          return <article className="team-card" key={name}>
            <div className="team-avatar" aria-hidden="true">{initials}</div>
            <Icon size={24} aria-hidden="true" />
            <h3>{name}</h3>
            <strong>{translatedRole}</strong>
            <p>{translatedText}</p>
          </article>
        })}
      </div>
    </section>
  );
}
