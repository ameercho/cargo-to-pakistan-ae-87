
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const GujranwalaCargo = () => {
  const gujranwalaInfo = PAKISTAN_DESTINATIONS.gujranwala;

  return (
    <PageWrapper debug={true}>
      <PageSEO
        title="Cargo to Gujranwala Pakistan | UAE to Gujranwala Shipping"
        description="Professional cargo shipping from UAE to Gujranwala Pakistan with door-to-door delivery. Reliable shipping service from Dubai, Abu Dhabi, Sharjah. Call +971504948135"
        keywords="cargo to gujranwala, uae gujranwala shipping, pakistan cargo gujranwala"
        canonical="https://cargotopakistan.ae/pakistan-cargo-to-gujranwala"
        robots="index,follow"
      />
      <PakistanCargoDestinationPage destination={gujranwalaInfo} />
    </PageWrapper>
  );
};

export default GujranwalaCargo;
