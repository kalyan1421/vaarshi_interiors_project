import { useEffect, useState, useRef } from "react";
import { smoothScrollTo } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function HeroSectionCinematic() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const phrases = [
    "Transforming Spaces",
    "Designing Dreams",
    "Delivering Excellence"
  ];

  const fallbackImages = [
    "/assets/images/aaron-huber-G7sE2S4Lab4-unsplash.jpg",
    "/assets/images/spacejoy-YI2YkyaREHk-unsplash.jpg",
    // Temporary fallbacks if local images not available
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=1080&fit=crop"
  ];

  // Text rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Image slideshow for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % fallbackImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (videoRef.current) {
        videoRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero-cinematic">
      {/* Background Video/Images */}
      <div className="hero-bg">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
          onLoadedData={() => console.log('Video loaded successfully')}
          onError={(e) => console.error('Video failed to load:', e)}
        >
          <source src="/assets/videos/4301617-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback images for mobile */}
        <div className="hero-fallback-container">
          {fallbackImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Interior Background ${index + 1}`}
              className={`hero-fallback ${currentImage === index ? 'active' : ''}`}
            />
          ))}
        </div>
        
        {/* Gradient Overlay */}
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="animated-text" key={currentPhrase}>
            {phrases[currentPhrase]}
          </span>
        </h1>
        <p className="hero-subtitle">
          Redefining interiors with elegant craftsmanship and contemporary design.
        </p>

        <div className="hero-buttons">
          <Button
            className="btn-hero-primary"
            onClick={() => smoothScrollTo('contact')}
          >
            Get Free Quotation
          </Button>
          <Button
            variant="outline"
            className="btn-hero-outline"
            onClick={() => smoothScrollTo('portfolio')}
          >
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
