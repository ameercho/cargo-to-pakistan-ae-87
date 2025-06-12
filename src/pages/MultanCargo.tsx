
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const MultanCargo = () => {
  const multanInfo = PAKISTAN_DESTINATIONS.multan;

  return (
    <PageWrapper debug={true}>
      <PageSEO
        title="Cargo to Multan Pakistan | UAE to Multan Shipping"
        description="Professional cargo shipping from UAE to Multan Pakistan with door-to-door delivery. Reliable shipping service from Dubai, Abu Dhabi, Sharjah. Call +971504948135"
        keywords="cargo to multan, uae multan shipping, pakistan cargo multan"
        canonical="https://cargotopakistan.ae/pakistan-cargo-to-multan"
        robots="index,follow"
      />
      <PakistanCargoDestinationPage destination={multanInfo} />
    </PageWrapper>
  );
};

export default MultanCargo;
