
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const SukkurCargo = () => {
  const sukkurInfo = PAKISTAN_DESTINATIONS.sukkur;

  return (
    <PageWrapper debug={true}>
      <PageSEO
        title="Cargo to Sukkur Pakistan | UAE to Sukkur Shipping"
        description="Professional cargo shipping from UAE to Sukkur Pakistan with door-to-door delivery. Reliable shipping service from Dubai, Abu Dhabi, Sharjah. Call +971504948135"
        keywords="cargo to sukkur, uae sukkur shipping, pakistan cargo sukkur"
        canonical="https://cargotopakistan.ae/pakistan-cargo-to-sukkur"
        robots="index,follow"
      />
      <PakistanCargoDestinationPage destination={sukkurInfo} />
    </PageWrapper>
  );
};

export default SukkurCargo;
