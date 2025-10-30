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
              <a
                href="https://github.com/SnehaRayudu07"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/sneharayudu2003"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Portrait Image */}
            <div className="relative mb-8 lg:mb-0">
              <img
                src={snehaPortrait}
                alt="Sneha Subbarayudu"
                className="w-full max-w-md lg:max-w-lg ml-auto object-cover"
              />
            </div>

            {/* Introduction Card */}
            <div className="absolute bottom-8 right-0 max-w-md space-y-4 animate-fade-in">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                — Introduction
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                Product Designer and Developer, based in Hyderabad.
              </h2>
              <p className="text-muted-foreground">
                Co-founder of HiveIn, a relationship app for couples. Former founder of Houzee. 
                I love taking ideas from 0 → 1 through research, design, and engineering.
              </p>
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300 group"
              >
                <span className="font-medium">My story</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Arrow */}
            <button
              onClick={scrollToAbout}
              className="absolute -bottom-4 right-8 w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Scroll to next section"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};