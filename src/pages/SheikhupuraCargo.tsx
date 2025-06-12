
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const SheikhupuraCargo = () => {
  const sheikhupuraInfo = PAKISTAN_DESTINATIONS.sheikhupura;

  return (
    <PageWrapper debug={true}>
      <PageSEO
        title="Cargo to Sheikhupura Pakistan | UAE to Sheikhupura Shipping"
        description="Professional cargo shipping from UAE to Sheikhupura Pakistan with door-to-door delivery. Reliable shipping service from Dubai, Abu Dhabi, Sharjah. Call +971504948135"
        keywords="cargo to sheikhupura, uae sheikhupura shipping, pakistan cargo sheikhupura"
        canonical="https://cargotopakistan.ae/pakistan-cargo-to-sheikhupura"
        robots="index,follow"
      />
      <PakistanCargoDestinationPage destination={sheikhupuraInfo} />
    </PageWrapper>
  );
};

export default SheikhupuraCargo;
