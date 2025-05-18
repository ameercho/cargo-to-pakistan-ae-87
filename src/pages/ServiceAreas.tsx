
import React, { useEffect } from 'react';
import FloatingButton from "@/components/FloatingButton";
import ServiceAreasHero from "@/components/service-areas/HeroSection";
import UAELocationsSection from "@/components/service-areas/UAELocationsSection";
import PakistanLocationsSection from "@/components/service-areas/PakistanLocationsSection";
import PopularRoutesSection from "@/components/service-areas/PopularRoutesSection";
import ShippingServicesSection from "@/components/service-areas/ShippingServicesSection";
import CallToAction from "@/components/service-areas/CallToAction";

const ServiceAreas = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <ServiceAreasHero />

      {/* UAE Origin Locations */}
      <UAELocationsSection />

      {/* Pakistan Destination Locations */}
      <PakistanLocationsSection />

      {/* Direct Route Links */}
      <PopularRoutesSection />

      {/* Service Type Links */}
      <ShippingServicesSection />

      {/* CTA Section */}
      <CallToAction />

      <FloatingButton />
    </div>
  );
};

export default ServiceAreas;
