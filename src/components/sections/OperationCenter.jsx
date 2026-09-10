import { ArrowUpRight, Box, BrainCircuit, MapPinned, ScanLine } from "lucide-react";
const solutionImages = [
  ["/assets/lavoura_cafe.webp", "center 52%"],
  ["/assets/Teste_soja.webp", "center 48%"],
  ["/assets/imagem_drone.webp", "center 56%"],
  ["/assets/dashboard.webp", "center 54%"]
];
const solutions = [
  [ScanLine, "Monitoramento agrícola", "Imagens e dados para acompanhar o plantio e reconhecer regiões que precisam de atenção.", "#visao-computacional", "Leitura da lavoura"],
  [BrainCircuit, "Diagnóstico por IA", "Visão computacional aplicada à soja, com um modelo em validação para apoiar a inspeção.", "#ia", "Imagem → análise → contexto"],
  [Box, "Reconstrução 3D", "Imagens sequenciais do voo transformadas em uma perspectiva tridimensional da área.", "#monitoramento-3d", "Uma nova dimensão do campo"],
  [MapPinned, "Mapeamento de talhões", "Organização espacial da propriedade para acompanhar cada área e seu histórico.", "#gestao", "Propriedade → talhão → histórico"]
];
export function OperationCenter() {
  return <section className="section operation-center" id="solucoes" tabIndex={-1}>
    <span id="recursos" className="anchor-alias" />
    <div className="container section-head reveal"><span className="eyebrow">01 / SOLUÇÕES ZENITH</span><h2>Mais perspectiva sobre o campo.<br />Mais clareza para decidir.</h2><p>Da primeira imagem ao acompanhamento da propriedade, informações conectadas para uma agricultura mais precisa.</p></div>
    <div className="container resource-grid stagger">{solutions.map(([Icon,title,text,href,caption], index) => <article className="resource-card" key={title}>
      <Icon size={24} aria-hidden="true" /><h3>{title}</h3><p>{text}</p>
      <div className="feature-visual" aria-hidden="true"><img src={solutionImages[index][0]} style={{ objectPosition: solutionImages[index][1] }} alt="" loading="lazy" /></div>
      <span className="feature-caption">{caption}</span><a className="text-link" href={href}>Explorar solução <ArrowUpRight size={16} aria-hidden="true" /></a>
    </article>)}</div>
  </section>;
}

