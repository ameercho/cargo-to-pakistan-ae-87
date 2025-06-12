
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const SargodaCargo = () => {
  const sargodhaInfo = PAKISTAN_DESTINATIONS.sargodha;

  return (
    <PageWrapper debug={true}>
      <PageSEO
        title="Cargo to Sargodha Pakistan | UAE to Sargodha Shipping"
        description="Professional cargo shipping from UAE to Sargodha Pakistan with door-to-door delivery. Reliable shipping service from Dubai, Abu Dhabi, Sharjah. Call +971504948135"
        keywords="cargo to sargodha, uae sargodha shipping, pakistan cargo sargodha"
        canonical="https://cargotopakistan.ae/pakistan-cargo-to-sargodha"
        robots="index,follow"
      />
      <PakistanCargoDestinationPage destination={sargodhaInfo} />
    </PageWrapper>
  );
};

export default SargodaCargo;
