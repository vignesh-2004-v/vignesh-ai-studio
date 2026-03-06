import SectionReveal from "./SectionReveal";

const highlights = [
  "Building AI-powered systems",
  "Developing web applications and product interfaces",
  "Working with blockchain technologies",
  "Designing user-centered digital experiences",
  "Exploring startup opportunities and financial systems",
];

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32 section-light">
    <div className="container mx-auto px-6 max-w-4xl">
      <SectionReveal>
        <p className="text-sm font-body tracking-widest uppercase text-primary mb-4">About Me</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
          Building at the intersection of{" "}
          <span className="text-gradient">AI, design & business</span>.
        </h2>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <p className="text-lg font-body text-muted-foreground leading-relaxed mb-8">
          I am a final-year technology student passionate about building intelligent systems and
          impactful digital products. My work sits at the intersection of AI, product design, and
          business thinking. I design and develop solutions that are not only technically strong but
          also commercially viable.
        </p>
      </SectionReveal>

      <SectionReveal delay={0.25}>
        <div className="space-y-3">
          {highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span className="font-body text-secondary-foreground">{h}</span>
            </div>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal delay={0.35}>
        <p className="mt-8 text-lg font-body text-muted-foreground leading-relaxed">
          Currently I am focused on building AI-powered tools that help businesses make better
          decisions.
        </p>
      </SectionReveal>
    </div>
  </section>
);

export default AboutSection;
