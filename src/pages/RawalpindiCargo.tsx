
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const RawalpindiCargo = () => {
  const rawalpindiInfo = PAKISTAN_DESTINATIONS.rawalpindi;

  return (
    <PageWrapper debug={true}>
      <PageSEO
        title="Cargo to Rawalpindi Pakistan | UAE to Rawalpindi Shipping"
        description="Professional cargo shipping from UAE to Rawalpindi Pakistan with door-to-door delivery. Reliable shipping service from Dubai, Abu Dhabi, Sharjah. Call +971504948135"
        keywords="cargo to rawalpindi, uae rawalpindi shipping, pakistan cargo rawalpindi"
        canonical="https://cargotopakistan.ae/pakistan-cargo-to-rawalpindi"
        robots="index,follow"
      />
      <PakistanCargoDestinationPage destination={rawalpindiInfo} />
    </PageWrapper>
  );
};

export default RawalpindiCargo;
