
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const QuettaCargo = () => {
  const quettaInfo = PAKISTAN_DESTINATIONS.quetta;

  return (
    <PageWrapper debug={true}>
      <PakistanCargoDestinationPage destination={quettaInfo} />
    </PageWrapper>
  );
};

export default QuettaCargo;
