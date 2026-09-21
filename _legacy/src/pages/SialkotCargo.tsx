
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const SialkotCargo = () => {
  const sialkotInfo = PAKISTAN_DESTINATIONS.sialkot;

  return (
    <PageWrapper debug={true}>
      <PakistanCargoDestinationPage destination={sialkotInfo} />
    </PageWrapper>
  );
};

export default SialkotCargo;
