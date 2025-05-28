
import React, { useEffect } from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";

const FaisalabadCargo = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
