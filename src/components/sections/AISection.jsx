import { BrainCircuit, CheckCircle2, Eye, FileUp, TriangleAlert } from "lucide-react";

export function AISection() {
  return (
    <section className="section ai-section" id="ia" data-header-theme="dark">
      <div className="container ai-console-grid">
        <div className="section-copy reveal">
          <span className="eyebrow">Zenith AI / Modelo em validação</span>
          <h2>Diagnóstico com Inteligência Artificial.</h2>
          <p>Escolha entre soja e trigo para realizar a triagem de imagens com Inteligência Artificial. Cada cultura utiliza um fluxo de análise compatível com seus padrões visuais.</p>
          <p className="support-text">O resultado deve ser interpretado como apoio à inspeção da lavoura.</p>
        </div>
        <div className="ai-console reveal" aria-label="Painel simulado de diagnóstico com IA">
          <div className="console-header">
            <span>ANÁLISE ZENITH AI</span>
            <strong><CheckCircle2 size={17} aria-hidden="true" /> Modelo em validação</strong>
          </div>
          <div className="ai-sample">
            <img src="/assets/Teste_soja.webp" alt="Imagem de referência de folha de soja com manchas" width="500" height="300" loading="lazy" />
            <div><span>DEEP LEARNING</span><strong>Da imagem ao diagnóstico.</strong><span>Selecione soja ou trigo e receba uma leitura que apoia a avaliação em campo.</span></div>
          </div>
          <div className="ai-flow" aria-label="Fluxo de diagnóstico com IA">
            {[[FileUp, "Enviar imagem"], [BrainCircuit, "Processando"], [Eye, "Resultado"]].map(([Icon, label]) => (
              <article key={label}><Icon size={28} aria-hidden="true" /><span>{label}</span></article>
            ))}
          </div>
          <div className="status-chip attention"><TriangleAlert size={15} aria-hidden="true" /> Conferência técnica recomendada</div>
        </div>
      </div>
      <div className="container class-grid stagger">
        {["Soja", "Trigo", "Triagem por imagens", "Conferência em campo"].map((item) => (
          <article key={item}><BrainCircuit size={22} aria-hidden="true" /><h3>{item}</h3></article>
        ))}
      </div>
    </section>
  );
}
