
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const QuettaCargo = () => {
  const quettaInfo = PAKISTAN_DESTINATIONS.quetta;

  return (
    <PageWrapper debug={true}>
      <PageSEO
        title="Cargo to Quetta Pakistan | UAE to Quetta Shipping"
        description="Professional cargo shipping from UAE to Quetta Pakistan with door-to-door delivery. Reliable shipping service from Dubai, Abu Dhabi, Sharjah. Call +971504948135"
        keywords="cargo to quetta, uae quetta shipping, pakistan cargo quetta"
        canonical="https://cargotopakistan.ae/pakistan-cargo-to-quetta"
        robots="index,follow"
      />
      <PakistanCargoDestinationPage destination={quettaInfo} />
    </PageWrapper>
  );
};

export default QuettaCargo;
