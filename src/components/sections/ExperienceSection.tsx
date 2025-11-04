import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Maximize2 } from "lucide-react";
import { useState } from "react";
import hiveinLogo from "@/assets/LogoHiveIn.png";
import houzeeLogo from "@/assets/LogoHouzee.png";
import zobazeLogo from "@/assets/LogoZobaze.png";
const hiveinDemo = `${import.meta.env.BASE_URL}assets/HiveinDemo-ezgif.com-video-to-webp-converter.webp`;
const houzeeDemo = `${import.meta.env.BASE_URL}assets/HouzeeDemo-ezgif.com-video-to-webp-converter.webp`;
const experiences = [{
  company: "HiveIn",
  logo: hiveinLogo,
  role: "Co-founder & Chief Product Builder",
  period: "Sep 2024–Oct 2025",
  description: "Privacy-focused relationship app to improve communication and build healthy habits",
  achievements: [
    "Applied lean startup principles; validated problem–solution fit via 300+ interviews",
    "Built MVP in one month using React Native (iOS + Android) and Firebase",
    "Implemented end-to-end encryption using Signal Protocol",
    "Directed GTM and social campaigns; onboarded 150+ alpha users at launch",
    "Used Figma, Amplitude, and Firebase Analytics to iterate on UX and retention"
  ],
  tags: ["React Native", "Firebase", "Signal Protocol", "Figma", "Amplitude"],
  hasVideo: true
}, {
  company: "Houzee",
  logo: houzeeLogo,
  role: "Co-founder",
  period: "Jan–Aug 2024",
  description: "Home food delivery platform bridging home chefs and consumers through trust-based, localized service",
  achievements: [
    "Led user research and design; translated insights into intuitive UX and user flows",
    "Built functional prototype within 2 months using Flutter and Firebase",
    "Integrated ML models to improve personalization and operations",
    "Top 200 Nationwide – Google Solution Challenge",
    "Winner – Startup Sprint Ideathon (₹10,000)",
    "Pitched to Northeastern University, eligible for ₹1 lakh prototype funding"
  ],
  tags: ["Flutter", "Firebase", "ML", "UI/UX"],
  hasVideo: true
}, {
  company: "Zobaze",
  logo: zobazeLogo,
  role: "ML & Android Intern",
  period: "May–Jul 2024",
  description: "Automation for large-scale inventory management platform",
  achievements: [
    "Engineered Kotlin-based system to automate product data entry for 10,000+ users",
    "Implemented ML + rule-based NER to extract product details from live scans",
    "Achieved 85% extraction accuracy; reduced manual entry time by 40%"
  ],
  tags: ["Kotlin", "Machine Learning", "Automation"],
  hasVideo: false
}];
export const ExperienceSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<{ src: string; title: string } | null>(null);

  const openVideo = (src: string, title: string) => {
    setActiveVideo({ src, title });
    setIsVideoOpen(true);
  };

  return <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full space-y-16">
        <div className="text-center space-y-4 animate-fade-in-up">
          
          <h2 className="text-5xl font-bold md:text-4xl">
            <span className="text-gradient">Experience</span>
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building products that evoke my sense of pride
          </p> */}
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => <Card key={exp.company} className="group p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-500 hover-lift animate-fade-in-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="grid md:grid-cols-[200px_1fr] gap-8">
                {/* Left: Company Info + Video Placeholder */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <img src={exp.logo} alt={`${exp.company} logo`} className="w-16 h-16 rounded-lg object-contain bg-muted p-2" />
                    <div>
                      <p className="text-sm text-primary uppercase tracking-wider">{exp.period}</p>
                      <h3 className="text-2xl font-bold text-foreground mt-1">{exp.company}</h3>
                    </div>
                  </div>

                  {exp.hasVideo && <div className="relative aspect-[9/16] max-w-[200px] bg-muted rounded-xl overflow-hidden border border-border">
                      {/* Select video source based on company */}
                      {(() => {
                        const videoSrc = exp.company === "Houzee" ? houzeeDemo : exp.company === "HiveIn" ? hiveinDemo : undefined;
                        if (!videoSrc) {
                          return (
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-transparent">
                              <Play className="w-12 h-12 text-primary opacity-60" />
                            </div>
                          );
                        }
                        const isWebp = videoSrc.endsWith('.webp');
                        return (
                          <>
                            {isWebp ? (
                              <img
                                src={videoSrc}
                                alt={`${exp.company} demo`}
                                className="h-full w-full object-cover"
                                onClick={() => openVideo(videoSrc, `${exp.company} Demo`)}
                              />
                            ) : (
                              <video
                                className="h-full w-full object-cover"
                                muted
                                loop
                                playsInline
                                autoPlay
                                preload="metadata"
                                crossOrigin="anonymous"
                                onClick={() => openVideo(videoSrc, `${exp.company} Demo`)}
                              >
                                <source src={videoSrc} type="video/mp4" />
                              </video>
                            )}
                            <button
                              type="button"
                              aria-label="Maximize video"
                              className="absolute top-2 right-2 inline-flex items-center justify-center rounded-md bg-background/70 backdrop-blur px-2 py-1 text-xs text-foreground hover:bg-background border border-border transition-colors"
                              onClick={() => openVideo(videoSrc, `${exp.company} Demo`)}
                            >
                              <Maximize2 className="w-3.5 h-3.5" />
                            </button>
                          </>
                        );
                      })()}
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/80 to-transparent">
                        <p className="text-xs text-foreground">Demo Preview</p>
                      </div>
                    </div>}
                </div>

                {/* Right: Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">{exp.role}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{exp.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => <li key={i} className="flex gap-3 text-foreground/80">
                        <span className="text-primary mt-1.5">▸</span>
                        <span>{achievement}</span>
                      </li>)}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tag}
                      </Badge>)}
                  </div>

                  
                </div>
              </div>
            </Card>)}
        </div>
      </div>
      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="p-2 sm:p-4 w-[96vw] max-w-[96vw] md:w-[92vw] md:max-w-[92vw]">
          {activeVideo && (
            <div className="space-y-3">
              <DialogTitle>{activeVideo.title}</DialogTitle>
              <div className="w-full flex items-center justify-center bg-black rounded-lg overflow-hidden">
                {activeVideo.src.endsWith('.webp') ? (
                  <img
                    src={activeVideo.src}
                    alt={activeVideo.title}
                    className="max-h-[85vh] max-w-[92vw] w-auto h-auto"
                  />
                ) : (
                  <video
                    className="max-h-[85vh] max-w-[92vw] w-auto h-auto"
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    crossOrigin="anonymous"
                  >
                    <source src={activeVideo.src} type="video/mp4" />
                  </video>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>;
};