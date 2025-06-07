
import React from 'react';
import UAEToPakistanPage from "@/components/UAEToPakistanPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import SEOHead from "@/components/SEOHead";
import { useSEO } from "@/hooks/useSEO";

const DubaiToPakistan = () => {
  useScrollToTop();
  
  const seoData = useSEO({
    pageType: 'routePage',
    pageData: {
      originCity: 'Dubai',
      originSlug: 'dubai'
    }
  });
  
  const dubaiInfo = {
    city: "Dubai",
    description: "Our door-to-door cargo service from Dubai to Pakistan offers a seamless shipping experience with pickup from your location in Dubai and delivery directly to your recipient's doorstep in Pakistan.",
  };

  return (
    <>
      <SEOHead seoData={seoData} />
      <UAEToPakistanPage location={dubaiInfo} />
    </>
  );
};

export default DubaiToPakistan;
