import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import InternshipsSection from "@/components/portfolio/InternshipsSection";
import CertificatesSection from "@/components/portfolio/CertificatesSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import LandingIntro from "@/components/portfolio/LandingIntro";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="min-h-screen bg-background relative selection:bg-accent/30 selection:text-white">
      {!introComplete && <LandingIntro onComplete={() => setIntroComplete(true)} />}

      {/* Global Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-accent/2 rounded-full blur-[100px] animate-ping duration-[10000ms]" />

        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.015] brightness-100 contrast-150 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className={`relative z-10 ${introComplete ? "opacity-100 transition-opacity duration-1000" : "opacity-0 invisible h-0 overflow-hidden"}`}>
        <Navigation />
        <main>
          <HeroSection />
          {/** Interactive 3D section removed per request. */}
          <AboutSection />
          <ProjectsSection />
          <InternshipsSection />
          <CertificatesSection />
          <AchievementsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
};

export default Index;