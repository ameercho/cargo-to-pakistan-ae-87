
import { useCallback } from 'react';
import { analyticsService } from '@/services/analytics';
import { CONTACT_INFO } from '@/constants';

export const usePhoneCall = () => {
  const makeCall = useCallback((source: string = 'header') => {
    analyticsService.trackPhoneCall(source);
    window.location.href = `tel:${CONTACT_INFO.phone}`;
  }, []);

  return { makeCall };
};
