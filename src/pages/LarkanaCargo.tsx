
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const LarkanaCargo = () => {
  // Use our scroll-to-top hook
  useScrollToTop();
  
  const larkanaInfo = {
    city: "Larkana",
    description: "We provide comprehensive cargo solutions from UAE to Larkana, a historic city in Sindh province. Our reliable shipping services ensure your cargo reaches Larkana safely with convenient door-to-door delivery options throughout the city.",
    areas: [
      "Sachal Colony", 
      "Dari Colony", 
      "Murad Colony",
      "Allahabad",
      "Station Road",
      "Bakrani Road"
    ],
    heroImage: "/images/larkana-hero.jpg" // Optional - add when available
  };

  return <PakistanCargoDestinationPage destination={larkanaInfo} />;
};

export default LarkanaCargo;
