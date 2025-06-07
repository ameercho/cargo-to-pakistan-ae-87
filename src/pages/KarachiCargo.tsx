
import React, { useEffect } from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import SEOHead from "@/components/SEOHead";
import { useSEO } from "@/hooks/useSEO";

const KarachiCargo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const seoData = useSEO({
    pageType: 'pakistanDestination',
    pageData: {
      cityName: 'Karachi',
      citySlug: 'karachi'
    }
  });
  
  const karachiInfo = {
    city: "Karachi",
    description: "We provide comprehensive cargo solutions from UAE to Karachi, Pakistan's largest city and economic hub. Our services are designed to meet all your shipping needs with reliability and efficiency.",
    areas: [
      "Clifton", 
      "Defence", 
      "Gulshan-e-Iqbal",
      "North Nazimabad",
      "Saddar",
      "Korangi"
    ],
  };

  return (
    <>
      <SEOHead seoData={seoData} />
      <PakistanCargoDestinationPage destination={karachiInfo} />
    </>
  );
};

export default KarachiCargo;
