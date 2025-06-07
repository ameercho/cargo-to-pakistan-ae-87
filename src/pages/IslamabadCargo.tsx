
import React, { useEffect } from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import SEOHead from "@/components/SEOHead";
import { useSEO } from "@/hooks/useSEO";

const IslamabadCargo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const seoData = useSEO({
    pageType: 'pakistanDestination',
    pageData: {
      cityName: 'Islamabad',
      citySlug: 'islamabad'
    }
  });
  
  const islamabadInfo = {
    city: "Islamabad",
    description: "We provide comprehensive cargo solutions from UAE to Islamabad, Pakistan's capital city. Our services are designed to meet all your shipping needs with reliability and efficiency.",
    areas: [
      "F-6", 
      "F-7", 
      "F-8",
      "E-11",
      "G-10",
      "DHA"
    ],
  };

  return (
    <>
      <SEOHead seoData={seoData} />
      <PakistanCargoDestinationPage destination={islamabadInfo} />
    </>
  );
};

export default IslamabadCargo;
