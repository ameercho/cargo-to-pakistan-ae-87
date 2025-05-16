
import React, { useEffect } from 'react';
import UAEToPakistanPage from "@/components/UAEToPakistanPage";

const AbuDhabiToPakistan = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const abuDhabiInfo = {
    city: "Abu Dhabi",
    description: "Our comprehensive cargo service from Abu Dhabi to Pakistan provides reliable and cost-effective shipping solutions with door-to-door pickup and delivery options.",
  };

  return <UAEToPakistanPage location={abuDhabiInfo} />;
};

export default AbuDhabiToPakistan;
