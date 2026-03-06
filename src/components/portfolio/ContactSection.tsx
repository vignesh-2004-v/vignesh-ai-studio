import { Mail, Github, Linkedin } from "lucide-react";
import SectionReveal from "./SectionReveal";

const ContactSection = () => (
  <section id="contact" className="py-24 md:py-32 section-light">
    <div className="container mx-auto px-6 max-w-3xl text-center">
      <SectionReveal>
        <p className="text-sm font-body tracking-widest uppercase text-primary mb-4">Contact</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-12">
          If you're building something interesting, I'd love to collaborate.
        </p>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <div className="flex justify-center gap-6">
          {[
            { icon: Mail, label: "Email", href: "mailto:vigneshvicky0928@gmail.com" },
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vignesh-v-712571250/" },
            { icon: Github, label: "GitHub", href: "https://github.com/vignesh-2004-v" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-body text-sm hover:bg-secondary hover:border-primary/30 transition-all duration-200"
            >
              <Icon size={18} />
              {label}
            </a>
          ))}
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default ContactSection;
