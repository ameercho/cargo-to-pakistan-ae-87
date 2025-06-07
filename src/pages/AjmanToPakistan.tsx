
import React from 'react';
import UAEToPakistanPage from "@/components/UAEToPakistanPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import SEOHead from "@/components/SEOHead";
import { useSEO } from "@/hooks/useSEO";

const AjmanToPakistan = () => {
  useScrollToTop();
  
  const seoData = useSEO({
    pageType: 'routePage',
    pageData: {
      originCity: 'Ajman',
      originSlug: 'ajman'
    }
  });
  
  const ajmanInfo = {
    city: "Ajman",
    description: "Our complete door-to-door cargo service from Ajman to Pakistan takes care of everything from collection at your location to delivery at your recipient's doorstep with professional handling throughout.",
  };

  return (
    <>
      <SEOHead seoData={seoData} />
      <UAEToPakistanPage location={ajmanInfo} />
    </>
  );
};

export default AjmanToPakistan;
