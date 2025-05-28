
import React, { useEffect } from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";

const LarkanaCargo = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const larkanaInfo = {
    city: "Larkana",
    description: "We provide comprehensive cargo solutions from UAE to Larkana, a historic city in Sindh province. Our reliable shipping services ensure your cargo reaches Larkana safely with convenient door-to-door delivery options throughout the city.",
    areas: [
      "Sachal Colony", 
      "Dari Colony", 
      "Murad Colony",
      "Allahabad",
      "Station Road",
      "Bakrani Road"
    ],
    heroImage: "/images/larkana-hero.jpg" // Optional - add when available
  };

  return <PakistanCargoDestinationPage destination={larkanaInfo} />;
};

export default LarkanaCargo;
