
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const SargodaCargo = () => {
  // Use our scroll-to-top hook
  useScrollToTop();
  
  const sargodaInfo = {
    city: "Sargoda",
    description: "We provide comprehensive cargo solutions from UAE to Sargoda, an important commercial center in Punjab province. Our reliable shipping services ensure your cargo reaches Sargoda safely with convenient door-to-door delivery options throughout the city.",
    areas: [
      "Satellite Town", 
      "Canel Colony", 
      "Block 6",
      "Block 9",
      "Muslim Bazar",
      "Shaheen Abad"
    ],
    heroImage: "/images/sargoda-hero.jpg" // Optional - add when available
  };

  return <PakistanCargoDestinationPage destination={sargodaInfo} />;
};

export default SargodaCargo;
