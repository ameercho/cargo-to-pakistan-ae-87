
import React from 'react';
import UAEToPakistanPage from "@/components/UAEToPakistanPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const SharjahToPakistan = () => {
  // Use our scroll-to-top hook
  useScrollToTop();
  
  const sharjahInfo = {
    city: "Sharjah",
    description: "Our efficient cargo service from Sharjah to Pakistan delivers your shipments reliably and on time, with convenient pickup from any location in Sharjah and delivery to destinations across Pakistan.",
  };

  return <UAEToPakistanPage location={sharjahInfo} />;
};

export default SharjahToPakistan;
