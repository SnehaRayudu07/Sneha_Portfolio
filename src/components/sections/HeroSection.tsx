import { Dribbble, Instagram, Linkedin, ArrowRight, Github } from "lucide-react";
import snehaPortrait from "@/assets/sneha-portrait.jpg";

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center animate-fade-in-up">
          {/* Left - Name */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-3">
                Sneha
                <br />
                Subbarayudu
              </h1>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://github.com/SnehaRayudu07"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/sneharayudu2003"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Stats */}
            <div className="space-y-4 pt-8">
              <div>
                <p className="text-4xl md:text-5xl font-bold">+150</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Alpha users onboarded for feedback and iteration
                </p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold">+300</p>
                <p className="text-sm text-muted-foreground mt-1">
                  User interviews conducted to identify pain points
                </p>
              </div>
            </div>
          </div>

          {/* Center - Image */}
          <div className="lg:col-span-4 relative">
            <div className="relative bg-primary rounded-[3rem] overflow-hidden aspect-[3/4] max-w-md mx-auto">
              <img
                src={snehaPortrait}
                alt="Sneha Subbarayudu"
                className="w-full h-full object-cover"
              />
              {/* Globe Icon */}
              <div className="absolute top-4 right-4 w-14 h-14 bg-foreground rounded-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-background rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-0.5 bg-background"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-0.5 h-full bg-background"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Introduction */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                — Introduction
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Product Designer and Developer
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Co-founder of HiveIn, a relationship app for couples. Former founder of Houzee. 
                I love taking ideas from 0 → 1 through research, design, and engineering.
              </p>
            </div>

            <button
              onClick={scrollToAbout}
              className="inline-flex items-center gap-3 text-foreground hover:gap-5 transition-all duration-300 group font-medium"
            >
              <span>My story</span>
              <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};