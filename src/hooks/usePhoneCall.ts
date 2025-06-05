
import { useCallback } from 'react';
import { useAnalytics } from './useAnalytics';
import { CONTACT_INFO } from '@/constants';

export const usePhoneCall = () => {
  const { trackPhoneCall } = useAnalytics();

  const makeCall = useCallback(() => {
    trackPhoneCall();
    window.location.href = `tel:${CONTACT_INFO.phone}`;
  }, [trackPhoneCall]);

  return { makeCall };
};
