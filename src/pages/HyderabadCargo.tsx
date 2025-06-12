
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const HyderabadCargo = () => {
  const hyderabadInfo = PAKISTAN_DESTINATIONS.hyderabad;

  return (
    <PageWrapper debug={true}>
      <PageSEO
        title="Cargo to Hyderabad Pakistan | UAE to Hyderabad Shipping"
        description="Professional cargo shipping from UAE to Hyderabad Pakistan with door-to-door delivery. Reliable shipping service from Dubai, Abu Dhabi, Sharjah. Call +971504948135"
        keywords="cargo to hyderabad, uae hyderabad shipping, pakistan cargo hyderabad"
        canonical="https://cargotopakistan.ae/pakistan-cargo-to-hyderabad"
        robots="index,follow"
      />
      <PakistanCargoDestinationPage destination={hyderabadInfo} />
    </PageWrapper>
  );
};

export default HyderabadCargo;
