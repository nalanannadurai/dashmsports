import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { Building2, Users, User, ArrowRight } from 'lucide-react';

const tiers = [
  {
    icon: Building2,
    tier: 'Finance',
    headline: 'Custom financial solutions built for the economics of sports.',
    solutions: [
      'Financial auditing & reporting',
      'Cost analysis & reduction planning',
      'Budgeting & multi-year forecasting',
      'Revenue strategy & monetization',
      'Contract & grant financial review',
    ],
  },
  {
    icon: Users,
    tier: 'Operations',
    headline: 'Operational systems designed for high-performing sports organizations.',
    solutions: [
      'Logistics planning & scheduling',
      'Front office & human capital support',
      'Internal workflow optimization',
      'Facilities & vendor management',
      'Compliance & governance frameworks',
    ],
  },
  {
    icon: User,
    tier: 'Technology',
    headline: 'AI-enabled technology built to modernize sports business.',
    solutions: [
      'AI tools & workflow automation',
      'Analytics dashboards & BI platforms',
      'Performance metrics & tracking systems',
      'CRM & data infrastructure',
      'Digital transformation planning',
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Solution Areas"
          title="Finance. Operations. Technology."
          description="Dash builds custom solutions across three core areas. Every engagement is tailored — these categories are starting points, not fixed packages."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <AnimatedSection key={t.tier} delay={i * 0.1}>
              <div className="group h-full p-7 rounded-lg border border-border/50 bg-card/60 hover:bg-card hover:border-primary/30 transition-all duration-500">
                <div className="w-11 h-11 rounded-sm bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <t.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-xs text-primary tracking-[0.18em] uppercase font-semibold mb-2">{t.tier}</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{t.headline}</p>
                <ul className="space-y-2">
                  {t.solutions.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <ArrowRight className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-border/30">
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-dash-ai', { detail: { tier: t.tier } }))}
                    className="text-xs text-primary font-semibold tracking-wide flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300"
                  >
                    Explore with Dash AI <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10 text-center">
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Not sure which area fits your challenge? <span className="text-foreground font-medium">Dash AI is built for exactly that.</span> Start a conversation and our intelligent engine will identify the right solution path — or build a custom one.
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-dash-ai', { detail: { tier: '' } }))}
            className="mt-5 inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-sm font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300"
          >
            Start with Dash AI <ArrowRight className="w-4 h-4" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}