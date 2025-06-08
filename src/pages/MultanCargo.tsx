
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const MultanCargo = () => {
  const multanInfo = PAKISTAN_DESTINATIONS.multan;

  return (
    <PageWrapper debug={true}>
      <PakistanCargoDestinationPage destination={multanInfo} />
    </PageWrapper>
  );
};

export default MultanCargo;
