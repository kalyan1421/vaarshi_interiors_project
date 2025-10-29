import { useRoute, Link } from "wouter";
import { Home, Briefcase, Grid, Layers, RefreshCw, Sun, Package, Lightbulb, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/lib/utils";

interface ServiceData {
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  process: string[];
}

const servicesData: Record<string, ServiceData> = {
  residential: {
    icon: Home,
    title: "Residential Interiors",
    subtitle: "Transform Your Home Into a Timeless Haven",
    description: "Our residential interior design services focus on creating personalized spaces that reflect your unique style and lifestyle. From contemporary minimalism to classic elegance, we craft homes that are both beautiful and functional.",
    features: [
      "Complete home interior planning and execution",
      "Living room, bedroom, and dining area designs",
      "Custom color schemes and material selection",
      "Space optimization and layout planning",
      "Furniture selection and custom designs",
      "Lighting design and fixture installation"
    ],
    benefits: [
      "Personalized designs tailored to your lifestyle",
      "Increased property value",
      "Optimized space utilization",
      "Premium quality materials and finishes",
      "Timeless aesthetic appeal"
    ],
    process: [
      "Initial consultation and requirement gathering",
      "Concept development and mood boards",
      "3D visualization and design approval",
      "Material procurement and quality checks",
      "Professional installation and execution",
      "Final walkthrough and handover"
    ]
  },
  commercial: {
    icon: Briefcase,
    title: "Commercial Spaces",
    subtitle: "Design Workspaces That Inspire Productivity",
    description: "Create functional, modern commercial spaces that enhance productivity and reflect your brand identity. Our designs balance aesthetics with practicality for offices, retail stores, and corporate environments.",
    features: [
      "Office interior design and planning",
      "Retail and showroom design",
      "Reception and waiting area design",
      "Conference room and meeting space design",
      "Ergonomic furniture selection",
      "Brand-aligned color schemes and materials"
    ],
    benefits: [
      "Enhanced employee productivity",
      "Professional brand image",
      "Efficient space utilization",
      "Improved client impressions",
      "Flexible and scalable designs"
    ],
    process: [
      "Business requirement analysis",
      "Space planning and workflow optimization",
      "Design concept and brand integration",
      "Material selection and budgeting",
      "Phased execution to minimize disruption",
      "Post-installation support"
    ]
  },
  kitchen: {
    icon: Grid,
    title: "Modular Kitchens",
    subtitle: "Crafted With Precision and Functionality",
    description: "Design your dream kitchen with our modular solutions that combine functionality, durability, and elegant finishes. Every kitchen is customized to your cooking style and space requirements.",
    features: [
      "L-shaped, U-shaped, and parallel layouts",
      "Premium modular cabinets and storage",
      "Integrated appliances and fixtures",
      "Durable countertops (quartz, granite, marble)",
      "Smart storage solutions and organizers",
      "Under-cabinet and task lighting"
    ],
    benefits: [
      "Optimized workflow and ergonomics",
      "Maximum storage efficiency",
      "Easy maintenance and cleaning",
      "Long-lasting durability",
      "Modern and timeless aesthetics"
    ],
    process: [
      "Kitchen assessment and measurements",
      "Layout planning and workflow design",
      "Cabinet and material selection",
      "Appliance integration planning",
      "Professional installation",
      "Final inspection and training"
    ]
  },
  furniture: {
    icon: Layers,
    title: "Custom Furniture",
    subtitle: "Bespoke Designs Tailored to Your Space",
    description: "Create unique furniture pieces that perfectly fit your space and style. Our custom furniture service offers unlimited design possibilities with premium craftsmanship.",
    features: [
      "Custom wardrobes and storage units",
      "Bespoke dining and coffee tables",
      "TV units and entertainment centers",
      "Study tables and home office furniture",
      "Bed frames and headboards",
      "Pooja units and display cabinets"
    ],
    benefits: [
      "Perfect fit for your space",
      "Unique designs not available in stores",
      "Choice of premium materials",
      "Superior craftsmanship",
      "Long-term durability"
    ],
    process: [
      "Design consultation and space analysis",
      "Custom design and 3D visualization",
      "Material and finish selection",
      "Precision manufacturing",
      "Professional installation",
      "Quality assurance and warranty"
    ]
  },
  renovation: {
    icon: RefreshCw,
    title: "Renovation & Makeovers",
    subtitle: "Redefine Your Existing Spaces",
    description: "Transform your existing spaces with innovative renovation solutions. Whether it's a single room or entire home, we breathe new life into your interiors with creativity and precision.",
    features: [
      "Complete room renovations",
      "Structural modifications and updates",
      "Flooring and wall treatments",
      "Electrical and lighting upgrades",
      "Plumbing and fixture updates",
      "Paint and finishing work"
    ],
    benefits: [
      "Cost-effective alternative to moving",
      "Modernize outdated spaces",
      "Increase property value",
      "Improved functionality",
      "Fresh aesthetic appeal"
    ],
    process: [
      "Space assessment and condition analysis",
      "Renovation planning and design",
      "Budget estimation and approval",
      "Demolition and preparation",
      "Execution and installation",
      "Cleanup and final touches"
    ]
  },
  sustainable: {
    icon: Sun,
    title: "Sustainable Design",
    subtitle: "Eco-Friendly Interiors for a Better Tomorrow",
    description: "Embrace sustainable design practices with eco-friendly materials and energy-efficient solutions. Create beautiful spaces that are kind to the environment.",
    features: [
      "Natural and recycled materials",
      "Energy-efficient lighting solutions",
      "Low-VOC paints and finishes",
      "Water-saving fixtures",
      "Sustainable wood and bamboo",
      "Indoor air quality optimization"
    ],
    benefits: [
      "Reduced environmental impact",
      "Lower energy costs",
      "Healthier indoor environment",
      "Sustainable material sourcing",
      "Long-term cost savings"
    ],
    process: [
      "Sustainability assessment",
      "Eco-friendly material selection",
      "Energy audit and optimization",
      "Green design implementation",
      "Sustainable installation practices",
      "Performance monitoring"
    ]
  },
  turnkey: {
    icon: Package,
    title: "Turnkey Projects",
    subtitle: "Complete Solutions Under One Roof",
    description: "Experience hassle-free interior design with our turnkey solutions. From initial design to final furnishing, we handle everything so you can simply move in and enjoy.",
    features: [
      "End-to-end project management",
      "Design, build, and furnishing",
      "Vendor coordination and management",
      "Quality control and supervision",
      "Timeline and budget management",
      "Single point of contact"
    ],
    benefits: [
      "Stress-free experience",
      "Consistent quality control",
      "Time and cost efficiency",
      "Coordinated execution",
      "Comprehensive warranty"
    ],
    process: [
      "Project scope definition",
      "Comprehensive design and planning",
      "Vendor selection and coordination",
      "Phased execution and monitoring",
      "Quality inspections at each stage",
      "Final handover and documentation"
    ]
  },
  lighting: {
    icon: Lightbulb,
    title: "Lighting & Decor",
    subtitle: "Illuminate Your Spaces With Elegance",
    description: "Complete your interior design with expertly planned lighting and curated decor. The right lighting transforms spaces and creates the perfect ambiance.",
    features: [
      "Lighting design and planning",
      "Ambient, task, and accent lighting",
      "Designer fixtures and fittings",
      "Smart lighting solutions",
      "Decorative elements and accessories",
      "Art and wall decor curation"
    ],
    benefits: [
      "Enhanced ambiance and mood",
      "Energy-efficient solutions",
      "Highlight architectural features",
      "Personalized aesthetic",
      "Complete design cohesion"
    ],
    process: [
      "Lighting assessment and planning",
      "Fixture selection and design",
      "Electrical planning and wiring",
      "Installation and setup",
      "Decor selection and placement",
      "Final styling and adjustments"
    ]
  }
};

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:service");
  const serviceKey = params?.service || "residential";
  const service = servicesData[serviceKey] || servicesData.residential;
  const ServiceIcon = service.icon;

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <Link href="/#services">
            <Button variant="ghost" className="back-button">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </Link>
          
          <div className="service-hero-content">
            <div className="service-hero-icon">
              <ServiceIcon className="w-16 h-16" />
            </div>
            <h1 className="service-hero-title">{service.title}</h1>
            <p className="service-hero-subtitle">{service.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="service-description-section">
        <div className="container">
          <p className="service-description-text">{service.description}</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features-section">
        <div className="container">
          <h2 className="service-section-title">What We Offer</h2>
          <div className="service-features-grid">
            {service.features.map((feature, index) => (
              <div key={index} className="service-feature-item">
                <div className="service-feature-bullet"></div>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits-section">
        <div className="container">
          <h2 className="service-section-title">Key Benefits</h2>
          <div className="service-benefits-grid">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="service-benefit-card">
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-process-section">
        <div className="container">
          <h2 className="service-section-title">Our Process</h2>
          <div className="service-process-timeline">
            {service.process.map((step, index) => (
              <div key={index} className="service-process-step">
                <div className="service-process-number">{index + 1}</div>
                <p className="service-process-text">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta-section">
        <div className="container">
          <h2 className="service-cta-title">Ready to Get Started?</h2>
          <p className="service-cta-text">
            Let's discuss your project and create something beautiful together.
          </p>
          <Button 
            className="btn-consultation shimmer-button"
            onClick={() => window.location.href = '/#contact'}
          >
            Book Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
