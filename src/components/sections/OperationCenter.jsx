import { ArrowUpRight, Box, BrainCircuit, MapPinned, ScanLine } from "lucide-react";
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
      <div className="feature-visual" aria-hidden="true">{index === 0 ? <svg viewBox="0 0 180 48"><path d="M0 35h20l12-18 18 10 20-18 20 20 15-12 15 10 20-20 20 12h20" /><path opacity=".2" d="M0 42h180M0 24h180M0 6h180" /></svg> : index === 1 ? <svg viewBox="0 0 180 48"><rect x="8" y="10" width="28" height="28" rx="5" /><path d="M44 24h22m48 0h22"/><circle cx="90" cy="24" r="16"/><path d="m82 24 6 6 11-12"/><rect x="144" y="10" width="28" height="28" rx="5"/></svg> : index === 2 ? <svg viewBox="0 0 180 48"><path d="m40 24 50-21 50 21-50 21zM40 17l50 21 50-21M40 31l50 16 50-16" /></svg> : <svg viewBox="0 0 180 48"><path d="m12 8 54 3-4 28-50 1zM73 11l42-7 1 35-48 1zM123 4l45 8-6 28-40-1z" /><path strokeDasharray="3 4" opacity=".5" d="M20 20h32m30 2h24m28 2h19"/></svg>}</div>
      <span className="feature-caption">{caption}</span><a className="text-link" href={href}>Explorar solução <ArrowUpRight size={16} aria-hidden="true" /></a>
    </article>)}</div>
  </section>;
}

