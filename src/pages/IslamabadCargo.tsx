
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";

const IslamabadCargo = () => {
  const islamabadInfo = {
    city: "Islamabad",
    description: "We provide comprehensive cargo solutions from UAE to Islamabad, Pakistan's capital city. Our services are designed to meet all your shipping needs with reliability and efficiency.",
    areas: [
      "F-6", 
      "F-7", 
      "F-8",
      "E-11",
      "G-10",
      "DHA"
    ],
  };

  return <PakistanCargoDestinationPage destination={islamabadInfo} />;
};

export default IslamabadCargo;
