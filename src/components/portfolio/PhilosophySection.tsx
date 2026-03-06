import SectionReveal from "./SectionReveal";

const PhilosophySection = () => (
  <section className="py-24 md:py-32 section-dark">
    <div className="container mx-auto px-6 max-w-3xl text-center">
      <SectionReveal>
        <p className="text-sm font-body tracking-widest uppercase text-primary mb-4">Philosophy</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">My Approach</h2>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed mb-6">
          Technology should not only be powerful —{" "}
          <span className="text-gradient">it should be meaningful</span>.
        </p>
      </SectionReveal>

      <SectionReveal delay={0.25}>
        <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
          I believe the best products come from the intersection of Technology, Design, and Business
          understanding. My goal is to build systems that create real value for people.
        </p>
      </SectionReveal>

      <SectionReveal delay={0.35}>
        <div className="flex justify-center gap-8 md:gap-16">
          {["Technology", "Design", "Business"].map((w) => (
            <span key={w} className="font-display text-sm md:text-base text-primary font-medium tracking-wide">
              {w}
            </span>
          ))}
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default PhilosophySection;
