
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const RawalpindiCargo = () => {
  // Use our scroll-to-top hook
  useScrollToTop();
  
  const rawalpindiInfo = {
    city: "Rawalpindi",
    description: "We provide comprehensive cargo solutions from UAE to Rawalpindi, the twin city of Pakistan's capital. Our reliable shipping services ensure your cargo reaches Rawalpindi safely with convenient door-to-door delivery options throughout the city.",
    areas: [
      "Saddar", 
      "Chaklala", 
      "Bahria Town",
      "DHA",
      "Satellite Town",
      "Commercial Market"
    ],
    heroImage: "/images/rawalpindi-hero.jpg" // Optional - add when available
  };

  return <PakistanCargoDestinationPage destination={rawalpindiInfo} />;
};

export default RawalpindiCargo;
