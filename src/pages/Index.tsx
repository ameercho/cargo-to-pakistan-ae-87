
import { useState, useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import HomeServices from "@/components/home/HomeServices";
import ServiceAreas from "@/components/ServiceAreas";
import DoorToDoorService from "@/components/DoorToDoorService";
import FloatingButton from "@/components/FloatingButton";
import PakistanCargoServices from "@/components/PakistanCargoServices";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add a small delay for smoother transition
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <HomeServices />

      {/* Service Areas */}
      <ServiceAreas />

      {/* Door to Door Service Section */}
      <DoorToDoorService />
      
      {/* Pakistan Cargo Services Section */}
      <PakistanCargoServices />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <HomeTestimonials />

      {/* Call to Action */}
      <CallToAction />

      {/* Floating Button Component */}
      <FloatingButton />
    </div>
  );
};

export default Index;
