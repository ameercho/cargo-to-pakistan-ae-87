
import React from 'react';
import UAEToPakistanPage from "@/components/UAEToPakistanPage";
import PageWrapper from "@/components/common/PageWrapper";
import { UAE_LOCATIONS } from "@/config/destination-config";

const SharjahToPakistan = () => {
  const sharjahInfo = UAE_LOCATIONS.sharjah;

  return (
    <PageWrapper debug={true}>
      <UAEToPakistanPage location={sharjahInfo} />
    </PageWrapper>
  );
};

export default SharjahToPakistan;
