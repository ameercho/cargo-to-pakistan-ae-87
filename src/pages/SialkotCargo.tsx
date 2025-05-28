
import React, { useEffect } from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";

const SialkotCargo = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const sialkotInfo = {
    city: "Sialkot",
    description: "We provide comprehensive cargo solutions from UAE to Sialkot, Pakistan's industrial hub known for sports goods and surgical instruments. Our services ensure efficient, secure shipping with door-to-door delivery options throughout Sialkot.",
    areas: [
      "Cantt", 
      "Paris Road", 
      "Kashmir Road",
      "Model Town",
      "Small Industrial Estate",
      "Zafarwal Road"
    ],
    heroImage: "/images/sialkot-hero.jpg" // Optional - add when available
  };

  return <PakistanCargoDestinationPage destination={sialkotInfo} />;
};

export default SialkotCargo;
