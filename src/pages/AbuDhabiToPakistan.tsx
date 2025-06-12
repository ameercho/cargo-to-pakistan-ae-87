
import React from 'react';
import UAEToPakistanPage from "@/components/UAEToPakistanPage";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { UAE_LOCATIONS } from "@/config/destination-config";

const AbuDhabiToPakistan = () => {
  const abuDhabiInfo = UAE_LOCATIONS["abu-dhabi"];

  return (
    <PageWrapper debug={true}>
      <PageSEO
        title="Cargo to Pakistan from Abu Dhabi | Door-to-Door Shipping"
        description="Professional cargo shipping from Abu Dhabi to Pakistan with door-to-door delivery. Reliable UAE Pakistan cargo service. Call +971504948135"
        keywords="cargo to pakistan abu dhabi, abu dhabi pakistan shipping, uae pakistan cargo"
        canonical="https://cargotopakistan.ae/abu-dhabi-to-pakistan"
        robots="index,follow"
      />
      <UAEToPakistanPage location={abuDhabiInfo} />
    </PageWrapper>
  );
};

export default AbuDhabiToPakistan;
