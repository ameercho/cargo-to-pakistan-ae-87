
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const BahawalpurCargo = () => {
  // Use our scroll-to-top hook
  useScrollToTop();
  
  const bahawalpurInfo = {
    city: "Bahawalpur",
    description: "We provide comprehensive cargo solutions from UAE to Bahawalpur, a historic city in Punjab province. Our reliable shipping services ensure efficient and secure delivery with door-to-door options throughout Bahawalpur.",
    areas: [
      "Model Town", 
      "Satellite Town", 
      "Yazman Road",
      "One Unit Colony",
      "Islami Colony",
      "Baghdad ul Jadeed"
    ],
    heroImage: "/images/bahawalpur-hero.jpg" // Optional - add when available
  };

  return <PakistanCargoDestinationPage destination={bahawalpurInfo} />;
};

export default BahawalpurCargo;
