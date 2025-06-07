
import React, { useEffect } from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import SEOHead from "@/components/SEOHead";
import { useSEO } from "@/hooks/useSEO";

const PeshawarCargo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const seoData = useSEO({
    pageType: 'pakistanDestination',
    pageData: {
      cityName: 'Peshawar',
      citySlug: 'peshawar'
    }
  });
  
  const peshawarInfo = {
    city: "Peshawar",
    description: "We provide comprehensive cargo solutions from UAE to Peshawar, a historic city in Pakistan. Our services are designed to meet all your shipping needs with reliability and efficiency.",
    areas: [
      "Hayatabad", 
      "University Town", 
      "Saddar",
      "Gulbahar",
      "Cantt",
      "Warsak Road"
    ],
  };

  return (
    <>
      <SEOHead seoData={seoData} />
      <PakistanCargoDestinationPage destination={peshawarInfo} />
    </>
  );
};

export default PeshawarCargo;
