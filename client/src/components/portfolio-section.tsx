import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Lightbox from "./lightbox";
import masterBedroomImg from "@assets/M.BED ROOM-2_1751394515177.jpg";
import masterBedroom2Img from "@assets/M.BED ROOM-3_1751394515177.jpg";
import poojaRoomImg from "@assets/pooja-1_1751394515177.jpg";
import tvUnitImg from "@assets/t.v unit-1_1751394515178.jpg";

export default function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioItems = [
    {
      src: masterBedroomImg,
      alt: "Master bedroom with contemporary design",
      title: "Master Bedroom Design",
      category: "Contemporary & Sophisticated"
    },
    {
      src: tvUnitImg,
      alt: "Modern TV unit with marble accent",
      title: "TV Unit Design",
      category: "Modern & Functional"
    },
    {
      src: poojaRoomImg,
      alt: "Traditional pooja room with modern design",
      title: "Pooja Room Design",
      category: "Traditional & Sacred"
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Modular kitchen with contemporary design",
      title: "Modular Kitchen",
      category: "Sleek & Efficient"
    },
    {
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Luxury living room with modern design",
      title: "Living Room Design",
      category: "Luxury & Comfort"
    },
    {
      src: masterBedroom2Img,
      alt: "Walk-in wardrobe with modern storage",
      title: "Wardrobe Design",
      category: "Organized & Stylish"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-soft-stone/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-bold text-4xl text-deep-charcoal mb-4 animate-fade-in">Our Portfolio</h2>
          <p className="text-xl text-deep-charcoal/80 max-w-3xl mx-auto animate-slide-up animate-delay-200">
            Explore our carefully curated collection of residential and modular interior design projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift cursor-pointer animate-scale-up transition-all duration-500 hover:shadow-2xl hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedImage(item.src)}
            >
              <img 
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 portfolio-overlay opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="text-center text-pure-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Search className="w-8 h-8 mb-2 mx-auto animate-bounce-in" />
                  <h3 className="font-semibold text-lg animate-slide-up">{item.title}</h3>
                  <p className="text-sm opacity-90 animate-fade-in animate-delay-100">{item.category}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-soft-stone/20 backdrop-blur-sm rounded-full p-2 animate-scale-up">
                  <Search className="w-4 h-4 text-pure-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-slide-up animate-delay-500">
          <Button className="bg-soft-stone text-pure-white px-8 py-4 rounded-lg font-semibold hover:bg-warm-accent transition-all duration-300 hover:scale-105 hover:shadow-lg animate-bounce-in">
            View All Projects
          </Button>
        </div>
      </div>

      <Lightbox 
        src={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </section>
  );
}
