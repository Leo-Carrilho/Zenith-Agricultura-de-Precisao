import { Languages } from "lucide-react";
import { useEffect, useState } from "react";

const languages = [
  ["pt-BR", "Português"],
  ["en", "English"],
  ["es", "Español"]
];

const translations = {
  "Início": ["Home", "Inicio"], "Soluções": ["Solutions", "Soluciones"], "Tecnologia": ["Technology", "Tecnología"], "Sobre": ["About", "Acerca de"], "Contato": ["Contact", "Contacto"],
  "Sua precisão": ["Your agricultural", "Tu precisión"], "agrícola": ["precision", "agrícola"], "no": ["at its", "en el"], "ponto mais alto.": ["highest point.", "punto más alto."],
  "Drones, inteligência artificial e dados em campo": ["Drones, artificial intelligence and field data", "Drones, inteligencia artificial y datos de campo"],
  "para uma lavoura mais produtiva, sustentável": ["for a more productive, sustainable", "para un cultivo más productivo y sostenible"],
  "e rentável.": ["and profitable crop.", "y rentable."],
  "Conhecer o projeto": ["Discover the project", "Conocer el proyecto"], "Acessar plataforma": ["Access platform", "Acceder a la plataforma"], "Acessar Zenith": ["Access Zenith", "Acceder a Zenith"], "Instalar app": ["Install app", "Instalar app"],
  "Plataforma de agricultura de precisão para monitoramento e gestão de lavouras de soja.": ["Precision agriculture platform for monitoring and managing soybean crops.", "Plataforma de agricultura de precisión para el monitoreo y la gestión de cultivos de soja."],
  "Explore": ["Explore", "Explora"], "Como instalar": ["How to install", "Cómo instalar"], "Perguntas frequentes": ["Frequently asked questions", "Preguntas frecuentes"], "O projeto": ["The project", "El proyecto"], "Nossa equipe": ["Our team", "Nuestro equipo"], "Como funciona": ["How it works", "Cómo funciona"],
  "Projeto acadêmico e tecnológico em agricultura de precisão.": ["Academic and technology project in precision agriculture.", "Proyecto académico y tecnológico de agricultura de precisión."],
  "Mais perspectiva sobre o campo.": ["More perspective on the field.", "Más perspectiva sobre el campo."], "Mais clareza para decidir.": ["More clarity to decide.", "Más claridad para decidir."],
  "Plataforma": ["Platform", "Plataforma"], "Inteligência Artificial": ["Artificial Intelligence", "Inteligencia Artificial"], "Acompanhamento": ["Monitoring", "Seguimiento"], "Clima": ["Weather", "Clima"], "Histórico": ["History", "Historial"], "Análise": ["Analysis", "Análisis"], "Decisão": ["Decision", "Decisión"]
};
const originalText = new WeakMap();

function translateTextNodes(language) {
  const languageIndex = language === "en" ? 0 : language === "es" ? 1 : -1;
  document.querySelectorAll("script, style, svg, .language-selector").forEach((element) => element.dataset.skipTranslation = "true");
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => node.parentElement?.closest("[data-skip-translation]") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const original = originalText.get(node) ?? node.nodeValue.trim();
    const translated = languageIndex < 0 ? original : translations[original]?.[languageIndex];
    if (!translated) return;
    originalText.set(node, original);
    const leading = node.nodeValue.match(/^\s*/)?.[0] ?? "";
    const trailing = node.nodeValue.match(/\s*$/)?.[0] ?? "";
    node.nodeValue = `${leading}${translated}${trailing}`;
  });
}

/** Seletor visual e de preferência do Zenith, sem serviços de terceiros. */
export function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(() => localStorage.getItem("zenith-language") || "pt-BR");

  useEffect(() => {
    document.documentElement.lang = language;
    translateTextNodes(language);
  }, [language]);

  const selectLanguage = (code) => {
    setLanguage(code);
    localStorage.setItem("zenith-language", code);
    setOpen(false);
  };

  const currentLabel = languages.find(([code]) => code === language)?.[1] || "Português";
  return <div className="language-selector">
    <button className="language-button" type="button" aria-label="Selecionar idioma" aria-expanded={open} aria-haspopup="listbox" onClick={() => setOpen(!open)}>
      <Languages aria-hidden="true" size={18} />
      <span>{currentLabel}</span>
    </button>
    {open && <div className="language-menu" role="listbox" aria-label="Selecionar idioma">
      {languages.map(([code, label]) => <button key={code} type="button" role="option" aria-selected={language === code} onClick={() => selectLanguage(code)}>{label}</button>)}
    </div>}
  </div>;
}
