
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const IslamabadCargo = () => {
  const islamabadInfo = PAKISTAN_DESTINATIONS.islamabad;

  return (
    <PageWrapper debug={true}>
      <PakistanCargoDestinationPage destination={islamabadInfo} />
    </PageWrapper>
  );
};

export default IslamabadCargo;
