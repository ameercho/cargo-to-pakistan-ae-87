
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const GujranwalaCargo = () => {
  // Use our scroll-to-top hook
  useScrollToTop();
  
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
