import { UserCheck, Check } from "lucide-react";

export default function AboutSection() {
  const features = [
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
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl font-bold text-deep-charcoal mb-4">About Vaarahi Interiors</h2>
          <p className="text-xl text-deep-charcoal/80 max-w-3xl mx-auto">
            Led by visionary designers, we specialize in creating sophisticated spaces that blend modern aesthetics with functional excellence.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-poppins text-2xl font-semibold text-deep-charcoal">Our Leadership</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-pure-white p-6 rounded-xl shadow-lg hover-lift">
                  <div className="w-16 h-16 bg-soft-stone rounded-full flex items-center justify-center mb-4">
                    <UserCheck className="text-pure-white h-8 w-8" />
                  </div>
                  <h4 className="font-poppins font-semibold text-lg text-deep-charcoal">Manishkumar</h4>
                  <p className="text-deep-charcoal/70">Co-Founder & Design Director</p>
                </div>
                <div className="bg-pure-white p-6 rounded-xl shadow-lg hover-lift">
                  <div className="w-16 h-16 bg-soft-stone rounded-full flex items-center justify-center mb-4">
                    <UserCheck className="text-pure-white h-8 w-8" />
                  </div>
                  <h4 className="font-poppins font-semibold text-lg text-deep-charcoal">Harsha Goud</h4>
                  <p className="text-deep-charcoal/70">Co-Founder & Project Manager</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-poppins text-2xl font-semibold text-deep-charcoal">Why Choose Us</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-soft-stone rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="text-pure-white h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-deep-charcoal">{feature.title}</h4>
                      <p className="text-deep-charcoal/70">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern minimalist living room interior" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
