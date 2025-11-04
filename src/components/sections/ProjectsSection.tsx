import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Shield } from "lucide-react";
const projects = [{
  title: "Deep Learning for Diabetic Retinopathy Detection",
  type: "Final Year Major Project (10/2024 – 03/2025)",
  icon: Brain,
  description: "Developed multi-class CNN with InceptionResNetV2 to classify retinal fundus images (No DR → PDR). Integrated model into a Kotlin + TFLite smartphone app for offline, on-device screening.",
  tech: ["TensorFlow", "Keras", "Kotlin", "TFLite", "CNN"],
  impact: "86.6% accuracy • 0.93 Cohen's Kappa • Offline on-device DR detection"
}, {
  title: "Phishing Detection Model",
  type: "Smart India Hackathon (09/2023 – 10/2023)",
  icon: Shield,
  description: "Directed a team of 6 to build 'Fishers' using Ensemble ML methods for website phishing detection; delivered a working solution in 24 hours.",
  tech: ["Python", "Scikit-Learn", "Ensemble ML", "Web Development"],
  impact: "95.53% accuracy • 24-hour delivery"
}];
export const ProjectsSection = () => {
  return <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full space-y-16">
        <div className="text-center space-y-4 animate-fade-in-up">
          
          <h2 className="text-5xl font-bold md:text-4xl">
            My <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
          const Icon = project.icon;
          return <Card key={project.title} className="group p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-500 hover-lift animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {project.type}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">{project.description}</p>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-full bg-white border border-border text-black text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-sm text-primary font-medium">{project.impact}</p>
                  </div>
                </div>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};