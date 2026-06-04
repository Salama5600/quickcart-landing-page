import { useScrollReveal } from '../hooks/useScrollReveal';
import SEO from '../components/seo/SEO';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import CategoriesSection from '../components/home/CategoriesSection';
import FeaturedProductsSection from '../components/home/FeaturedProductsSection';
import BenefitsSection from '../components/home/BenefitsSection';
import StatsSection from '../components/home/StatsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FaqSection from '../components/home/FaqSection';
import NewsletterSection from '../components/home/NewsletterSection';
import CtaSection from '../components/home/CtaSection';

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GroceryStore',
  name: 'FreshCart',
  description:
    'Fast grocery delivery with fresh produce, dairy, bakery, and household essentials.',
  url: 'https://freshcart.example.com',
  priceRange: '$$',
};

export default function HomePage() {
  const mainRef = useScrollReveal();

  return (
    <>
      <SEO
        title="FreshCart | Fast Grocery Delivery"
        description="FreshCart delivers fresh groceries to your door in minutes. Shop smarter with fast delivery, curated quality, and transparent pricing."
        path="/"
        jsonLd={homeJsonLd}
      />
      <main ref={mainRef}>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <CategoriesSection />
        <FeaturedProductsSection />
        <BenefitsSection />
        <StatsSection />
        <TestimonialsSection />
        <FaqSection />
        <NewsletterSection />
        <CtaSection />
      </main>
    </>
  );
}
