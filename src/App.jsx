import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import {
  AboutProject,
  Accounts,
  AISection,
  CTASection,
  FAQSection,
  InstallSection,
  ManagementSection,
  MappingSection,
  MultispectralSection,
  OperationCenter,
  PlatformPreview,
  PlantingVision,
  SignatureSection,
  TeamSection,
  TechnologySection,
  ThreeDMonitor,
  WorkflowSection
} from "./components/sections";
import { useGsapAnimations } from "./hooks/useGsapAnimations";
import { DeviceCompatibilityPage } from "./components/DeviceCompatibilityPage";

export default function App() {
  const root = useGsapAnimations();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const id = window.location.hash.slice(1);
      if (id) document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const register = () => navigator.serviceWorker.register("/sw.js").catch(() => {});
      if (document.readyState === "complete") register();
      else window.addEventListener("load", register, { once: true });
      return () => window.removeEventListener("load", register);
    }
  }, []);

  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const intent = new URLSearchParams(window.location.search).get("destino");
  const accessRoutes = { "/acessar-plataforma": "desktop", "/instalar-aplicativo": "mobile" };
  const compatibility = path === "/dispositivo-incompativel" || path in accessRoutes;

  return (
    <div ref={root}>
      <Header />
      {compatibility ? <DeviceCompatibilityPage intent={accessRoutes[path] || (["desktop", "mobile"].includes(intent) ? intent : "auto")} redirect={path in accessRoutes} /> : <main id="main" tabIndex={-1}>
        <Hero />
        <OperationCenter />
        <WorkflowSection />
        <MultispectralSection />
        <SignatureSection />
        <PlatformPreview />
        <AISection />
        <PlantingVision />
        <ThreeDMonitor />
        <MappingSection />
        <ManagementSection />
        <Accounts />
        <InstallSection />
        <TechnologySection />
        <AboutProject />
        <TeamSection />
        <FAQSection />
        <CTASection />
      </main>}
      <Footer />
    </div>
  );
}
