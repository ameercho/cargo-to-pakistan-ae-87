
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const LahoreCargo = () => {
  const lahoreInfo = PAKISTAN_DESTINATIONS.lahore;

  return (
    <PageWrapper debug={true}>
      <PakistanCargoDestinationPage destination={lahoreInfo} />
    </PageWrapper>
  );
};

export default LahoreCargo;
