
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const FaisalabadCargo = () => {
  const faisalabadInfo = PAKISTAN_DESTINATIONS.faisalabad;

  return (
    <PageWrapper debug={true}>
      <PakistanCargoDestinationPage destination={faisalabadInfo} />
    </PageWrapper>
  );
};

export default FaisalabadCargo;
