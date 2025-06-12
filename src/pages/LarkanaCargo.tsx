
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const LarkanaCargo = () => {
  const larkanaInfo = PAKISTAN_DESTINATIONS.larkana;

  return (
    <PageWrapper debug={true}>
      <PageSEO
        title="Cargo to Larkana Pakistan | UAE to Larkana Shipping"
        description="Professional cargo shipping from UAE to Larkana Pakistan with door-to-door delivery. Reliable shipping service from Dubai, Abu Dhabi, Sharjah. Call +971504948135"
        keywords="cargo to larkana, uae larkana shipping, pakistan cargo larkana"
        canonical="https://cargotopakistan.ae/pakistan-cargo-to-larkana"
        robots="index,follow"
      />
      <PakistanCargoDestinationPage destination={larkanaInfo} />
    </PageWrapper>
  );
};

export default LarkanaCargo;
