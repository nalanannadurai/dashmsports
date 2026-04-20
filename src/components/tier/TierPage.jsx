import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../landing/AnimatedSection';

const fade = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } };

function openDashAI(tier) {
  window.dispatchEvent(new CustomEvent('open-dash-ai', { detail: { tier } }));
}

export default function TierPage({ tier, tagline, headline, description, forWho, challenges, howDashBuilds, mockupLabel }) {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-56 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fade}>
            <span className="text-xs text-primary tracking-[0.2em] uppercase font-semibold">{tier} Tier — Dash Sports Solutions</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] max-w-4xl">
              {headline}
            </h1>
            <p className="mt-5 text-xl text-muted-foreground max-w-2xl leading-relaxed">{tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => openDashAI(tier)}
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300"
              >
                Start with Dash AI
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <span className="text-xs text-primary tracking-[0.2em] uppercase font-semibold">Who This Is For</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight leading-tight">Built for {tier.toLowerCase()} leaders navigating real challenges.</h2>
              <div className="mt-5 space-y-4">
                {description.map((p, i) => <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>)}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-card border border-border/50 rounded-lg p-8">
                <h3 className="text-xs text-muted-foreground uppercase tracking-wider mb-5">Ideal For</h3>
                <ul className="space-y-3">
                  {forWho.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-xs text-primary tracking-[0.2em] uppercase font-semibold">Common Challenges</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">What brings clients to Dash</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {challenges.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="h-full bg-card border border-border/50 rounded-lg p-6 hover:border-border hover:bg-card/80 transition-all duration-300">
                  <div className="w-1 h-6 bg-primary rounded-full mb-4" />
                  <p className="text-sm text-foreground leading-relaxed">{c}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How Dash Builds */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-14">
            <span className="text-xs text-primary tracking-[0.2em] uppercase font-semibold">How Dash Builds</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Precision-built, not pre-packaged.</h2>
          </AnimatedSection>
          <div className="space-y-4 max-w-3xl">
            {howDashBuilds.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="flex items-start gap-5 p-5 bg-card border border-border/50 rounded-lg hover:border-border transition-all duration-300">
                  <div className="shrink-0 w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i + 1}</div>
                  <p className="text-sm text-foreground leading-relaxed pt-1">{step}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mockup Placeholder Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-xs text-primary tracking-[0.2em] uppercase font-semibold">Solution Concepts</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">{mockupLabel}</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto text-sm">Real examples of Dash-built solutions for this tier. Updated as new concepts are developed.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(n => (
              <AnimatedSection key={n} delay={n * 0.08}>
                <div className="h-64 rounded-lg border border-border/40 border-dashed bg-card/30 flex flex-col items-center justify-center gap-3 hover:border-primary/30 hover:bg-card/50 transition-all duration-300">
                  <div className="w-10 h-10 rounded-sm border border-border/50 bg-secondary/40 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground font-bold">0{n}</span>
                  </div>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase">Solution Mockup</p>
                  <p className="text-[10px] text-muted-foreground/40">Placeholder — content coming soon</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="relative overflow-hidden rounded-xl border border-border/50 bg-card p-12 md:p-20 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <span className="text-xs text-primary tracking-[0.2em] uppercase font-semibold">Start with Dash AI</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mx-auto leading-[1.1]">
                Your custom solution starts with a conversation.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed">
                Dash AI diagnoses your needs and builds a precision-tailored solution for your {tier.toLowerCase()}. No templates. No packages. Just what you actually need.
              </p>
              <button
                onClick={() => openDashAI(tier)}
                className="group mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300"
              >
                Start with Dash AI
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}