
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const SargodaCargo = () => {
  const sargodaInfo = PAKISTAN_DESTINATIONS.sargoda;

  return (
    <PageWrapper debug={true}>
      <PakistanCargoDestinationPage destination={sargodaInfo} />
    </PageWrapper>
  );
};

export default SargodaCargo;
