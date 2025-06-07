
import React, { useEffect } from 'react';
import FloatingButton from "@/components/FloatingButton";
import ServiceAreasHero from "@/components/service-areas/HeroSection";
import UAELocationsSection from "@/components/service-areas/UAELocationsSection";
import PakistanLocationsSection from "@/components/service-areas/PakistanLocationsSection";
import PopularRoutesSection from "@/components/service-areas/PopularRoutesSection";
import ShippingServicesSection from "@/components/service-areas/ShippingServicesSection";
import CallToAction from "@/components/service-areas/CallToAction";
import SEOHead from "@/components/SEOHead";
import { SEOData } from "@/types";
import { generateStructuredData } from "@/utils/dubai-seo-utils";

const ServiceAreas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const seoData: SEOData = {
    title: "UAE Pakistan Cargo Service Areas | All Emirates Coverage",
    description: "Complete UAE to Pakistan cargo coverage. Dubai, Abu Dhabi, Sharjah, Ajman service areas. All Pakistan cities delivered door-to-door.",
    keywords: "uae pakistan cargo, dubai abu dhabi sharjah cargo, all emirates shipping, pakistan service areas, uae coverage map",
    canonicalUrl: "https://cargotopakistan.ae/service-areas",
    ogTitle: "UAE Pakistan Cargo Service Areas | Complete Coverage Map",
    ogDescription: "Comprehensive cargo service across all UAE Emirates to Pakistan cities. Professional door-to-door delivery nationwide.",
    ogImage: "https://cargotopakistan.ae/images/service-areas-map.jpg",
    h1: "UAE Pakistan Cargo Service Areas"
  };

  const structuredData = generateStructuredData.service(
    "UAE Pakistan Cargo Service Areas",
    "Complete cargo service coverage across all UAE Emirates to Pakistan destinations",
    "UAE"
  );
  
  return (
    <div className="pt-20">
      <SEOHead seoData={seoData} structuredData={structuredData} />
      
      <ServiceAreasHero />
      <UAELocationsSection />
      <PakistanLocationsSection />
      <PopularRoutesSection />
      <ShippingServicesSection />
      <CallToAction />
      <FloatingButton />
    </div>
  );
};

export default ServiceAreas;
