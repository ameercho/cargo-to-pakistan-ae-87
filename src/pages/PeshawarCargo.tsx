
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const PeshawarCargo = () => {
  // Use our scroll-to-top hook
  useScrollToTop();
  
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

  return <PakistanCargoDestinationPage destination={peshawarInfo} />;
};

export default PeshawarCargo;
