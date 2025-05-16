
import React from 'react';
import UAEToPakistanPage from "@/components/UAEToPakistanPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const AbuDhabiToPakistan = () => {
  // Use our scroll-to-top hook
  useScrollToTop();
  
  const abuDhabiInfo = {
    city: "Abu Dhabi",
    description: "Our comprehensive cargo service from Abu Dhabi to Pakistan provides reliable and cost-effective shipping solutions with door-to-door pickup and delivery options.",
  };

  return <UAEToPakistanPage location={abuDhabiInfo} />;
};

export default AbuDhabiToPakistan;
