
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const PeshawarCargo = () => {
  const peshawarInfo = PAKISTAN_DESTINATIONS.peshawar;

  return (
    <PageWrapper debug={true}>
      <PakistanCargoDestinationPage destination={peshawarInfo} />
    </PageWrapper>
  );
};

export default PeshawarCargo;
