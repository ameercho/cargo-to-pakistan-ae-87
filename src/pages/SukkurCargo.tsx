
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const SukkurCargo = () => {
  // Use our scroll-to-top hook
  useScrollToTop();
  
  const sukkurInfo = {
    city: "Sukkur",
    description: "We provide comprehensive cargo solutions from UAE to Sukkur, a key commercial center in Sindh province. Our reliable shipping services ensure efficient and secure delivery with door-to-door options throughout Sukkur.",
    areas: [
      "Minara Road", 
      "Military Road", 
      "Barrage Colony",
      "Queens Road",
      "Station Road",
      "Civil Lines"
    ],
    heroImage: "/images/sukkur-hero.jpg" // Optional - add when available
  };

  return <PakistanCargoDestinationPage destination={sukkurInfo} />;
};

export default SukkurCargo;
