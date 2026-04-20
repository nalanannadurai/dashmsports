import AnimatedSection from './AnimatedSection';

export default function SectionHeading({ label, title, description }) {
  return (
    <AnimatedSection className="text-center mb-16">
      {label && (
        <span className="text-xs text-primary tracking-[0.2em] uppercase font-semibold">{label}</span>
      )}
      <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
      )}
    </AnimatedSection>
  );
}