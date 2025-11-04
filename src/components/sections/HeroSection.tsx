import { Dribbble, Instagram, Linkedin, ArrowRight, Github } from "lucide-react";
import snehaPortrait from "@/assets/ProfileSnehaNobg.png";
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
                  Product-minded technologist passionate about building user-centric products that merge design, data, and engineering.
                  <br />
                  <br />
                  Co-founded early-stage startups from idea to launch, translating user insights and research into user-centric solutions.
                </p>
                {/* My story button hidden per request */}
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
              <img
                src={snehaPortrait}
                alt="Sneha Subbarayudu"
                className="relative w-full max-w-lg md:max-w-xl rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements removed as requested */}
    </section>;
};