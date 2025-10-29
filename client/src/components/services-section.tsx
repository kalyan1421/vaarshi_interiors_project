import { Home, Briefcase, Grid, Layers, RefreshCw, Sun, Package, Lightbulb, Edit3, Compass, Wrench, Smile } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: Home,
      title: "Residential Interiors",
      description: "Transform homes into timeless spaces that reflect your personality.",
      link: "/services/residential"
    },
    {
      icon: Briefcase,
      title: "Commercial Spaces",
      description: "Functional, modern workspaces designed to enhance productivity.",
      link: "/services/commercial"
    },
    {
      icon: Grid,
      title: "Modular Kitchens",
      description: "Crafted with precision, functionality, and refined finishes.",
      link: "/services/kitchen"
    },
    {
      icon: Layers,
      title: "Custom Furniture",
      description: "Bespoke furniture designs tailored for your interiors.",
      link: "/services/furniture"
    },
    {
      icon: RefreshCw,
      title: "Renovation & Makeovers",
      description: "Redefine your existing spaces with innovation and creativity.",
      link: "/services/renovation"
    },
    {
      icon: Sun,
      title: "Sustainable Design",
      description: "Embrace eco-friendly and natural materials in every detail.",
      link: "/services/sustainable"
    },
    {
      icon: Package,
      title: "Turnkey Projects",
      description: "End-to-end design, build, and furnishing under one roof.",
      link: "/services/turnkey"
    },
    {
      icon: Lightbulb,
      title: "Lighting & Decor",
      description: "Elegant lighting plans that complete your design aesthetic.",
      link: "/services/lighting"
    }
  ];

  const processSteps = [
    { icon: Edit3, label: "Consult & Concept" },
    { icon: Compass, label: "Design & Visualize" },
    { icon: Wrench, label: "Execute & Build" },
    { icon: Smile, label: "Deliver & Delight" }
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
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 fade-in-scroll">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            From concept to creation, we craft spaces that inspire.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid fade-in-scroll">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="service-card group"
            >
              <CardContent className="service-card-content">
                <div className="service-icon-wrapper">
                  <service.icon className="service-icon" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href={service.link} className="view-more-link">
                  View More →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Process Section */}
        <div className="process-section fade-in-scroll">
          <h3 className="process-title">Our Process</h3>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-icon-wrapper">
                  <step.icon className="process-icon" />
                </div>
                <p className="process-label">{step.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Philosophy Section */}
        <div className="philosophy-section fade-in-scroll">
          <blockquote className="philosophy-quote">
            "We believe design should resonate emotionally, function practically, and age beautifully."
          </blockquote>
          <p className="philosophy-signature">– Manish, Founder & Creative Director</p>
        </div>

        {/* CTA Button */}
        <div className="services-cta fade-in-scroll">
          <Button 
            className="btn-estimate shimmer-button"
            onClick={() => window.location.href = '#contact'}
          >
            Get Free Estimate
          </Button>
        </div>
      </div>
    </section>
  );
}
