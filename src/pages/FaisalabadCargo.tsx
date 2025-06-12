
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const FaisalabadCargo = () => {
  const faisalabadInfo = PAKISTAN_DESTINATIONS.faisalabad;

  return (
    <PageWrapper debug={true}>
      <PageSEO
        title="Cargo to Faisalabad Pakistan | UAE to Faisalabad Shipping"
        description="Professional cargo shipping from UAE to Faisalabad Pakistan with door-to-door delivery. Reliable shipping service from Dubai, Abu Dhabi, Sharjah. Call +971504948135"
        keywords="cargo to faisalabad, uae faisalabad shipping, pakistan cargo faisalabad"
        canonical="https://cargotopakistan.ae/pakistan-cargo-to-faisalabad"
        robots="index,follow"
      />
      <PakistanCargoDestinationPage destination={faisalabadInfo} />
    </PageWrapper>
  );
};

export default FaisalabadCargo;
