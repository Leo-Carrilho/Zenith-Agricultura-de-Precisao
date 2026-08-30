import { useEffect, useMemo, useState } from "react";

const isIos = () => /iphone|ipad|ipod/i.test(window.navigator.userAgent);

const isStandalone = () =>
  window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;

export function useInstallPrompt() {
  const [promptEvent, setPromptEvent] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setInstalled(isStandalone());

    const onPrompt = (event) => {
      event.preventDefault();
      setPromptEvent(event);
      setMessage("");
    };

    const onInstalled = () => {
      setInstalled(true);
      setPromptEvent(null);
      setMessage("Zenith já está instalado neste dispositivo.");
    };

    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const platform = useMemo(() => {
    if (typeof window === "undefined") return "desktop";
    if (isIos()) return "ios";
    if (/android/i.test(window.navigator.userAgent)) return "android";
    return "desktop";
  }, []);

  const install = async () => {
    if (installed) {
      setMessage("O Zenith já parece estar instalado. Você pode abrir a plataforma normalmente.");
      return false;
    }

    if (!promptEvent) {
      const fallback =
        platform === "ios"
          ? "No iPhone ou iPad, abra o menu de compartilhamento do Safari e escolha Adicionar à Tela de Início."
          : "Quando o navegador não exibir o prompt automático, use a opção Instalar app no menu do Chrome ou Edge.";
      setMessage(fallback);
      return false;
    }

    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    setPromptEvent(null);
    setMessage(result.outcome === "accepted" ? "Instalação iniciada pelo navegador." : "Instalação cancelada. Você ainda pode abrir a plataforma pelo navegador.");
    return result.outcome === "accepted";
  };

  return { canInstall: Boolean(promptEvent), installed, install, message, platform };
}
