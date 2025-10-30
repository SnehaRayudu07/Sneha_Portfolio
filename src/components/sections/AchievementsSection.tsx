import { Card } from "@/components/ui/card";
import { Trophy, Award, DollarSign, Presentation } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Merit Scholarship Holder",
    description: "75% tuition concession for academic excellence",
    color: "text-amber-400",
  },
  {
    icon: Trophy,
    title: "Top 200 Nationwide",
    description: "Google Solution Challenge with Houzee",
    color: "text-blue-400",
  },
  {
    icon: DollarSign,
    title: "Winner – Startup Sprint",
    description: "₹10,000 prize for innovative solution",
    color: "text-green-400",
  },
  {
    icon: Presentation,
    title: "International Pitch",
    description: "Presented at Northeastern University, Boston",
    color: "text-purple-400",
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full space-y-16">
        <div className="text-center space-y-4 animate-fade-in-up">
          <p className="text-sm text-primary uppercase tracking-wider">Recognition</p>
          <h2 className="text-5xl md:text-6xl font-bold">
            Notable <span className="text-gradient">Achievements</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={achievement.title}
                className="group p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-500 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
