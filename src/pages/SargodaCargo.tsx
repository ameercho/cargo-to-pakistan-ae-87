
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const SargodaCargo = () => {
  const sargodhaInfo = PAKISTAN_DESTINATIONS.sargodha;

  return (
    <PageWrapper debug={true}>
      <PakistanCargoDestinationPage destination={sargodhaInfo} />
    </PageWrapper>
  );
};

export default SargodaCargo;
