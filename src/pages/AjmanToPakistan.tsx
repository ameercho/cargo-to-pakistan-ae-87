
import React from 'react';
import UAEToPakistanPage from "@/components/UAEToPakistanPage";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { UAE_LOCATIONS } from "@/config/destination-config";

const AjmanToPakistan = () => {
  const ajmanInfo = UAE_LOCATIONS.ajman;

  return (
    <PageWrapper debug={true}>
      <PageSEO
        title="Cargo to Pakistan from Ajman | Reliable Shipping Service"
        description="Professional cargo shipping from Ajman to Pakistan with door-to-door delivery. Serving Al Nuaimiya, Al Rashidiya & all Ajman areas. Call +971504948135"
        keywords="cargo to pakistan ajman, ajman pakistan shipping, cargo service ajman"
        canonical="https://cargotopakistan.ae/ajman-to-pakistan"
        robots="index,follow"
      />
      <UAEToPakistanPage location={ajmanInfo} />
    </PageWrapper>
  );
};

export default AjmanToPakistan;
