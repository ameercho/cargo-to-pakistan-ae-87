
import React from 'react';
import UAEToPakistanPage from "@/components/UAEToPakistanPage";
import PageWrapper from "@/components/common/PageWrapper";
import PageSEO from "@/components/SEO/PageSEO";
import { UAE_LOCATIONS } from "@/config/destination-config";

const DubaiToPakistan = () => {
  const dubaiInfo = UAE_LOCATIONS.dubai;

  return (
    <PageWrapper debug={true}>
      <PageSEO
        title="Cargo to Pakistan from Dubai | Door-to-Door Shipping Service"
        description="Professional cargo shipping from Dubai to Pakistan with door-to-door delivery. Serving Dubai Marina, Downtown, Business Bay & all Dubai areas. Call +971504948135"
        keywords="cargo to pakistan dubai, dubai pakistan shipping, cargo service dubai"
        canonical="https://cargotopakistan.ae/dubai-to-pakistan"
        robots="index,follow"
      />
      <UAEToPakistanPage location={dubaiInfo} />
    </PageWrapper>
  );
};

export default DubaiToPakistan;
