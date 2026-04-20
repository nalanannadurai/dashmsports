import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { Eye, Database, Compass, Layers, Shield } from 'lucide-react';

const differentiators = [
  {
    icon: Eye,
    title: 'Zero Template Consulting',
    desc: 'We don\'t have a playbook we hand to every client. Every engagement begins from scratch — shaped entirely by your organization\'s unique context, goals, and environment.',
  },
  {
    icon: Database,
    title: 'Fully Customized Solutions',
    desc: 'Dash builds what you actually need — whether it exists in our solution library or requires something entirely new. No preset packages. No forced fits.',
  },
  {
    icon: Compass,
    title: 'Tailored to Your Exact Reality',
    desc: 'We incorporate your culture, constraints, staff dynamics, competitive landscape, and timeline. The solution is built around your world, not a generalized sports industry framework.',
  },
  {
    icon: Layers,
    title: 'AI-Powered Precision',
    desc: 'Dash AI diagnoses your situation before any solution is recommended — ensuring what we build is grounded in a deep understanding of your actual challenge, not a surface-level assumption.',
  },
  {
    icon: Shield,
    title: 'Full Ecosystem Coverage',
    desc: 'From recreational parks and high school programs to professional franchises — we work across the entire sports business ecosystem and adapt our approach accordingly.',
  },
];

export default function WhyDashSection() {
  return (
    <section id="why-dash" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Why Dash"
          title="Custom solutions. Not consulting packages."
          description="The sports industry is too diverse and too competitive for one-size-fits-all advice. Dash delivers precision-built solutions — tailored to your organization, your challenges, and your goals."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((d, i) => (
            <AnimatedSection key={d.title} delay={i * 0.08}>
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <d.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{d.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}