import { useState, useEffect } from "react";
import { smoothScrollTo } from "@/lib/utils";
import { Phone, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    smoothScrollTo(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect border-b border-soft-stone/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="font-bold text-2xl text-deep-charcoal animate-slide-in-left">
            <span className="text-soft-stone bg-gradient-to-r from-soft-stone to-warm-accent bg-clip-text text-transparent animate-pulse">Velanspaces</span> Interior and constructions
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="hover:text-soft-stone transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="tel:6304446003" 
              className="hidden sm:flex items-center space-x-2 text-soft-stone hover:text-warm-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">6304446003</span>
            </a>
            <button 
              className="md:hidden text-deep-charcoal"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-pure-white border-t border-soft-stone/20 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left py-2 px-4 hover:bg-soft-stone/10 hover:text-soft-stone transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a 
              href="tel:6304446003" 
              className="flex items-center space-x-2 py-2 px-4 text-soft-stone sm:hidden"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">6304446003</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
