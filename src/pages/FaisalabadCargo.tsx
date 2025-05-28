
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const FaisalabadCargo = () => {
  // Use our scroll-to-top hook
  useScrollToTop();
  
  const faisalabadInfo = {
    city: "Faisalabad",
    description: "We provide comprehensive cargo solutions from UAE to Faisalabad, Pakistan's textile hub. Our reliable services ensure your shipments reach Faisalabad safely with door-to-door delivery options throughout the city.",
    areas: [
      "D Ground", 
      "Madina Town", 
      "People's Colony",
      "Gulberg",
      "Susan Road",
      "Ghulam Muhammad Abad"
    ],
    heroImage: "/images/faisalabad-hero.jpg" // Optional - add when available
  };

  return <PakistanCargoDestinationPage destination={faisalabadInfo} />;
};

export default FaisalabadCargo;
