
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const LahoreCargo = () => {
  // Use our scroll-to-top hook
  useScrollToTop();
  
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

  return <PakistanCargoDestinationPage destination={lahoreInfo} />;
};

export default LahoreCargo;
