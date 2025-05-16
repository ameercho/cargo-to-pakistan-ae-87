
import React, { useEffect } from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";

const GujranwalaCargo = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const gujranwalaInfo = {
    city: "Gujranwala",
    description: "We provide comprehensive cargo solutions from UAE to Gujranwala, Pakistan's industrial city known for its ceramics and metalwork. Our reliable services ensure efficient shipping with door-to-door delivery options throughout Gujranwala.",
    areas: [
      "Satellite Town", 
      "Model Town", 
      "Peoples Colony",
      "DHA",
      "Civil Lines",
      "Khayaban-e-Green"
    ],
    heroImage: "/images/gujranwala-hero.jpg" // Optional - add when available
  };

  return <PakistanCargoDestinationPage destination={gujranwalaInfo} />;
};

export default GujranwalaCargo;
