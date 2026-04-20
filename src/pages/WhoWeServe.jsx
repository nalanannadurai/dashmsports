import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Building2, Trophy, User, GraduationCap, Dumbbell, Trees, Flag } from 'lucide-react';
import AnimatedSection from '../components/landing/AnimatedSection';

const fade = { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } };

const orgTypes = [
  { icon: Trophy, label: 'Professional Teams & Franchises', desc: 'Pro sports organizations navigating performance, front office, and business operations.' },
  { icon: GraduationCap, label: 'Colleges & Universities', desc: 'Athletic departments, coaching staffs, and academic-athletic programs at every level.' },
  { icon: Flag, label: 'High Schools & Prep Programs', desc: 'Athletic directors, coaching staff, and booster organizations building sustainable programs.' },
  { icon: User, label: 'Individual Athletes', desc: 'Players and competitors at any level seeking performance, career, or branding support.' },
  { icon: Dumbbell, label: 'Private Training Organizations', desc: 'Performance facilities, academies, and development programs operating in the sports space.' },
  { icon: Building2, label: 'Amateur & Club Organizations', desc: 'Amateur leagues, club teams, and recreational organizations looking to grow and operate smarter.' },
  { icon: Trees, label: 'Recreational Parks & Golf Courses', desc: 'Sports-adjacent businesses and venues that need operational and strategic support.' },
  { icon: Building2, label: 'Sports Businesses & Startups', desc: 'Companies, agencies, and ventures operating anywhere in the sports business ecosystem.' },
];

const coverageSignals = [
  'Your organization operates in the sports space in any capacity',
  'You face challenges related to finance, operations, or technology',
  'You\'re building, growing, or restructuring a sports-related business',
  'You manage athletes, staff, programs, or facilities',
  'You need a strategic partner who understands the sports industry',
  'You\'re not sure exactly what you need — but you know something has to change',
];

function openDashAI() {
  window.dispatchEvent(new CustomEvent('open-dash-ai', { detail: { tier: '' } }));
}

export default function WhoWeServe() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fade}>
            <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase font-semibold border border-border/60 rounded-full px-4 py-1.5 inline-block mb-6">Coverage & Scope</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] max-w-4xl">
              If you work in sports,<br />
              <span className="italic font-normal" style={{ fontFamily: 'var(--font-serif)' }}>we work with you.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Dash Sports Solutions serves the full sports business ecosystem — from recreational parks and golf courses to professional franchises and everything in between. If your organization exists in the sports space, you're within our coverage.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={openDashAI}
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300"
              >
                Talk to Dash AI
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-consultation', { detail: { service: '' } }))}
                className="group inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-sm font-semibold text-sm tracking-wide hover:bg-secondary transition-all duration-300"
              >
                Book a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Org Types Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-14">
            <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase font-semibold">Who We Work With</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">The full sports business ecosystem</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">Our scope spans every corner of the sports industry. Here are some of the organizations and individuals we serve — but this list is not exhaustive.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {orgTypes.map((org, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="group h-full p-6 rounded-lg border border-border/60 bg-card hover:border-primary/30 hover:shadow-sm transition-all duration-300">
                  <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                    <org.icon className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{org.label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{org.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Check */}
      <section className="py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase font-semibold">Are You Within Our Coverage?</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight leading-tight">If any of these describe you, the answer is yes.</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our coverage is intentionally broad because sports business problems don't fit into neat categories. We don't turn away challenges — we solve them.
              </p>
              <div className="mt-8">
                <button
                  onClick={openDashAI}
                  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-sm font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300"
                >
                  Let Dash AI confirm your fit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <ul className="space-y-3.5">
                {coverageSignals.map((signal, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 bg-card border border-border/50 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{signal}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Not Sure? */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="relative overflow-hidden rounded-xl border border-border bg-card p-12 md:p-16 text-center">
            <div className="relative z-10">
              <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase font-semibold">Not Sure Where You Fit?</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mx-auto leading-[1.1]">
                That's exactly what<br />
                <span className="italic font-normal" style={{ fontFamily: 'var(--font-serif)' }}>Dash AI is built for.</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed">
                Dash AI is an intelligent chatbot trained on sports business challenges across every sector. Start a conversation and it'll help you understand exactly where you fit and what solutions are available.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={openDashAI}
                  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300"
                >
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('open-consultation', { detail: { service: '' } }))}
                  className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-sm font-semibold text-sm tracking-wide hover:bg-secondary transition-all duration-300"
                >
                  Book a Consultation
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}