import { Dribbble, Instagram, Linkedin, ArrowRight, Github } from "lucide-react";
import snehaPortrait from "@/assets/sneha-portrait.jpg";
export const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="min-h-screen flex items-center relative px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-7xl md:text-8xl font-bold leading-none mb-2">
                Sneha
                <br />
                Subbarayudu.
              </h1>
              <div className="w-24 h-1 bg-primary"></div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://github.com/SnehaRayudu07" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/in/sneharayudu2003" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Content */}
          
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>;
};