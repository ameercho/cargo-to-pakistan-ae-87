
import React from 'react';
import UAEToPakistanPage from "@/components/UAEToPakistanPage";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { UAE_LOCATIONS } from "@/config/destination-config";

const SharjahToPakistan = () => {
  const sharjahInfo = UAE_LOCATIONS.sharjah;

  return (
    <PageWrapper debug={true}>
      <PageSEO
        title="Cargo to Pakistan from Sharjah | Fast Shipping Service"
        description="Professional cargo shipping from Sharjah to Pakistan with door-to-door delivery. Serving Al Nahda, Al Majaz, Al Khan & all Sharjah areas. Call +971504948135"
        keywords="cargo to pakistan sharjah, sharjah pakistan shipping, cargo service sharjah"
        canonical="https://cargotopakistan.ae/sharjah-to-pakistan"
        robots="index,follow"
      />
      <UAEToPakistanPage location={sharjahInfo} />
    </PageWrapper>
  );
};

export default SharjahToPakistan;
