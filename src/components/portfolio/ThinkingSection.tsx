import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const topics = [
  "AI and the Future of Work",
  "Technology and Financial Systems",
  "Startup Strategy",
  "Human-centered Product Design",
  "Building Intelligent Systems",
];

const ThinkingSection = () => (
  <section className="py-24 md:py-32 section-light">
    <div className="container mx-auto px-6 max-w-4xl">
      <SectionReveal>
        <p className="text-sm font-body tracking-widest uppercase text-primary mb-4">Thinking</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
          What I <span className="text-gradient">Think About</span>
        </h2>
      </SectionReveal>

      <div className="space-y-4">
        {topics.map((t, i) => (
          <SectionReveal key={i} delay={i * 0.08}>
            <motion.div
              whileHover={{ x: 8 }}
              className="flex items-center gap-4 py-4 border-b border-border group cursor-default"
            >
              <span className="font-display text-sm text-muted-foreground group-hover:text-primary transition-colors">
                0{i + 1}
              </span>
              <span className="font-display text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                {t}
              </span>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ThinkingSection;
