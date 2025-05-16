
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";

const KarachiCargo = () => {
  const karachiInfo = {
    city: "Karachi",
    description: "We provide comprehensive cargo solutions from UAE to Karachi, Pakistan's largest city and economic hub. Our services are designed to meet all your shipping needs with reliability and efficiency.",
    areas: [
      "Clifton", 
      "Defence", 
      "Gulshan-e-Iqbal",
      "North Nazimabad",
      "Saddar",
      "Korangi"
    ],
  };

  return <PakistanCargoDestinationPage destination={karachiInfo} />;
};

export default KarachiCargo;
