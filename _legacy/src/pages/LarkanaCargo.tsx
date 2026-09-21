
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const LarkanaCargo = () => {
  const larkanaInfo = PAKISTAN_DESTINATIONS.larkana;

  return (
    <PageWrapper debug={true}>
      <PakistanCargoDestinationPage destination={larkanaInfo} />
    </PageWrapper>
  );
};

export default LarkanaCargo;
