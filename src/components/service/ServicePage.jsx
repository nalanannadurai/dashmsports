import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../landing/AnimatedSection';

const fade = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } };

function openModal(service) {
  window.dispatchEvent(new CustomEvent('open-consultation', { detail: { service } }));
}

export default function ServicePage({ title, subheadline, description, problems, howWeWork, deliverables, idealClients, serviceName }) {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div {...fade} className="flex items-center gap-2 text-xs text-muted-foreground mb-10">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/#services" className="hover:text-foreground transition-colors">Services</Link>
            <span>/</span>
            <span className="text-foreground">{title}</span>
          </motion.div>

          <motion.div {...fade} transition={{ duration: 0.7, delay: 0.05 }}>
            <span className="text-xs text-primary tracking-[0.2em] uppercase font-semibold">Advisory Service</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl">
              {title}
            </h1>
            <p className="mt-5 text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => openModal(serviceName)}
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to="/#services"
                className="inline-flex items-center gap-2 border border-border/60 text-muted-foreground px-8 py-4 rounded-sm font-medium text-sm hover:text-foreground hover:border-border transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What This Service Is */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <span className="text-xs text-primary tracking-[0.2em] uppercase font-semibold">The Service</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight leading-tight">What This Service Is</h2>
              <div className="mt-5 text-muted-foreground leading-relaxed space-y-4">
                {description.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-card border border-border/50 rounded-lg p-8">
                <h3 className="text-xs text-muted-foreground uppercase tracking-wider mb-5">Ideal Clients</h3>
                <ul className="space-y-3">
                  {idealClients.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-xs text-primary tracking-[0.2em] uppercase font-semibold">Pain Points</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">What Problems We Solve</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="h-full bg-card border border-border/50 rounded-lg p-6 hover:border-border hover:bg-card/80 transition-all duration-300">
                  <div className="w-1 h-6 bg-primary rounded-full mb-4" />
                  <p className="text-sm text-foreground leading-relaxed">{p}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-14">
            <span className="text-xs text-primary tracking-[0.2em] uppercase font-semibold">Methodology</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">How We Work</h2>
          </AnimatedSection>
          <div className="space-y-4 max-w-3xl">
            {howWeWork.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="flex items-start gap-5 p-5 bg-card border border-border/50 rounded-lg hover:border-border transition-all duration-300">
                  <div className="shrink-0 w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-sm text-foreground leading-relaxed pt-1">{step}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-xs text-primary tracking-[0.2em] uppercase font-semibold">Outputs</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">What Clients Receive</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {deliverables.map((d, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="h-full bg-card border border-border/50 rounded-lg p-5 flex items-start gap-3 hover:border-border transition-all duration-300">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{d}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="relative overflow-hidden rounded-xl border border-border/50 bg-card p-12 md:p-20 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <span className="text-xs text-primary tracking-[0.2em] uppercase font-semibold">Ready to Begin?</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mx-auto leading-[1.1]">
                Bring clarity to high-stakes decisions.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed">
                Schedule a consultation with our team to discuss how this service applies to your organization.
              </p>
              <button
                onClick={() => openModal(serviceName)}
                className="group mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}