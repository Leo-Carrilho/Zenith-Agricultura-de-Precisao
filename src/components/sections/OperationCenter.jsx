import { ArrowUpRight, Box, BrainCircuit, MapPinned, ScanLine } from "lucide-react";
import { useState } from "react";
import { fieldMapViews } from "../../data/fieldMapViews";

const solutionImages = [
  { src: "/assets/lavoura_cafe.webp", position: "center 52%", ratio: "500 / 354" },
  { src: "/assets/diagnostico-ia-soja.png", position: "center", ratio: "1672 / 941" },
  { src: "/assets/reconstrucao-3d-talho.png", position: "center", ratio: "1672 / 941" }
];
const solutions = [
  [ScanLine, "Monitoramento agrícola", "Imagens e dados para acompanhar o plantio e reconhecer regiões que precisam de atenção.", "#visao-computacional", "Leitura da lavoura"],
  [BrainCircuit, "Diagnóstico por IA", "Modelo de inteligência artificial treinado com deep learning para reconhecer padrões em imagens da soja e apoiar o diagnóstico.", "#ia", "Imagem → análise → contexto"],
  [Box, "Reconstrução 3D", "Imagens sequenciais do voo transformadas em uma perspectiva tridimensional da área.", "#monitoramento-3d", "Uma nova dimensão do campo"],
  [MapPinned, "Mapeamento de talhões", "Organização espacial da propriedade para acompanhar cada área e seu histórico.", "#mapeamento-talhoes", "O mesmo talhão em duas perspectivas."]
];

function FieldMapPreview() {
  const [activeMode, setActiveMode] = useState("2D");
  const activeView = fieldMapViews.find(({ mode }) => mode === activeMode) ?? fieldMapViews[0];

  return <div className="field-map-preview">
    <div className="field-map-switch" role="group" aria-label="Visualização do talhão">
      {fieldMapViews.map(({ mode }) => <button key={mode} type="button" aria-pressed={activeMode === mode} onClick={() => setActiveMode(mode)}>{mode}</button>)}
    </div>
    <div className="field-map-preview-image"><img src={activeView.src} alt="" loading="lazy" /></div>
    <p><span>{activeView.mode}</span><strong>{activeView.label}</strong></p>
  </div>;
}

export function OperationCenter() {
  return <section className="section operation-center" id="solucoes" tabIndex={-1}>
    <span id="recursos" className="anchor-alias" />
    <div className="container section-head reveal"><span className="eyebrow">01 / SOLUÇÕES ZENITH</span><h2>Mais perspectiva sobre o campo.<br />Mais clareza para decidir.</h2><p>Da primeira imagem ao acompanhamento da propriedade, informações conectadas para uma agricultura mais precisa.</p></div>
    <div className="container resource-grid stagger">{solutions.map(([Icon,title,text,href,caption], index) => <article className="resource-card" key={title}>
      <Icon size={24} aria-hidden="true" /><h3>{title}</h3><p>{text}</p>
      {index === 3 ? <FieldMapPreview /> : <div className="feature-visual" style={{ "--feature-ratio": solutionImages[index].ratio }} aria-hidden="true">
        <img className={`feature-visual-image ${solutionImages[index].className ?? ""}`.trim()} src={solutionImages[index].src} style={{ objectPosition: solutionImages[index].position }} alt="" loading="lazy" />
      </div>}
      <span className="feature-caption">{caption}</span><a className="text-link" href={href}>Explorar solução <ArrowUpRight size={16} aria-hidden="true" /></a>
    </article>)}</div>
  </section>;
}
