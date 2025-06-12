
import React from 'react';
import PakistanCargoDestinationPage from "@/components/PakistanCargoDestinationPage";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { PAKISTAN_DESTINATIONS } from "@/config/destination-config";

const PeshawarCargo = () => {
  const peshawarInfo = PAKISTAN_DESTINATIONS.peshawar;

  return (
    <PageWrapper debug={true}>
      <PageSEO
        title="Cargo to Peshawar Pakistan | UAE to Peshawar Shipping"
        description="Professional cargo shipping from UAE to Peshawar Pakistan with door-to-door delivery. Reliable shipping service from Dubai, Abu Dhabi, Sharjah. Call +971504948135"
        keywords="cargo to peshawar, uae peshawar shipping, pakistan cargo peshawar"
        canonical="https://cargotopakistan.ae/pakistan-cargo-to-peshawar"
        robots="index,follow"
      />
      <PakistanCargoDestinationPage destination={peshawarInfo} />
    </PageWrapper>
  );
};

export default PeshawarCargo;
