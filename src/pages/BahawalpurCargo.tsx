
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const BahawalpurCargo = () => {
  const bahawalpurInfo = PAKISTAN_DESTINATIONS.bahawalpur;

  return (
    <PageWrapper debug={true}>
      <PakistanCargoDestinationPage destination={bahawalpurInfo} />
    </PageWrapper>
  );
};

export default BahawalpurCargo;
