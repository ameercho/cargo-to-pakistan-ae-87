
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const MultanCargo = () => {
  // Use our scroll-to-top hook
  useScrollToTop();
  
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
    heroImage: "/images/multan-hero.jpg" // Optional - add when available
  };

  return <PakistanCargoDestinationPage destination={multanInfo} />;
};

export default MultanCargo;
