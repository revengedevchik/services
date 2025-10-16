import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AnimationShowcase from '@/components/AnimationShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AnimationShowcase />
      <TestimonialsSection />
    </main>
  );
}
