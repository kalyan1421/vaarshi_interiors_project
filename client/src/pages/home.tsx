import Navigation from "@/components/navigation";
import HeroSectionCinematic from "@/components/hero-section-cinematic";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-pure-white text-deep-charcoal scroll-smooth">
      <Navigation />
      <HeroSectionCinematic />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
