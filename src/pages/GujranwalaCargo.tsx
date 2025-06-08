
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const GujranwalaCargo = () => {
  const gujranwalaInfo = PAKISTAN_DESTINATIONS.gujranwala;

  return (
    <PageWrapper debug={true}>
      <PakistanCargoDestinationPage destination={gujranwalaInfo} />
    </PageWrapper>
  );
};

export default GujranwalaCargo;
