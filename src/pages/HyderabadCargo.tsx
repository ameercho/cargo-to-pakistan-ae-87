
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const HyderabadCargo = () => {
  // Use our scroll-to-top hook
  useScrollToTop();
  
  const hyderabadInfo = {
    city: "Hyderabad",
    description: "We provide comprehensive cargo solutions from UAE to Hyderabad, the second largest city in Sindh province. Our reliable shipping services ensure your cargo reaches Hyderabad safely with convenient door-to-door delivery options throughout the city.",
    areas: [
      "Latifabad", 
      "Qasimabad", 
      "Saddar",
      "Market Area",
      "Citizen Colony",
      "Heerabad"
    ],
    heroImage: "/images/hyderabad-hero.jpg" // Optional - add when available
  };

  return <PakistanCargoDestinationPage destination={hyderabadInfo} />;
};

export default HyderabadCargo;
