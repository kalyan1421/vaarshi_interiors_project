import { UserCheck, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const whyChooseUsItems = [
    {
      title: "Complete Free Quotations",
      description: "No hidden costs, transparent pricing for all our services"
    },
    {
      title: "Quality Craftsmanship",
      description: "Premium materials and meticulous attention to detail"
    },
    {
      title: "Proven Track Record",
      description: "17+ successful projects delivered with excellence"
    }
  ];

  return (
    <section id="about" className="py-20 bg-soft-stone/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-bold text-4xl text-deep-charcoal mb-4 animate-fade-in">About Vaarahi Interiors</h2>
          <p className="text-xl text-deep-charcoal/80 max-w-3xl mx-auto animate-slide-up animate-delay-200">
            Led by visionary designers, we specialize in creating sophisticated spaces that blend modern aesthetics with functional excellence.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h3 className="font-semibold text-2xl text-deep-charcoal animate-slide-up">Our Leadership</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="hover-lift animate-scale-up animate-delay-100 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-soft-stone rounded-full flex items-center justify-center mb-4 animate-bounce-in animate-delay-200">
                      <UserCheck className="w-6 h-6 text-pure-white" />
                    </div>
                    <h4 className="font-semibold text-lg text-deep-charcoal">Manishkumar</h4>
                    <p className="text-deep-charcoal/70">Co-Founder & Design Director</p>
                  </CardContent>
                </Card>
                <Card className="hover-lift animate-scale-up animate-delay-200 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-soft-stone rounded-full flex items-center justify-center mb-4 animate-bounce-in animate-delay-300">
                      <UserCheck className="w-6 h-6 text-pure-white" />
                    </div>
                    <h4 className="font-semibold text-lg text-deep-charcoal">Harsha Goud</h4>
                    <p className="text-deep-charcoal/70">Co-Founder & Project Manager</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="space-y-6 animate-slide-up animate-delay-300">
              <h3 className="font-semibold text-2xl text-deep-charcoal">Why Choose Us</h3>
              <div className="space-y-4">
                {whyChooseUsItems.map((item, index) => (
                  <div key={index} className={`flex items-start space-x-4 animate-slide-in-left animate-delay-${(index + 4) * 100} hover:bg-soft-stone/5 p-4 rounded-lg transition-all duration-300`}>
                    <div className="w-8 h-8 bg-soft-stone rounded-full flex items-center justify-center flex-shrink-0 mt-1 animate-scale-up">
                      <Check className="w-4 h-4 text-pure-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-deep-charcoal">{item.title}</h4>
                      <p className="text-deep-charcoal/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern minimalist living room interior" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/20 to-transparent rounded-2xl hover:from-deep-charcoal/30 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
