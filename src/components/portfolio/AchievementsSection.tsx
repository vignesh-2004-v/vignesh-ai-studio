import { Award, Globe } from "lucide-react";
import SectionReveal from "./SectionReveal";

const achievements = [
  {
    icon: Award,
    title: "Patent Filed – Smart Tap Using IoT",
    detail: "Application Number: 202541117235",
    description:
      "Filed with the Office of the Controller General of Patents, Designs & Trade Marks, Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce & Industry, Government of India.",
  },
  {
    icon: Globe,
    title: "IEEE YESIST12 2025 Grand Finale Finalist – Malaysia",
    detail: "Selected among 1000+ global submissions",
    description:
      "Selected for the IEEE YESIST12 International Innovation Challenge. Invited to present the project at the IEEE UKM Student Branch, Malaysia on August 23–24, 2025.",
  },
];

const AchievementsSection = () => (
  <section id="achievements" className="py-24 md:py-32 section-light">
    <div className="container mx-auto px-6 max-w-4xl">
      <SectionReveal>
        <p className="text-sm font-body tracking-widest uppercase text-primary mb-4">
          Achievements
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">
          Milestones <span className="text-gradient">Reached</span>
        </h2>
      </SectionReveal>

      <div className="space-y-8">
        {achievements.map((a, i) => (
          <SectionReveal key={i} delay={i * 0.15}>
            <div className="glass-card rounded-xl p-8 flex gap-6 items-start hover-lift">
              <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <a.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {a.title}
                </h3>
                <p className="text-sm font-body text-primary mb-3">{a.detail}</p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {a.description}
                </p>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
