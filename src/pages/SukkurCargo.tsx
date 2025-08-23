
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const SukkurCargo = () => {
  const sukkurInfo = PAKISTAN_DESTINATIONS.sukkur;

  return (
    <PageWrapper debug={true}>
      <PakistanCargoDestinationPage destination={sukkurInfo} />
    </PageWrapper>
  );
};

export default SukkurCargo;
