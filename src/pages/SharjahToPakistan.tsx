
import React, { useEffect } from 'react';
import UAEToPakistanPage from "@/components/UAEToPakistanPage";

const SharjahToPakistan = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const sharjahInfo = {
    city: "Sharjah",
    description: "Our efficient cargo service from Sharjah to Pakistan delivers your shipments reliably and on time, with convenient pickup from any location in Sharjah and delivery to destinations across Pakistan.",
  };

  return <UAEToPakistanPage location={sharjahInfo} />;
};

export default SharjahToPakistan;
