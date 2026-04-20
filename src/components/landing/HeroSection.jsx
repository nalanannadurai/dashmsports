import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-background to-background" />
      </div>

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: 'radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="inline-flex items-center gap-2 border border-border/60 rounded-full px-4 py-1.5 mb-8 bg-card/60">
            <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
            <span className="text-xs text-muted-foreground tracking-[0.15em] uppercase">Sports Business Solutions — Powered by Dash AI</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-5xl mx-auto"
        >
          Custom Solutions for the{' '}
          <span className="italic font-normal" style={{ fontFamily: 'var(--font-serif)' }}>Full Sports Business Ecosystem.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Dashm Sports delivers custom Finance, Operations, and Technology solutions for sports organizations at every level — powered by <span className="text-foreground font-medium">Dash AI</span>, our intelligent problem-solving engine.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-dash-ai', { detail: { tier: '' } }))}
            className="group bg-primary text-primary-foreground px-8 py-4 rounded-sm font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 flex items-center gap-2"
          >
            Start with Dash AI
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.querySelector('#solutions')?.scrollIntoView({ behavior: 'smooth' })}
            className="group border border-border text-foreground px-8 py-4 rounded-sm font-semibold text-sm tracking-wide hover:bg-secondary transition-all duration-300"
          >
            Explore Solutions
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}