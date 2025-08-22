
import React from 'react';
import UAEToPakistanPage from "@/components/UAEToPakistanPage";
import PageWrapper from "@/components/common/PageWrapper";
import { UAE_LOCATIONS } from "@/config/destination-config";

const AbuDhabiToPakistan = () => {
  const abuDhabiInfo = UAE_LOCATIONS["abu-dhabi"];

  return (
    <PageWrapper debug={true}>
      <UAEToPakistanPage location={abuDhabiInfo} />
    </PageWrapper>
  );
};

export default AbuDhabiToPakistan;
