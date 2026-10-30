import { Clock3 } from "lucide-react";
export function PlatformCTA({ intent = "auto", className = "btn primary", children, onClick }) {
  const label = children || (intent === "mobile" ? "Aplicativo em breve" : "Plataforma em desenvolvimento");
  return <a className={className} href="/em-desenvolvimento" onClick={onClick}>{label}<Clock3 size={18} aria-hidden="true" /></a>;
}

