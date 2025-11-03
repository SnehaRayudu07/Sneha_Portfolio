import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Brain, Palette } from "lucide-react";
const skillCategories = [{
  title: "Programming Languages",
  icon: Code2,
  skills: ["Python", "Java", "Kotlin", "Dart", "C", "SQL"]
}, {
  title: "Mobile & Cross-Platform / Backend",
  icon: Smartphone,
  skills: ["Android SDK", "React Native", "Flutter", "Firebase", "REST APIs", "Postgres", "Signal Protocol"]
}, {
  title: "Machine Learning & Data Science",
  icon: Brain,
  skills: ["TensorFlow", "Keras", "Scikit-Learn", "NumPy", "Pandas", "Deep Learning", "CNNs"]
}, {
  title: "Product & Design",
  icon: Palette,
  skills: ["Product Strategy", "User Research", "Figma (UX/UI)", "Analytics (Amplitude, Firebase Analytics)"]
}];
export const SkillsSection = () => {
  return <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full space-y-16">
        <div className="text-center space-y-4 animate-fade-in-up">
          
          <h2 className="text-5xl font-bold md:text-4xl">
            Diverse <span className="text-gradient">Skill Set</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return <Card key={category.title} className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-500 hover-lift animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map(skill => <span key={skill} className="px-4 py-2 rounded-full bg-muted border border-border text-foreground text-sm hover:bg-primary/10 hover:border-primary/30 transition-all duration-300">
                        {skill}
                      </span>)}
                  </div>
                </div>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};