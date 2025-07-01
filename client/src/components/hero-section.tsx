import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center hero-pattern pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-poppins text-5xl md:text-6xl font-bold text-deep-charcoal leading-tight">
                Premium Interior
                <span className="text-soft-stone block">Design Solutions</span>
              </h1>
              <p className="text-xl text-deep-charcoal/80 max-w-lg">
                Transforming spaces into extraordinary experiences with modern minimalist design and uncompromising quality.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-soft-stone text-pure-white hover:bg-warm-accent"
                onClick={() => scrollToSection('contact')}
              >
                Get Free Quotation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-soft-stone text-soft-stone hover:bg-soft-stone hover:text-pure-white"
                onClick={() => scrollToSection('portfolio')}
              >
                View Portfolio
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="font-poppins text-3xl font-bold text-soft-stone">13</div>
                <div className="text-sm text-deep-charcoal/70">Residential Projects</div>
              </div>
              <div className="text-center">
                <div className="font-poppins text-3xl font-bold text-soft-stone">4</div>
                <div className="text-sm text-deep-charcoal/70">Modular Projects</div>
              </div>
              <div className="text-center">
                <div className="font-poppins text-3xl font-bold text-soft-stone">100%</div>
                <div className="text-sm text-deep-charcoal/70">Quality Assured</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern minimalist bedroom interior" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-soft-stone text-pure-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8" />
                <div>
                  <div className="font-semibold">Premium Quality</div>
                  <div className="text-sm opacity-90">Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
