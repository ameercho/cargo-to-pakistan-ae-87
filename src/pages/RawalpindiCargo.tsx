
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const RawalpindiCargo = () => {
  const rawalpindiInfo = PAKISTAN_DESTINATIONS.rawalpindi;

  return (
    <PageWrapper debug={true}>
      <PakistanCargoDestinationPage destination={rawalpindiInfo} />
    </PageWrapper>
  );
};

export default RawalpindiCargo;
