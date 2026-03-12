import SectionReveal from "./SectionReveal";

const ExperienceSection = () => (
  <section id="experience" className="py-24 md:py-32 section-dark">
    <div className="container mx-auto px-6 max-w-4xl">
      <SectionReveal>
        <p className="text-sm font-body tracking-widest uppercase text-primary mb-4">Experience</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">
          What I <span className="text-gradient">Do</span>
        </h2>
      </SectionReveal>

      <div className="space-y-12">
        <SectionReveal delay={0.1}>
          <div className="glass-card rounded-xl p-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Freelance Product Developer
            </h3>
            <div className="flex flex-wrap gap-3 mb-4">
              {["UI/UX Design", "Web Development", "Digital Product Consulting"].map((t) => (
                <span key={t} className="text-xs font-body px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {t}
                </span>
              ))}
            </div>
            <p className="font-body text-muted-foreground leading-relaxed">
              Helping businesses bring their digital ideas to life through end-to-end product development, 
              from initial design concepts to production-ready applications.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="glass-card rounded-xl p-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-1">
              Founder — Connectus.top
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mt-4">
              Building a platform to connect businesses with digital services such as web development, 
              design, and digital marketing. Focused on making professional digital services accessible 
              to growing businesses.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <div className="glass-card rounded-xl p-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Financial Markets — 6 Years
            </h3>
            <div className="flex flex-wrap gap-3 mb-4">
              {["Investing", "Trading", "Portfolio Management"].map((t) => (
                <span key={t} className="text-xs font-body px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {t}
                </span>
              ))}
            </div>
            <p className="font-body text-muted-foreground leading-relaxed">
              4 years of hands-on experience in financial markets including investing, trading, and 
              portfolio management — enabling a strong blend of technical, business, and financial thinking.
            </p>
          </div>
        </SectionReveal>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
