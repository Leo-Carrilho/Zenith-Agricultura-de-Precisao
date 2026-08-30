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

export default function App() {
  const root = useGsapAnimations();

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js").catch(() => {}), { once: true });
    }
  }, []);

  return (
    <div ref={root}>
      <Header />
      <main>
        <Hero />
        <AboutProject />
        <OperationCenter />
        <WorkflowSection />
        <SignatureSection />
        <PlatformPreview />
        <AISection />
        <PlantingVision />
        <ThreeDMonitor />
        <ManagementSection />
        <Accounts />
        <InstallSection />
        <TechnologySection />
        <TeamSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
