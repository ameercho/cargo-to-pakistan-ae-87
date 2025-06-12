
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const LahoreCargo = () => {
  const lahoreInfo = PAKISTAN_DESTINATIONS.lahore;

  return (
    <PageWrapper debug={true}>
      <PageSEO
        title="Cargo to Lahore Pakistan | UAE to Lahore Shipping"
        description="Professional cargo shipping from UAE to Lahore Pakistan with door-to-door delivery. Reliable shipping service from Dubai, Abu Dhabi, Sharjah. Call +971504948135"
        keywords="cargo to lahore, uae lahore shipping, pakistan cargo lahore"
        canonical="https://cargotopakistan.ae/pakistan-cargo-to-lahore"
        robots="index,follow"
      />
      <PakistanCargoDestinationPage destination={lahoreInfo} />
    </PageWrapper>
  );
};

export default LahoreCargo;
