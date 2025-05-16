
import React from 'react';
import UAEToPakistanPage from "@/components/UAEToPakistanPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const DubaiToPakistan = () => {
  // Use our scroll-to-top hook
  useScrollToTop();
  
  const dubaiInfo = {
    city: "Dubai",
    description: "Our door-to-door cargo service from Dubai to Pakistan offers a seamless shipping experience with pickup from your location in Dubai and delivery directly to your recipient's doorstep in Pakistan.",
  };

  return <UAEToPakistanPage location={dubaiInfo} />;
};

export default DubaiToPakistan;
