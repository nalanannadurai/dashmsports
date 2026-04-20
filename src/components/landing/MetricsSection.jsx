import AnimatedSection from './AnimatedSection';

const metrics = [
  { value: '25+', label: 'Strategic Reviews Completed' },
  { value: '10+', label: 'Athletic Partners Served' },
  { value: '100%', label: 'Tailored Engagements' },
  { value: '50+', label: 'Actionable Recommendations Delivered' },
];

export default function MetricsSection() {
  return (
    <section className="py-20 md:py-24 bg-secondary/30 border-y border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((m, i) => (
            <AnimatedSection key={m.label} delay={i * 0.1} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary tracking-tight">{m.value}</div>
              <div className="mt-2 text-sm text-muted-foreground tracking-wide">{m.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}