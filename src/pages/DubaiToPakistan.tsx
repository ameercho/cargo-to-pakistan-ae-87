
import React from 'react';
import UAEToPakistanPage from "@/components/UAEToPakistanPage";
import PageWrapper from "@/components/common/PageWrapper";
import { UAE_LOCATIONS } from "@/config/destination-config";

const DubaiToPakistan = () => {
  const dubaiInfo = UAE_LOCATIONS.dubai;

  return (
    <PageWrapper debug={true}>
      <UAEToPakistanPage location={dubaiInfo} />
    </PageWrapper>
  );
};

export default DubaiToPakistan;
