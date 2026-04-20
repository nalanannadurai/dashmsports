import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import ServicesSection from '../components/landing/ServicesSection';
import MetricsSection from '../components/landing/MetricsSection';
import WhyDashSection from '../components/landing/WhyApexSection';
import IndustriesSection from '../components/landing/IndustriesSection';
import ProcessSection from '../components/landing/ProcessSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import CTASection from '../components/landing/CTASection';
import ContactSection from '../components/landing/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MetricsSection />
      <WhyDashSection />
      <IndustriesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </>
  );
}