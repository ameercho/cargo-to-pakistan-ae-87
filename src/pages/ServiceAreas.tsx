
import React from 'react';
import FloatingButton from "@/components/FloatingButton";
import ServiceAreasHero from "@/components/service-areas/HeroSection";
import UAELocationsSection from "@/components/service-areas/UAELocationsSection";
import PakistanLocationsSection from "@/components/service-areas/PakistanLocationsSection";
import PopularRoutesSection from "@/components/service-areas/PopularRoutesSection";
import ShippingServicesSection from "@/components/service-areas/ShippingServicesSection";
import CallToAction from "@/components/service-areas/CallToAction";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { generateStructuredData } from "@/utils/dubai-seo-utils";

const ServiceAreas = () => {
  const structuredData = generateStructuredData.service(
    "UAE Pakistan Cargo Service Areas",
    "Complete cargo service coverage across all UAE Emirates to Pakistan destinations",
    "UAE"
  );
  
  return (
    <PageWrapper structuredData={structuredData} debug={true}>
      <PageSEO
        title="Service Areas | Cargo to Pakistan from UAE Emirates"
        description="Complete cargo service coverage across all UAE Emirates to Pakistan destinations. Serving Dubai, Abu Dhabi, Sharjah, Ajman & more. Call +971504948135"
        keywords="uae pakistan cargo service areas, dubai abu dhabi sharjah cargo, emirates pakistan shipping"
        canonical="https://cargotopakistan.ae/service-areas"
        robots="index,follow"
      />
      <div className="pt-20">
        <ServiceAreasHero />
        <UAELocationsSection />
        <PakistanLocationsSection />
        <PopularRoutesSection />
        <ShippingServicesSection />
        <CallToAction />
        <FloatingButton />
      </div>
    </PageWrapper>
  );
};

export default ServiceAreas;
