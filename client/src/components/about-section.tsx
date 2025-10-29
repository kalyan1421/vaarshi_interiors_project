import AnimatedCounter from "@/components/animated-counter";
import { smoothScrollTo } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { end: 120, suffix: "+", label: "Projects Completed" },
    { end: 90, suffix: "+", label: "Happy Clients" },
    { end: 7, suffix: "+", label: "Years Experience" },
    { end: 12, suffix: "+", label: "Cities Across India" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 fade-in-scroll">
          <h2 className="section-title">About Velanspaces Studio</h2>
          <p className="about-intro">
            At Velanspaces Studio, we believe every space tells a story. Founded and led by <strong>Manish</strong>,
            our mission is to blend creativity with precision — designing interiors that balance beauty, function, and innovation.
            From concept to completion, we turn visions into living realities that inspire and endure.
          </p>
        </div>

        {/* Founder Section - Side by Side */}
        <div className="founder-section fade-in-scroll">
          <div className="founder-photo">
            <img 
              src="/assets/images/founder-manish.jpg" 
              alt="Founder Manish - Velanspaces Studio"
            />
          </div>
          <div className="founder-bio">
            <h3>Manish</h3>
            <p className="title">Founder & Creative Director</p>
            <blockquote>
              "Design isn't just about style — it's about creating emotions, experiences, and timeless value."
            </blockquote>
            <p className="bio-text">
              Manish leads Velanspaces with over 7 years of experience in interior design and architectural innovation.
              His vision has shaped homes, offices, and commercial spaces across 12 cities in India, known for their
              warmth, balance, and enduring craftsmanship.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="about-stats fade-in-scroll">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="about-cta fade-in-scroll">
          <Button 
            className="btn-consultation shimmer-button"
            onClick={() => smoothScrollTo('contact')}
          >
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
