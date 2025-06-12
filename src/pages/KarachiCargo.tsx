
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const KarachiCargo = () => {
  const karachiInfo = PAKISTAN_DESTINATIONS.karachi;

  return (
    <PageWrapper debug={true}>
      <PageSEO
        title="Cargo to Karachi Pakistan | UAE to Karachi Shipping"
        description="Professional cargo shipping from UAE to Karachi Pakistan with door-to-door delivery. Reliable shipping service from Dubai, Abu Dhabi, Sharjah. Call +971504948135"
        keywords="cargo to karachi, uae karachi shipping, pakistan cargo karachi"
        canonical="https://cargotopakistan.ae/pakistan-cargo-to-karachi"
        robots="index,follow"
      />
      <PakistanCargoDestinationPage destination={karachiInfo} />
    </PageWrapper>
  );
};

export default KarachiCargo;
