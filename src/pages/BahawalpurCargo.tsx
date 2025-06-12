
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const BahawalpurCargo = () => {
  const bahawalpurInfo = PAKISTAN_DESTINATIONS.bahawalpur;

  return (
    <PageWrapper debug={true}>
      <PageSEO
        title="Cargo to Bahawalpur Pakistan | UAE to Bahawalpur Shipping"
        description="Professional cargo shipping from UAE to Bahawalpur Pakistan with door-to-door delivery. Reliable shipping service from Dubai, Abu Dhabi, Sharjah. Call +971504948135"
        keywords="cargo to bahawalpur, uae bahawalpur shipping, pakistan cargo bahawalpur"
        canonical="https://cargotopakistan.ae/pakistan-cargo-to-bahawalpur"
        robots="index,follow"
      />
      <PakistanCargoDestinationPage destination={bahawalpurInfo} />
    </PageWrapper>
  );
};

export default BahawalpurCargo;
