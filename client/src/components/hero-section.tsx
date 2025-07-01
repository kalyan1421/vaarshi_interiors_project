import { smoothScrollTo } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center hero-pattern pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="font-bold text-5xl md:text-6xl text-deep-charcoal leading-tight animate-slide-up">
                Premium Interior
                <span className="text-soft-stone block animate-slide-up animate-delay-200">Design Solutions</span>
              </h1>
              <p className="text-xl text-deep-charcoal/80 max-w-lg animate-fade-in animate-delay-300">
                Transforming spaces into extraordinary experiences with modern minimalist design and uncompromising quality.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-400">
              <Button 
                className="bg-soft-stone text-pure-white px-8 py-4 rounded-lg font-semibold hover:bg-warm-accent transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => smoothScrollTo('contact')}
              >
                Get Free Quotation
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-soft-stone text-soft-stone px-8 py-4 rounded-lg font-semibold hover:bg-soft-stone hover:text-pure-white transition-all duration-300 hover:scale-105"
                onClick={() => smoothScrollTo('portfolio')}
              >
                View Portfolio
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4 animate-slide-up animate-delay-500">
              <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="font-bold text-3xl text-soft-stone animate-bounce-in">13</div>
                <div className="text-sm text-deep-charcoal/70">Residential Projects</div>
              </div>
              <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer animate-delay-100">
                <div className="font-bold text-3xl text-soft-stone animate-bounce-in animate-delay-100">4</div>
                <div className="text-sm text-deep-charcoal/70">Modular Projects</div>
              </div>
              <div className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer animate-delay-200">
                <div className="font-bold text-3xl text-soft-stone animate-bounce-in animate-delay-200">100%</div>
                <div className="text-sm text-deep-charcoal/70">Quality Assured</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern minimalist bedroom interior" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-soft-stone text-pure-white p-6 rounded-xl shadow-lg animate-scale-up animate-delay-300 hover:scale-110 transition-transform duration-300">
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8" />
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
