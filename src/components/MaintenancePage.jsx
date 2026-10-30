import { ArrowLeft, Clock3 } from "lucide-react";

export function MaintenancePage() {
  return <main id="main" className="compatibility" tabIndex={-1}>
    <div className="compatibility-card">
      <span className="device-icon"><Clock3 size={34} aria-hidden="true" /></span>
      <span className="eyebrow">ZENITH AGRO</span>
      <h1>Estamos preparando a plataforma para você.</h1>
      <p>O aplicativo mobile e a plataforma desktop estão em desenvolvimento. Em breve, você poderá acompanhar sua lavoura com a Zenith.</p>
      <div className="hero-actions">
        <a className="btn secondary" href="/"><ArrowLeft size={18} aria-hidden="true" />Continuar no site</a>
      </div>
    </div>
  </main>;
}
