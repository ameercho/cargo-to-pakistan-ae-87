
import React, { useEffect } from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";

const SargodaCargo = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
