
import React from 'react';
import UAEToPakistanPage from "@/components/UAEToPakistanPage";
import PageWrapper from "@/components/common/PageWrapper";
import { UAE_LOCATIONS } from "@/config/destination-config";

const AjmanToPakistan = () => {
  const ajmanInfo = UAE_LOCATIONS.ajman;

  return (
    <PageWrapper debug={true}>
      <UAEToPakistanPage location={ajmanInfo} />
    </PageWrapper>
  );
};

export default AjmanToPakistan;
