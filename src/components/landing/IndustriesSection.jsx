import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { Trophy, GraduationCap, Rocket, Crown } from 'lucide-react';

const industries = [
  {
    icon: Trophy,
    title: 'Professional Sports Teams',
    desc: 'Front office strategy, analytics integration, and organizational performance for pro franchises across leagues.',
  },
  {
    icon: GraduationCap,
    title: 'College Athletic Departments',
    desc: 'Strategic planning, compliance alignment, and competitive positioning for Division I, II, and III programs.',
  },
  {
    icon: Rocket,
    title: 'Emerging Sports Organizations',
    desc: 'Foundation-building for new leagues, expansion teams, and sports ventures navigating early-stage growth.',
  },
  {
    icon: Crown,
    title: 'Performance-Focused Leadership',
    desc: 'Executive advisory for GMs, ADs, and ownership groups committed to building winning cultures.',
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Who We Serve"
          title="Built for the world of competitive sports"
          description="From professional franchises to collegiate programs, we serve organizations where performance is the standard."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.title} delay={i * 0.1}>
              <div className="group relative p-7 rounded-lg border border-border/50 bg-card/60 hover:bg-card hover:border-primary/30 transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <ind.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{ind.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}