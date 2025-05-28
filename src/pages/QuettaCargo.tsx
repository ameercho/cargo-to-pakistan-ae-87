
import React, { useEffect } from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";

const QuettaCargo = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const quettaInfo = {
    city: "Quetta",
    description: "We provide comprehensive cargo solutions from UAE to Quetta, the capital city of Balochistan province. Our services are designed for efficient, secure shipping with door-to-door delivery options throughout Quetta.",
    areas: [
      "Jinnah Road", 
      "Satelite Town", 
      "Samungli Housing Scheme",
      "Chiltan Housing Scheme",
      "Shahbaz Town",
      "Marriabad"
    ],
    heroImage: "/images/quetta-hero.jpg" // Optional - add when available
  };

  return <PakistanCargoDestinationPage destination={quettaInfo} />;
};

export default QuettaCargo;
