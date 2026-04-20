import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Diagnose',
    desc: 'Start with Dash AI. Our intelligent chatbot converses with you to understand your organization, challenges, and goals — building a complete picture of what you actually need before recommending anything.',
  },
  {
    number: '02',
    title: 'Design',
    desc: 'Dash identifies the right combination of Finance, Operations, or Technology solutions — or builds something entirely new. No packages. No templates. Just the right answer for your situation.',
  },
  {
    number: '03',
    title: 'Deliver',
    desc: 'Receive a precision-built solution tailored to your specific organization — with clear, actionable steps and measurable outcomes from day one.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="How It Works"
          title="Diagnose. Design. Deliver."
          description="Every engagement begins with understanding — not assumptions. Dash AI diagnoses your challenge first, then builds a solution that fits your organization exactly."
        />

        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.12}>
              <div className="group relative p-7 rounded-lg border border-border/50 bg-card/60 hover:bg-card hover:border-primary/20 transition-all duration-500 h-full">
                {/* Step number */}
                <span className="text-5xl font-black text-primary/10 group-hover:text-primary/20 transition-colors duration-500 leading-none">
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>

                {/* Connector line (not on last) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border/60" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}