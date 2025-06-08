
import React from 'react';
import UAEToPakistanPage from "@/components/UAEToPakistanPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import SEOHead from "@/components/SEOHead";
import { useEnhancedSEO } from "@/hooks/useEnhancedSEO";

const AbuDhabiToPakistan = () => {
  useScrollToTop();
  
  // Use enhanced SEO hook - will automatically get Abu Dhabi specific SEO
  const seoData = useEnhancedSEO({ debug: true });
  
  const abuDhabiInfo = {
    city: "Abu Dhabi",
    description: "Our comprehensive cargo service from Abu Dhabi to Pakistan provides reliable and cost-effective shipping solutions with door-to-door pickup and delivery options.",
  };

  return (
    <>
      <SEOHead seoData={seoData} debug={true} />
      <UAEToPakistanPage location={abuDhabiInfo} />
    </>
  );
};

export default AbuDhabiToPakistan;
