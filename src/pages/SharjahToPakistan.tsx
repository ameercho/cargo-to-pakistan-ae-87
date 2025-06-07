
import React from 'react';
import UAEToPakistanPage from "@/components/UAEToPakistanPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import SEOHead from "@/components/SEOHead";
import { useSEO } from "@/hooks/useSEO";

const SharjahToPakistan = () => {
  useScrollToTop();
  
  const seoData = useSEO({
    pageType: 'routePage',
    pageData: {
      originCity: 'Sharjah',
      originSlug: 'sharjah'
    }
  });
  
  const sharjahInfo = {
    city: "Sharjah",
    description: "Our efficient cargo service from Sharjah to Pakistan delivers your shipments reliably and on time, with convenient pickup from any location in Sharjah and delivery to destinations across Pakistan.",
  };

  return (
    <>
      <SEOHead seoData={seoData} />
      <UAEToPakistanPage location={sharjahInfo} />
    </>
  );
};

export default SharjahToPakistan;
