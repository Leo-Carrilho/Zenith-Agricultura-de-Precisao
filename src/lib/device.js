export const PLATFORM_URL = "https://zenith-agtech.vercel.app";
export const MOBILE_URL = "https://instalacao-mobile.vercel.app";

// OS signals take precedence over viewport size, including iPadOS desktop mode.
export function detectDevice(nav) {
  if (!nav) return "unknown";
  const ua = nav.userAgent || "";
  const platform = nav.userAgentData?.platform || nav.platform || "";
  if (/iPad|Tablet|Silk|PlayBook/i.test(ua) || (/Mac/i.test(platform) && nav.maxTouchPoints > 1)) return "tablet";
  if (/Android/i.test(ua) && !/Mobile/i.test(ua)) return "tablet";
  if (nav.userAgentData?.mobile === true || /iPhone|iPod|Android.*Mobile|IEMobile|Opera Mini/i.test(ua)) return "mobile";
  if (/Windows|Mac|Linux|CrOS/i.test(platform + " " + ua)) return "desktop";
  return "unknown";
}

export function platformDestination(device, intent = "auto") {
  const handheld = device === "mobile" || device === "tablet";
  if (device === "unknown") return `/dispositivo-incompativel?destino=${intent}`;
  if (intent === "desktop") return handheld ? "/dispositivo-incompativel?destino=desktop" : PLATFORM_URL;
  if (intent === "mobile") return handheld ? MOBILE_URL : "/dispositivo-incompativel?destino=mobile";
  return handheld ? MOBILE_URL : PLATFORM_URL;
}

