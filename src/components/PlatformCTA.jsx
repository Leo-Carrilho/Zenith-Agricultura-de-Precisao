import { ArrowUpRight, Smartphone } from "lucide-react";
import { useDeviceType } from "../hooks/useDeviceType";
import { platformDestination } from "../lib/device";
export function PlatformCTA({ intent = "auto", className = "btn primary", children, onClick }) {
  const device = useDeviceType();
  const isMobile = intent === "mobile" || (intent === "auto" && ["mobile", "tablet"].includes(device));
  const label = children || (isMobile ? "Instalar app" : device === "unknown" && intent === "auto" ? "Acessar Zenith" : "Acessar plataforma");
  const Icon = isMobile ? Smartphone : ArrowUpRight;
  return <a className={className} href={platformDestination(device, intent)} onClick={onClick}>{label}<Icon size={18} aria-hidden="true" /></a>;
}

