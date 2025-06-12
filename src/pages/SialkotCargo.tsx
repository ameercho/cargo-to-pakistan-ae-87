
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const SialkotCargo = () => {
  const sialkotInfo = PAKISTAN_DESTINATIONS.sialkot;

  return (
    <PageWrapper debug={true}>
      <PageSEO
        title="Cargo to Sialkot Pakistan | UAE to Sialkot Shipping"
        description="Professional cargo shipping from UAE to Sialkot Pakistan with door-to-door delivery. Reliable shipping service from Dubai, Abu Dhabi, Sharjah. Call +971504948135"
        keywords="cargo to sialkot, uae sialkot shipping, pakistan cargo sialkot"
        canonical="https://cargotopakistan.ae/pakistan-cargo-to-sialkot"
        robots="index,follow"
      />
      <PakistanCargoDestinationPage destination={sialkotInfo} />
    </PageWrapper>
  );
};

export default SialkotCargo;
