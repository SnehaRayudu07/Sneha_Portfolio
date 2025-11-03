import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        {/** About section hidden per request **/}
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        {/** Achievements section hidden per request **/}
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
