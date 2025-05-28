
import React, { useEffect } from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";

const SukkurCargo = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
