
import React, { useEffect } from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";

const LahoreCargo = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const lahoreInfo = {
    city: "Lahore",
    description: "We provide comprehensive cargo solutions from UAE to Lahore, Pakistan's cultural capital. Our services are designed to meet all your shipping needs with reliability and efficiency.",
    areas: [
      "Gulberg", 
      "Defence", 
      "Johar Town",
      "Model Town",
      "Cantt",
      "Bahria Town"
    ],
  };

  return <PakistanCargoDestinationPage destination={lahoreInfo} />;
};

export default LahoreCargo;
