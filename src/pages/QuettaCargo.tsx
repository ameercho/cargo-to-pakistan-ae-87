
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const QuettaCargo = () => {
  // Use our scroll-to-top hook
  useScrollToTop();
  
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
