import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, ArrowUp } from "lucide-react";

export const ContactSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-4xl mx-auto w-full space-y-16">
        <div className="text-center space-y-6 animate-fade-in-up">
          <p className="text-sm text-primary uppercase tracking-wider">Contact</p>
          <h2 className="text-5xl md:text-6xl font-bold">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-2xl text-muted-foreground italic max-w-2xl mx-auto">
            "Let's build something meaningful together."
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="mailto:sneharayudu01@gmail.com"
              className="group flex items-start gap-4 p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 hover-lift"
            >
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-1 flex-1">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Email</p>
                <p className="text-foreground font-medium break-all">sneharayudu01@gmail.com</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/sneharayudu2003"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 hover-lift"
            >
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-1 flex-1">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">LinkedIn</p>
                <p className="text-foreground font-medium">/in/sneharayudu2003</p>
              </div>
            </a>

            <a
              href="https://github.com/SnehaRayudu07"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 hover-lift"
            >
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-1 flex-1">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">GitHub</p>
                <p className="text-foreground font-medium">/SnehaRayudu07</p>
              </div>
            </a>

            <div className="group flex items-start gap-4 p-6 rounded-xl">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-1 flex-1">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Location</p>
                <p className="text-foreground font-medium">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center text-sm text-muted-foreground animate-fade-in-up">
          <p>© 2025 Sneha Subbarayudu. Built with passion and curiosity.</p>
        </div>
      </div>

      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </section>
  );
};
