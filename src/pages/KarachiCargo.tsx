
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const KarachiCargo = () => {
  const karachiInfo = PAKISTAN_DESTINATIONS.karachi;

  return (
    <PageWrapper debug={true}>
      <PakistanCargoDestinationPage destination={karachiInfo} />
    </PageWrapper>
  );
};

export default KarachiCargo;
