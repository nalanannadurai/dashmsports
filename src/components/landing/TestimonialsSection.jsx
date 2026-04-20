import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "APEX brought a level of objectivity and rigor we hadn't experienced before. Their recommendations reshaped how our front office evaluates talent and allocates resources.",
    name: 'Director of Operations',
    org: 'Professional Sports Franchise',
  },
  {
    quote: "The strategic review was a turning point for our department. APEX helped us align leadership, clarify priorities, and build a roadmap we could actually execute.",
    name: 'Athletic Director',
    org: 'Division I Athletic Program',
  },
  {
    quote: "Working with APEX felt like having an elite advisory team embedded in our organization. Data-driven, no-nonsense, and completely tailored to our situation.",
    name: 'General Manager',
    org: 'Expansion Sports Organization',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What our partners say"
          description="Placeholder testimonials representing the type of feedback we receive from clients across the sports industry."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="h-full flex flex-col p-7 rounded-lg border border-border/50 bg-card/60">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground/90 leading-relaxed flex-1 italic">"{t.quote}"</p>
                <div className="mt-6 pt-4 border-t border-border/40">
                  <div className="font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.org}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}