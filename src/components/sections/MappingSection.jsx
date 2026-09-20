import { CheckCircle2, History, Layers3, Map, MapPinned, ScanSearch } from "lucide-react";
import { fieldMapViews } from "../../data/fieldMapViews";

const viewIcons = { "2D": Map, "3D": Layers3 };
const mappingSteps = [
  ["01", MapPinned, "Delimite o talhão", "Marque os limites da área produtiva diretamente sobre o mapa."],
  ["02", Layers3, "Alterne a perspectiva", "Compare a visão superior em 2D com a leitura espacial em 3D."],
  ["03", History, "Acompanhe o histórico", "Mantenha área, registros e análises vinculados ao mesmo talhão."]
];
const viewBenefits = {
  "2D": ["Desenho do perímetro", "Cálculo da área", "Organização dos talhões"],
  "3D": ["Perspectiva do terreno", "Contexto espacial", "Inspeção visual da área"]
};

export function MappingSection() {
  return <section className="section mapping-section" id="mapeamento-talhoes" tabIndex={-1}>
    <div className="container section-head reveal">
      <span className="eyebrow">MAPEAMENTO DE TALHÕES</span>
      <h2>Do desenho da área à leitura do terreno.</h2>
      <p>Compare a demarcação em 2D com a visualização em 3D do mesmo talhão.</p>
    </div>
    <div className="container mapping-flow stagger" aria-label="Etapas do mapeamento">
      {mappingSteps.map(([number, Icon, title, text]) => <article key={number}>
        <span>{number}</span><Icon size={22} aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div>
      </article>)}
    </div>
    <div className="container mapping-showcase stagger">
      {fieldMapViews.map(({ mode, label, description, src }) => {
        const Icon = viewIcons[mode];
        return <article className="mapping-view" key={mode}>
          <div className="mapping-view-head">
            <span><Icon size={18} aria-hidden="true" />{mode}</span>
            <div><h3>{label}</h3><p>{description}</p></div>
          </div>
          <figure><img src={src} alt="" loading="lazy" /></figure>
          <ul className="mapping-benefits">{viewBenefits[mode].map((benefit) => <li key={benefit}><CheckCircle2 size={16} aria-hidden="true" />{benefit}</li>)}</ul>
        </article>;
      })}
    </div>
    <div className="container mapping-decision reveal">
      <ScanSearch size={30} aria-hidden="true" />
      <div><span className="eyebrow">DECISÃO COM CONTEXTO</span><h3>2D para organizar. 3D para compreender.</h3><p>As duas visualizações representam o mesmo talhão. A demarcação estrutura a propriedade; a perspectiva 3D amplia a leitura do terreno e prepara o acompanhamento ao longo do tempo.</p></div>
      <div className="mapping-path" aria-label="Estrutura das informações"><span>Propriedade</span><i aria-hidden="true" /> <span>Talhão</span><i aria-hidden="true" /> <span>Visualização</span><i aria-hidden="true" /> <span>Histórico</span></div>
    </div>
  </section>;
}
