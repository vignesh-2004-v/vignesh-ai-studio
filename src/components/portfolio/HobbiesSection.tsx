import SectionReveal from "./SectionReveal";
import { motion } from "framer-motion";
import { TrendingUp, Dumbbell, Gamepad2, BookOpen, Music } from "lucide-react";

const hobbies = [
  { icon: TrendingUp, label: "Investing & Trading", desc: "Active in financial markets with a focus on equities and crypto" },
  { icon: BookOpen, label: "Reading", desc: "Books on technology, business strategy, and psychology" },
  { icon: Dumbbell, label: "Fitness", desc: "Consistent training to maintain discipline and energy" },
  { icon: Gamepad2, label: "Gaming", desc: "Strategy and simulation games that challenge thinking" },
  { icon: Music, label: "Music", desc: "Exploring different genres to fuel creativity" },
];

const HobbiesSection = () => (
  <section className="py-24 md:py-32 section-light">
    <div className="container mx-auto px-6 max-w-4xl">
      <SectionReveal>
        <p className="text-sm font-body tracking-widest uppercase text-primary mb-4">Beyond Work</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">
          My <span className="text-gradient">Hobbies</span>
        </h2>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((h, i) => (
          <SectionReveal key={h.label} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card rounded-xl p-6 cursor-default"
            >
              <h.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{h.label}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HobbiesSection;
