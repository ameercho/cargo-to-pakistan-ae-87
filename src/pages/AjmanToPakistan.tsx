
import React from 'react';
import UAEToPakistanPage from "@/components/UAEToPakistanPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const AjmanToPakistan = () => {
  // Use our scroll-to-top hook
  useScrollToTop();
  
  const ajmanInfo = {
    city: "Ajman",
    description: "Our complete door-to-door cargo service from Ajman to Pakistan takes care of everything from collection at your location to delivery at your recipient's doorstep with professional handling throughout.",
  };

  return <UAEToPakistanPage location={ajmanInfo} />;
};

export default AjmanToPakistan;
