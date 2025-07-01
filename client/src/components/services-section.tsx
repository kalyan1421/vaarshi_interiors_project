import { Home, Box, Calculator, Tv, Heart, Bed } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Complete home interiors including living rooms, bedrooms, kitchens, and bathrooms with modern minimalist aesthetics.",
      badge: "13 Projects Completed",
      featured: false
    },
    {
      icon: Box,
      title: "Modular Solutions",
      description: "Custom modular furniture and storage solutions designed for optimal functionality and contemporary style.",
      badge: "4 Projects Completed",
      featured: false
    },
    {
      icon: Calculator,
      title: "Free Quotations",
      description: "Get detailed, transparent pricing for your project with no hidden costs or obligations. Professional consultation included.",
      badge: "100% Free Service",
      featured: true
    },
    {
      icon: Tv,
      title: "Entertainment Units",
      description: "Custom TV units and entertainment centers with integrated storage and cable management solutions.",
      badge: "Custom Designs",
      featured: false
    },
    {
      icon: Heart,
      title: "Pooja Rooms",
      description: "Sacred spaces designed with traditional elements and modern aesthetics for spiritual harmony.",
      badge: "Traditional & Modern",
      featured: false
    },
    {
      icon: Bed,
      title: "Master Bedrooms",
      description: "Luxurious bedroom designs with integrated wardrobes, lighting, and sophisticated color schemes.",
      badge: "Premium Quality",
      featured: false
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-bold text-4xl text-deep-charcoal mb-4 animate-fade-in">Our Services</h2>
          <p className="text-xl text-deep-charcoal/80 max-w-3xl mx-auto animate-slide-up animate-delay-200">
            Comprehensive interior design solutions tailored to your unique vision and lifestyle needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`hover-lift border transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-scale-up ${
                service.featured 
                  ? 'bg-gradient-to-br from-soft-stone to-warm-accent text-pure-white border-soft-stone animate-pulse' 
                  : 'bg-pure-white border-soft-stone/10 hover:border-soft-stone/30'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 hover:scale-110 animate-bounce-in ${
                  service.featured 
                    ? 'bg-pure-white/20' 
                    : 'bg-soft-stone'
                }`} style={{ animationDelay: `${(index + 1) * 150}ms` }}>
                  <service.icon className={`w-8 h-8 ${
                    service.featured ? 'text-pure-white' : 'text-pure-white'
                  }`} />
                </div>
                <h3 className={`font-semibold text-xl mb-4 animate-slide-up ${
                  service.featured ? 'text-pure-white' : 'text-deep-charcoal'
                }`} style={{ animationDelay: `${(index + 2) * 100}ms` }}>
                  {service.title}
                </h3>
                <p className={`mb-6 animate-fade-in ${
                  service.featured ? 'text-pure-white/90' : 'text-deep-charcoal/70'
                }`} style={{ animationDelay: `${(index + 3) * 100}ms` }}>
                  {service.description}
                </p>
                <div className={`font-semibold animate-slide-up ${
                  service.featured ? 'text-pure-white' : 'text-soft-stone'
                }`} style={{ animationDelay: `${(index + 4) * 100}ms` }}>
                  {service.badge}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
