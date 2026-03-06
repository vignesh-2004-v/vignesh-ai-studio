import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const categories = [
  { title: "AI / Data", skills: ["Python", "AI Agents", "LLM Systems"] },
  { title: "Development", skills: ["Next.js", "Web Development"] },
  { title: "Hardware", skills: ["ESP32", "IoT Systems"] },
  { title: "Design", skills: ["UI/UX Design", "Figma", "Product Thinking"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 md:py-32 section-light">
    <div className="container mx-auto px-6">
      <SectionReveal>
        <p className="text-sm font-body tracking-widest uppercase text-primary mb-4">Skills</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">
          Tools & <span className="text-gradient">Technologies</span>
        </h2>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((c, i) => (
          <SectionReveal key={i} delay={i * 0.1}>
            <div className="space-y-4">
              <h3 className="font-display text-lg font-semibold text-foreground">{c.title}</h3>
              <div className="space-y-3">
                {c.skills.map((s) => (
                  <motion.div
                    key={s}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                    <span className="font-body text-muted-foreground group-hover:text-foreground transition-colors">
                      {s}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
