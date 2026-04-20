import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Settings, Cpu, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../components/landing/AnimatedSection';

const fade = { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } };

const categories = [
  {
    icon: TrendingUp,
    slug: 'finance',
    label: 'Finance Solutions',
    headline: 'Financial clarity for sports organizations at every level.',
    description: 'From recreational clubs to professional franchises, financial health underpins every decision. Dash builds custom financial frameworks that match your structure, scale, and goals.',
    examples: [
      { title: 'Financial Auditing', desc: 'Comprehensive review of financial statements, controls, and reporting to identify gaps and opportunities.' },
      { title: 'Cost Analysis & Reduction', desc: 'Detailed operational cost mapping to identify inefficiencies and optimize your financial footprint.' },
      { title: 'Budgeting & Forecasting Support', desc: 'Custom budget frameworks and multi-year forecasting models aligned with your program\'s goals.' },
    ],
    note: 'These are representative examples. Dash Finance Solutions span revenue strategy, contract analysis, grant support, financial infrastructure, and more.',
  },
  {
    icon: Settings,
    slug: 'operations',
    label: 'Operations Solutions',
    headline: 'Operational systems built for sports organizations that demand efficiency.',
    description: 'Operations are the backbone of every successful sports organization. Whether you\'re managing a single facility or a multi-department athletic program, Dash designs the systems that keep everything running.',
    examples: [
      { title: 'Logistics Planning', desc: 'Streamlined planning systems for travel, scheduling, events, and resource management.' },
      { title: 'Front Office & Human Capital Support', desc: 'Staff structuring, role definition, and organizational design for high-performing front offices.' },
      { title: 'Internal Workflow Optimization', desc: 'Process mapping and redesign to eliminate bottlenecks and improve execution speed across departments.' },
    ],
    note: 'Dash Operations Solutions also cover facilities management, vendor relations, compliance frameworks, and cross-departmental alignment.',
  },
  {
    icon: Cpu,
    slug: 'technology',
    label: 'Technology Solutions',
    headline: 'AI-enabled technology built specifically for sports business.',
    description: 'Technology is no longer optional in sports. From analytics platforms to AI-powered decision tools, Dash helps organizations identify, implement, and maximize the right technology for their specific environment.',
    examples: [
      { title: 'AI Tools & Automation', desc: 'Custom AI integrations and workflow automation solutions designed for sports operations and decision-making.' },
      { title: 'Analytics Dashboards', desc: 'Performance and business intelligence dashboards that surface the metrics that matter most to your organization.' },
      { title: 'Performance Metrics Systems', desc: 'Data infrastructure and tracking frameworks to measure athlete, team, and organizational performance over time.' },
    ],
    note: 'Dash Technology Solutions extend to software evaluation, data strategy, CRM implementation, reporting systems, and digital transformation planning.',
  },
];

function openDashAI() {
  window.dispatchEvent(new CustomEvent('open-dash-ai', { detail: { tier: '' } }));
}

export default function Solutions() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fade}>
            <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase font-semibold border border-border/60 rounded-full px-4 py-1.5 inline-block mb-6">Solution Areas</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] max-w-4xl">
              Finance. Operations. Technology.<br />
              <span className="italic font-normal" style={{ fontFamily: 'var(--font-serif)' }}>Custom-built for sports.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Dash organizes its capabilities across three core solution areas. The examples below represent starting points — not the full scope of what we can build for your organization.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={openDashAI}
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300"
              >
                Discover Your Solution with Dash AI
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-consultation', { detail: { service: '' } }))}
                className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-sm font-semibold text-sm tracking-wide hover:bg-secondary transition-all duration-300"
              >
                Book a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Categories */}
      {categories.map((cat, catIdx) => (
        <section key={cat.slug} className={`py-24 ${catIdx % 2 === 1 ? 'bg-secondary/30' : ''}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection className="mb-14">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-sm bg-primary flex items-center justify-center">
                  <cat.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase font-semibold">{cat.label}</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight max-w-2xl">{cat.headline}</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed">{cat.description}</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {cat.examples.map((ex, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="group h-full p-7 rounded-lg border border-border/60 bg-card hover:border-primary/30 hover:shadow-sm transition-all duration-300">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <h3 className="text-sm font-semibold text-foreground">{ex.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{ex.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.25}>
              <div className="flex items-start gap-3 p-5 bg-secondary/60 border border-border/40 rounded-lg">
                <div className="w-1 h-10 bg-primary rounded-full shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">{cat.note}</p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      {/* Dual CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection>
              <div className="h-full p-10 rounded-xl border border-primary bg-primary text-primary-foreground flex flex-col justify-between">
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase font-semibold opacity-70">Not Sure Where to Start</span>
                  <h3 className="mt-3 text-2xl font-bold leading-tight">Let Dash AI guide you to the right solution.</h3>
                  <p className="mt-3 text-sm opacity-80 leading-relaxed">
                    Dash AI is an intelligent chatbot trained on sports business challenges. Start a conversation, describe your situation, and it'll narrow down the right solution path for your organization.
                  </p>
                </div>
                <button
                  onClick={openDashAI}
                  className="group mt-8 inline-flex items-center gap-2 bg-primary-foreground text-primary px-7 py-3.5 rounded-sm font-semibold text-sm tracking-wide hover:opacity-90 transition-all duration-300 self-start"
                >
                  Start with Dash AI <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="h-full p-10 rounded-xl border border-border bg-card flex flex-col justify-between">
                <div>
                  <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase font-semibold">Know What You Need</span>
                  <h3 className="mt-3 text-2xl font-bold leading-tight">Book a consultation directly.</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    If you already understand your challenge and want to connect with a Dash strategist, skip the diagnostic and book a consultation directly to get started.
                  </p>
                </div>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-consultation', { detail: { service: '' } }))}
                  className="group mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-sm font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 self-start"
                >
                  Book a Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}