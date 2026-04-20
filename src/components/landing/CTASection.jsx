import AnimatedSection from './AnimatedSection';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="elevate" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="relative overflow-hidden rounded-xl border border-border/50 bg-card p-12 md:p-20 text-center">
          {/* Subtle accent glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase font-semibold">Ready to Get Started</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-[1.1]">
              Every solution starts with<br />
              <span className="italic font-normal" style={{ fontFamily: 'var(--font-serif)' }}>understanding your problem.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              If you know what you need, book a consultation. If you're still figuring it out, Dash AI will help you diagnose your challenge and identify the right custom solution path.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-dash-ai', { detail: { tier: '' } }))}
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300"
              >
                Start with Dash AI
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-consultation', { detail: { service: '' } }))}
                className="group inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-sm font-semibold text-sm tracking-wide hover:bg-secondary transition-all duration-300"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}