
import React, { useEffect } from 'react';
import UAEToPakistanPage from "@/components/UAEToPakistanPage";

const DubaiToPakistan = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const dubaiInfo = {
    city: "Dubai",
    description: "Our door-to-door cargo service from Dubai to Pakistan offers a seamless shipping experience with pickup from your location in Dubai and delivery directly to your recipient's doorstep in Pakistan.",
  };

  return <UAEToPakistanPage location={dubaiInfo} />;
};

export default DubaiToPakistan;
