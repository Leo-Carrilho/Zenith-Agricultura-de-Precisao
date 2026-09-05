import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, Check, Copy, Monitor, Smartphone } from "lucide-react";
import { useDeviceType } from "../hooks/useDeviceType";
import { MOBILE_URL, PLATFORM_URL, platformDestination } from "../lib/device";
import { PlatformCTA } from "./PlatformCTA";

export function DeviceCompatibilityPage({ intent = "auto", redirect = false }) {
  const device = useDeviceType();
  const [copyStatus, setCopyStatus] = useState("");
  const input = useRef(null);
  const handheld = device === "mobile" || device === "tablet";
  const needsPhone = intent === "mobile" && !handheld;
  const unknown = device === "unknown";
  useEffect(() => {
    if (!redirect || unknown) return;
    window.location.replace(platformDestination(device, intent));
  }, [device, intent, redirect, unknown]);
  const title = unknown
    ? "Escolha como você quer usar a Zenith"
    : needsPhone ? "A instalação mobile deve ser realizada pelo celular"
    : intent === "desktop" && handheld ? "Esta versão foi desenvolvida para computadores"
    : "A Zenith no dispositivo certo para você";
  useEffect(() => {
    document.title = title + " | Zenith";
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) { robots = document.createElement("meta"); robots.name = "robots"; document.head.append(robots); }
    robots.content = "noindex, follow";
  }, [title]);
  const copy = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("clipboard unavailable");
      await navigator.clipboard.writeText(MOBILE_URL);
      setCopyStatus("Link copiado. Abra no seu celular para continuar.");
    } catch {
      input.current?.focus();
      input.current?.select();
      setCopyStatus("Selecione e copie o endereço abaixo para abrir no celular.");
    }
  };
  return <main id="main" className="compatibility" tabIndex={-1}>
    <div className="compatibility-card">
      <span className="device-icon">{needsPhone ? <Smartphone size={34} aria-hidden="true" /> : <Monitor size={34} aria-hidden="true" />}</span>
      <span className="eyebrow">UMA ZENITH. CADA EXPERIÊNCIA NO SEU LUGAR.</span>
      <h1>{title}</h1>
      <p>{unknown ? "Use a plataforma web em um computador. No celular ou tablet iOS/Android, acesse a instalação mobile."
        : needsPhone ? "Acesse a instalação oficial pelo seu smartphone. No computador, você pode continuar na plataforma web Zenith."
        : handheld ? "A plataforma web Zenith foi otimizada para computadores. Para utilizar a Zenith no celular ou tablet, instale nossa versão mobile."
        : "No computador, acesse a plataforma web para acompanhar sua lavoura, analisar imagens e organizar sua operação."}</p>
      {needsPhone && <div className="qr-panel">
        <img src="/assets/zenith-mobile-qr.svg" width="160" height="160" alt="QR Code para https://instalacao-mobile.vercel.app" />
        <div><strong>Leve a Zenith para o campo.</strong><p>Escaneie com a câmera do celular para continuar.</p><button type="button" className="btn secondary" onClick={copy}>{copyStatus.startsWith("Link copiado") ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}Copiar link</button></div>
      </div>}
      {needsPhone && <><label htmlFor="mobile-link" className="eyebrow">LINK DE INSTALAÇÃO</label><input ref={input} id="mobile-link" className="copy-link" readOnly value={MOBILE_URL} onFocus={e => e.target.select()} /><p className="copy-status" role="status">{copyStatus}</p></>}
      <div className="hero-actions">
        {unknown ? <><a className="btn primary" href={PLATFORM_URL}>Estou no computador <ArrowUpRight size={18} aria-hidden="true" /></a><a className="btn secondary" href={MOBILE_URL}>Estou no celular <Smartphone size={18} aria-hidden="true" /></a></>
          : <PlatformCTA>{handheld ? "Instalar Zenith no celular" : "Acessar plataforma para desktop"}</PlatformCTA>}
        <a className="btn secondary" href="/"><ArrowLeft size={18} aria-hidden="true" />Continuar no site</a>
      </div>
    </div>
  </main>;
}

