import { Phone, Instagram, Facebook } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";

export default function Footer() {
  const quickLinks = [
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-deep-charcoal text-pure-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2 animate-slide-in-left">
            <div className="font-bold text-3xl mb-4 animate-slide-up">
              <span className="text-soft-stone bg-gradient-to-r from-soft-stone via-warm-accent to-soft-stone bg-clip-text text-transparent drop-shadow-lg">
                Vaarahi
              </span>
              <span className="ml-2 text-pure-white">Interiors</span>
            </div>
            <p className="text-pure-white/70 mb-6 max-w-md animate-fade-in animate-delay-200">
              Transforming spaces with premium interior design solutions. Led by experienced professionals committed to quality and excellence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="tel:6304446003" 
                className="bg-soft-stone/20 hover:bg-soft-stone p-3 rounded-lg transition-all duration-300 hover:scale-110 animate-scale-up animate-delay-300"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-soft-stone/20 hover:bg-soft-stone p-3 rounded-lg transition-all duration-300 hover:scale-110 animate-scale-up animate-delay-400"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-soft-stone/20 hover:bg-soft-stone p-3 rounded-lg transition-all duration-300 hover:scale-110 animate-scale-up animate-delay-500"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="animate-slide-up animate-delay-200">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button 
                  key={link.id}
                  onClick={() => smoothScrollTo(link.id)}
                  className={`block text-pure-white/70 hover:text-soft-stone transition-all duration-300 text-left hover:translate-x-2 animate-slide-in-left animate-delay-${(index + 3) * 100}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="animate-slide-up animate-delay-300">
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 animate-slide-in-left animate-delay-400 hover:bg-soft-stone/10 p-2 rounded-lg transition-all duration-300">
                <Phone className="w-5 h-5 text-soft-stone animate-bounce-in" />
                <div>
                  <div className="text-sm text-pure-white/70">Phone Numbers</div>
                  <div className="font-medium">6304446003</div>
                  <div className="font-medium">9955998865</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 animate-slide-in-left animate-delay-500 hover:bg-soft-stone/10 p-2 rounded-lg transition-all duration-300">
                <div className="w-5 h-5 flex items-center justify-center">
                  <div className="w-3 h-3 bg-soft-stone rounded-full animate-pulse"></div>
                </div>
                <div>
                  <div className="text-sm text-pure-white/70">Business Hours</div>
                  <div className="font-medium">Mon - Sat: 9AM - 7PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-pure-white/20 mt-12 pt-8 text-center animate-fade-in animate-delay-600">
          <p className="text-pure-white/70">
            © 2024 Vaarahi Interiors. All rights reserved. Managed by{" "}
            <span className="text-soft-stone hover:text-warm-accent transition-colors cursor-pointer">Manishkumar</span> &{" "}
            <span className="text-soft-stone hover:text-warm-accent transition-colors cursor-pointer">Harsha Goud</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
