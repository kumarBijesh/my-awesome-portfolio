import Navigation from "@/components/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import InternshipsSection from "@/components/portfolio/InternshipsSection";
import CertificatesSection from "@/components/portfolio/CertificatesSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <InternshipsSection />
        <CertificatesSection />
        <AchievementsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;