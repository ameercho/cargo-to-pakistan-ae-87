
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const HyderabadCargo = () => {
  const hyderabadInfo = PAKISTAN_DESTINATIONS.hyderabad;

  return (
    <PageWrapper debug={true}>
      <PakistanCargoDestinationPage destination={hyderabadInfo} />
    </PageWrapper>
  );
};

export default HyderabadCargo;
