
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const SheikhupuraCargo = () => {
  const sheikhupuraInfo = PAKISTAN_DESTINATIONS.sheikhupura;

  return (
    <PageWrapper debug={true}>
      <PakistanCargoDestinationPage destination={sheikhupuraInfo} />
    </PageWrapper>
  );
};

export default SheikhupuraCargo;
