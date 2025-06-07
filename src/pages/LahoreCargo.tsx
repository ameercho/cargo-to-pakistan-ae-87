
import React, { useEffect } from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import SEOHead from "@/components/SEOHead";
import { useSEO } from "@/hooks/useSEO";

const LahoreCargo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const seoData = useSEO({
    pageType: 'pakistanDestination',
    pageData: {
      cityName: 'Lahore',
      citySlug: 'lahore'
    }
  });
  
  const lahoreInfo = {
    city: "Lahore",
    description: "We provide comprehensive cargo solutions from UAE to Lahore, Pakistan's cultural capital. Our services are designed to meet all your shipping needs with reliability and efficiency.",
    areas: [
      "Gulberg", 
      "Defence", 
      "Johar Town",
      "Model Town",
      "Cantt",
      "Bahria Town"
    ],
  };

  return (
    <>
      <SEOHead seoData={seoData} />
      <PakistanCargoDestinationPage destination={lahoreInfo} />
    </>
  );
};

export default LahoreCargo;
