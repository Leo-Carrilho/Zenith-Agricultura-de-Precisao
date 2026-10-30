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
  NewFeatures,
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
import { MaintenancePage } from "./components/MaintenancePage";

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
  const maintenance = path === "/em-desenvolvimento" || path in accessRoutes;
  const compatibility = path === "/dispositivo-incompativel";

  return (
    <div ref={root}>
      <Header />
      {maintenance ? <MaintenancePage /> : compatibility ? <DeviceCompatibilityPage intent={["desktop", "mobile"].includes(intent) ? intent : "auto"} /> : <main id="main" tabIndex={-1}>
        <Hero />
        <OperationCenter />
        <WorkflowSection />
        <MultispectralSection />
        <SignatureSection />
        <PlatformPreview />
        <AISection />
        <NewFeatures />
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
