
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import AIChatBubble from "@/components/AIChatBubble";

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-light relative">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
        <footer className="mt-16 border-t border-border bg-background py-8 text-center text-muted text-base">
          <div>
            &copy; {new Date().getFullYear()} Jainish Satani. All rights reserved.
          </div>
          <div className="mt-2 text-sm">
            Made with <span className="text-gold font-bold">♥</span> | Powered by Lovable
          </div>
        </footer>
      </main>
      <AIChatBubble />
    </div>
  );
};

export default Index;
