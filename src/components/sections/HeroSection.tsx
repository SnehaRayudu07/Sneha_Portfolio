import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import snehaPortrait from "@/assets/sneha-portrait.jpg";

export const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Avatar */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
              <img
                src={snehaPortrait}
                alt="Sneha Subbarayudu"
                className="relative w-32 h-32 rounded-full object-cover border-2 border-primary/50 shadow-lg"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-primary">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Welcome to
              <br />
              <span className="text-gradient">my digital humble abode</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              I'm an independent designer.
              <br />
              My interest lies in brand experience, and user experience.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="mr-2 h-5 w-5" />
              Let's talk
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-primary/30 hover:bg-primary/10 transition-all duration-300"
            >
              View Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Company Logos */}
          <div className="pt-20">
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-30 grayscale">
              <div className="text-2xl font-semibold">HiveIn</div>
              <div className="text-2xl font-semibold">Houzee</div>
              <div className="text-2xl font-semibold">Zobaze</div>
              <div className="text-2xl font-semibold">GITAM</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};
