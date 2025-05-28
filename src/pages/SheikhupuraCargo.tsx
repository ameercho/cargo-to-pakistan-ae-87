
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const SheikhupuraCargo = () => {
  // Use our scroll-to-top hook
  useScrollToTop();
  
  const sheikhupuraInfo = {
    city: "Sheikhupura",
    description: "We provide comprehensive cargo solutions from UAE to Sheikhupura, an industrial city in Punjab province. Our reliable shipping services ensure efficient and secure delivery with door-to-door options throughout Sheikhupura.",
    areas: [
      "Model Town", 
      "Faisalabad Road", 
      "Sargodha Road",
      "Factory Area",
      "Civil Lines",
      "Gulshan Colony"
    ],
    heroImage: "/images/sheikhupura-hero.jpg" // Optional - add when available
  };

  return <PakistanCargoDestinationPage destination={sheikhupuraInfo} />;
};

export default SheikhupuraCargo;
