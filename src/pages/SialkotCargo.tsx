
import React, { useEffect } from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import SEOHead from "@/components/SEOHead";
import { useSEO } from "@/hooks/useSEO";

const SialkotCargo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const seoData = useSEO({
    pageType: 'pakistanDestination',
    pageData: {
      cityName: 'Sialkot',
      citySlug: 'sialkot'
    }
  });
  
  const sialkotInfo = {
    city: "Sialkot",
    description: "We provide comprehensive cargo solutions from UAE to Sialkot, Pakistan's industrial hub known for sports goods and surgical instruments. Our services ensure efficient, secure shipping with door-to-door delivery options throughout Sialkot.",
    areas: [
      "Cantt", 
      "Paris Road", 
      "Kashmir Road",
      "Model Town",
      "Small Industrial Estate",
      "Zafarwal Road"
    ],
    heroImage: "/images/sialkot-hero.jpg"
  };

  return (
    <>
      <SEOHead seoData={seoData} />
      <PakistanCargoDestinationPage destination={sialkotInfo} />
    </>
  );
};

export default SialkotCargo;
