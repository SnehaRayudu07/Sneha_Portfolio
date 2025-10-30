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
        <div className="grid lg:grid-cols-2 gap-16 items-center animate-fade-in-up">
          {/* Left Content - Name and Introduction */}
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-4">
                Sneha
                <br />
                Subbarayudu.
              </h1>
              <div className="w-24 h-1 bg-primary mb-8"></div>
              
              {/* Introduction */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                  Product Designer & Developer
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A passionate creator with 2+ years of experience in crafting intuitive digital experiences. 
                  I blend design thinking with technical expertise to build products that users love.
                </p>
                <button
                  onClick={scrollToAbout}
                  className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300 group"
                >
                  <span className="text-lg font-medium">My story</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://github.com/SnehaRayudu07" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-muted flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-muted flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/sneharayudu2003" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-muted flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl"></div>
              <img
                src={snehaPortrait}
                alt="Sneha Subbarayudu"
                className="relative w-full max-w-md rounded-3xl shadow-2xl border-4 border-primary/30 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>;
};