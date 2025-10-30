import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play } from "lucide-react";
import hiveinLogo from "@/assets/hivein-logo.png";
import houzeeLogo from "@/assets/houzee-logo.png";
import zobazeLogo from "@/assets/zobaze-logo.png";
const experiences = [{
  company: "HiveIn",
  logo: hiveinLogo,
  role: "Co-founder & Chief Product Builder",
  period: "2024–Present",
  description: "Supported by Zobaze Pvt Ltd",
  achievements: ["Built a couples' relationship app from scratch using Kotlin and Firebase", "Conducted 300+ user interviews to identify relationship pain points", "Designed, developed, and launched MVP on Play Store and App Store", "Onboarded 150+ alpha users for feedback and iteration"],
  tags: ["Kotlin", "Firebase", "Product Design", "User Research"],
  hasVideo: true
}, {
  company: "Houzee",
  logo: houzeeLogo,
  role: "Co-founder",
  period: "2023–2024",
  description: "From Google Solution Challenge to incubation",
  achievements: ["Started as a Google Solution Challenge project; later incubated at GITAM Venture Development Centre", "Led UI/UX and app development using Flutter and Firebase", "Integrated ML models to personalize user recommendations", "Top 200 Nationwide – Google Solution Challenge", "Winner – Startup Sprint Hackathon (₹10,000)", "Pitched to Northeastern University, Boston"],
  tags: ["Flutter", "Firebase", "ML", "UI/UX"],
  hasVideo: true
}, {
  company: "Zobaze Technologies",
  logo: zobazeLogo,
  role: "ML & Android Intern",
  period: "May–Jul 2024",
  description: "Building intelligent automation systems",
  achievements: ["Developed Kotlin-based automation system for 10,000+ user platform", "Implemented ML model achieving 85% extraction accuracy", "Reduced data entry time by 40%"],
  tags: ["Kotlin", "Machine Learning", "Automation"],
  hasVideo: false
}];
export const ExperienceSection = () => {
  return <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full space-y-16">
        <div className="text-center space-y-4 animate-fade-in-up">
          
          <h2 className="text-5xl md:text-6xl font-bold">
            Featured <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building products that evoke my sense of pride
          </p>
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
                      <p className="text-sm text-primary uppercase tracking-wider">{exp.company} • {exp.period.split("–")[0]}</p>
                      <h3 className="text-2xl font-bold text-foreground mt-1">{exp.company}</h3>
                    </div>
                  </div>

                  {exp.hasVideo && <div className="relative aspect-[9/16] max-w-[200px] bg-muted rounded-xl overflow-hidden border border-border">
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-transparent">
                        <Play className="w-12 h-12 text-primary opacity-60" />
                      </div>
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

                  {exp.hasVideo && <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group/btn">
                      <span className="text-sm font-medium">View Case Study</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>}
                </div>
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};