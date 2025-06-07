
import React, { useEffect } from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import SEOHead from "@/components/SEOHead";
import { useSEO } from "@/hooks/useSEO";

const MultanCargo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const seoData = useSEO({
    pageType: 'pakistanDestination',
    pageData: {
      cityName: 'Multan',
      citySlug: 'multan'
    }
  });
  
  const multanInfo = {
    city: "Multan",
    description: "We provide comprehensive cargo solutions from UAE to Multan, the City of Saints. Our reliable and efficient shipping services ensure your cargo reaches Multan safely with convenient door-to-door delivery options.",
    areas: [
      "Gulgasht Colony", 
      "Cantt", 
      "Model Town",
      "Shah Rukn-e-Alam",
      "Mumtazabad",
      "Garden Town"
    ],
    heroImage: "/images/multan-hero.jpg"
  };

  return (
    <>
      <SEOHead seoData={seoData} />
      <PakistanCargoDestinationPage destination={multanInfo} />
    </>
  );
};

export default MultanCargo;
