import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-soft-stone/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="font-poppins font-bold text-2xl text-deep-charcoal">
            <span className="text-soft-stone">Vaarahi</span> Interiors
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-deep-charcoal hover:text-soft-stone transition-colors duration-300"
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
              <Phone className="h-4 w-4" />
              <span className="font-medium">6304446003</span>
            </a>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-lg text-deep-charcoal hover:text-soft-stone transition-colors py-2"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="pt-4 border-t">
                    <a
                      href="tel:6304446003"
                      className="flex items-center space-x-2 text-soft-stone hover:text-warm-accent transition-colors py-2"
                    >
                      <Phone className="h-4 w-4" />
                      <span>6304446003</span>
                    </a>
                    <a
                      href="tel:9955998865"
                      className="flex items-center space-x-2 text-soft-stone hover:text-warm-accent transition-colors py-2"
                    >
                      <Phone className="h-4 w-4" />
                      <span>9955998865</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
