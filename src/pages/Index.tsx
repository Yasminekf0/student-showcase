import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-8 px-6 text-center">
        <p className="font-heading text-xs text-muted-foreground">
          Built by Yasmine Kennou Filali © 2026
        </p>
      </footer>
    </div>
  );
};

export default Index;
