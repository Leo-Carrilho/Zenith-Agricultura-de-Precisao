import { CheckCircle2, ChevronRight, RadioTower, Upload } from "lucide-react";

const maps = [
  ["Visão geral", "/assets/multiespectral-visao-geral.jpg", "Mapa de possíveis alterações fisiológicas na lavoura."],
  ["Resposta espectral", "/assets/multiespectral-resposta-espectral.jpg", "Mapa da intensidade relativa da diferença espectral identificada."],
  ["NDVI", "/assets/multiespectral-ndvi.jpg", "Índice de vegetação calculado a partir das bandas vermelha e infravermelho próximo."],
  ["NDRE", "/assets/multiespectral-ndre.jpg", "Índice sensível às bandas Red Edge e infravermelho próximo."],
  ["Prioridade", "/assets/multiespectral-prioridade.jpg", "Áreas indicadas para orientar a inspeção em campo."]
];

export function MultispectralSection() {
  return (
    <section className="section multispectral-section" id="analise-multiespectral">
      <div className="container multispectral-intro reveal">
        <div className="section-head">
          <span className="eyebrow"><RadioTower size={15} aria-hidden="true" /> Análise multiespectral</span>
          <h2>Informações além do que o olho consegue ver.</h2>
          <p>O Zenith transforma registros multiespectrais em mapas que ajudam a encontrar regiões da lavoura que merecem uma inspeção mais próxima.</p>
        </div>
        <div className="multispectral-steps" aria-label="Etapas da análise multiespectral">
          <article><span>01</span><strong>Captura especializada</strong><p>O levantamento é feito com drone e câmera multiespectral.</p></article>
          <article><span>02</span><strong>Leitura das bandas</strong><p>O equipamento registra, entre outras, as faixas Red Edge e infravermelho próximo.</p></article>
          <article><span>03</span><strong>Mapas para vistoria</strong><p>Os arquivos são combinados para sinalizar diferenças e orientar a ida ao campo.</p></article>
        </div>
      </div>

      <div className="container multispectral-showcase reveal">
        <div className="multispectral-map-head">
          <div>
            <span className="eyebrow">Visualização do levantamento</span>
            <h3>Resultados possíveis da análise.</h3>
            <p>Cada mapa oferece uma leitura complementar para ajudar a definir onde olhar primeiro na lavoura.</p>
          </div>
        </div>
        <div className="multispectral-map-grid">
          {maps.map(([name, image, description]) => (
            <figure className="multispectral-map" key={name}>
              <img src={image} alt={description} width="1355" height="887" loading="lazy" />
              <figcaption><strong>{name}</strong><span>{description}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="container multispectral-note reveal">
        <Upload size={23} aria-hidden="true" />
        <p><strong>Importante:</strong> fotos de celular ou de drones com câmera RGB não são suficientes para essa análise. Os resultados apoiam a tomada de decisão e não substituem a avaliação de um profissional no campo.</p>
        <a href="#como-funciona">Entenda o fluxo do Zenith <ChevronRight size={17} aria-hidden="true" /></a>
      </div>
      <div className="container multispectral-reassurance reveal"><CheckCircle2 size={18} aria-hidden="true" /> Cada mapa indica onde observar com mais atenção — a confirmação acontece na inspeção em campo.</div>
    </section>
  );
}
