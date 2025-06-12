
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const IslamabadCargo = () => {
  const islamabadInfo = PAKISTAN_DESTINATIONS.islamabad;

  return (
    <PageWrapper debug={true}>
      <PageSEO
        title="Cargo to Islamabad Pakistan | UAE to Islamabad Shipping"
        description="Professional cargo shipping from UAE to Islamabad Pakistan with door-to-door delivery. Reliable shipping service from Dubai, Abu Dhabi, Sharjah. Call +971504948135"
        keywords="cargo to islamabad, uae islamabad shipping, pakistan cargo islamabad"
        canonical="https://cargotopakistan.ae/pakistan-cargo-to-islamabad"
        robots="index,follow"
      />
      <PakistanCargoDestinationPage destination={islamabadInfo} />
    </PageWrapper>
  );
};

export default IslamabadCargo;
