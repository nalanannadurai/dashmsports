import AnimatedSection from './AnimatedSection';
import { TrendingUp, Settings, Cpu } from 'lucide-react';

const pillars = [
  { icon: TrendingUp, label: 'Finance Solutions', desc: 'Custom financial frameworks that match your structure, scale, and competitive goals.' },
  { icon: Settings, label: 'Operations Solutions', desc: 'Operational systems designed to eliminate friction and drive efficiency across your organization.' },
  { icon: Cpu, label: 'Technology Solutions', desc: 'AI-powered tools and analytics built to modernize how sports organizations operate and decide.' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <AnimatedSection>
            <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase font-semibold">About Dashm Sports</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              A custom solutions company built for the full sports business ecosystem.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Dashm Sports delivers Finance, Operations, and Technology solutions to sports organizations at every level — from recreational parks and high schools to college programs and professional franchises.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We don't do templates. Every engagement begins with <span className="text-foreground font-medium">Dash AI</span> — our intelligent diagnostic engine that converses with you to understand your exact challenge, then builds a precision solution tailored to your organization.
            </p>
          </AnimatedSection>

          {/* Right — solution areas */}
          <div className="space-y-5">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.label} delay={i * 0.1}>
                <div className="group flex gap-5 p-6 rounded-lg border border-border/60 bg-card hover:border-primary/20 hover:shadow-sm transition-all duration-300">
                  <div className="shrink-0 w-12 h-12 rounded-sm bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <p.icon className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{p.label}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}