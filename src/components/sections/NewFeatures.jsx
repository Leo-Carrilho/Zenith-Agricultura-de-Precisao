import { BadgeDollarSign, ChartNoAxesCombined, ScanSearch, Wheat } from "lucide-react";

const features = [
  { Icon: ScanSearch, title: "Diagnóstico por IA para soja e trigo", text: "Escolha a cultura e envie imagens para uma triagem de sinais visuais. A análise apoia a inspeção e deve ser confirmada em campo." },
  { Icon: Wheat, title: "Análise de canavial", text: "Transforme imagens aéreas em um roteiro de vistoria, com leitura das fileiras, cobertura e possíveis falhas do estande." },
  { Icon: BadgeDollarSign, title: "Gestão econômica", text: "Registre custos por hectare e por categoria para acompanhar o investimento estimado de cada talhão." },
  { Icon: ChartNoAxesCombined, title: "Estimativa de produtividade", text: "Estime a produção de soja ou trigo por talhão a partir de dados de campo e componentes de rendimento." }
];

export function NewFeatures() {
  return (
    <section className="section new-features-section" id="novidades">
      <div className="container new-features-heading reveal">
        <span className="eyebrow">Novidades Zenith</span>
        <h2>Mais recursos para planejar e acompanhar a produção.</h2>
        <p>Novas ferramentas ampliam o apoio à rotina agrícola, da vistoria visual à projeção de custos e rendimento por talhão.</p>
      </div>
      <div className="container new-features-grid stagger">
        {features.map(({ Icon, title, text }) => (
          <article key={title}>
            <Icon size={26} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
