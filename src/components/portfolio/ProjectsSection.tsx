import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const projects = [
  {
    title: "ClinicGuard AI",
    description:
      "A probabilistic financial decision-support system designed for independent healthcare clinics. It helps clinic owners simulate financial risks and evaluate business decisions using AI-driven modeling and forecasting.",
    tags: ["AI", "Financial Modeling", "Decision Intelligence", "Healthcare Systems"],
  },
  {
    title: "AI Agents Development",
    description:
      "Designing and building autonomous AI agents capable of performing complex tasks such as analysis, automation, and decision support.",
    tags: ["LLM Systems", "Workflow Automation", "AI Productivity Tools"],
  },
  {
    title: "ESP32 Smart System",
    description:
      "Developing IoT solutions using ESP32 microcontrollers combined with mobile applications for smart control and automation.",
    tags: ["IoT", "Embedded Systems", "Mobile Integration"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 md:py-32 section-dark">
    <div className="container mx-auto px-6">
      <SectionReveal>
        <p className="text-sm font-body tracking-widest uppercase text-primary mb-4">Projects</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">
          What I'm <span className="text-gradient">Building</span>
        </h2>
      </SectionReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <SectionReveal key={i} delay={i * 0.12}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-xl p-8 h-full flex flex-col hover-lift"
            >
              <h3 className="font-display text-xl font-semibold mb-4 text-foreground">{p.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-body px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
