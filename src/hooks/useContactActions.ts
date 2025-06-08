
import { useCallback } from 'react';
import { CONTACT_INFO } from '@/constants/contact';

export const useContactActions = () => {
  const handleCall = useCallback(() => {
    window.location.href = `tel:${CONTACT_INFO.phone}`;
  }, []);

  const handleWhatsApp = useCallback((message?: string) => {
    const messageToSend = message || CONTACT_INFO.defaultMessage;
    const encodedMessage = encodeURIComponent(messageToSend);
    window.open(`${CONTACT_INFO.whatsappBase}?text=${encodedMessage}`, "_blank");
  }, []);

  return {
    handleCall,
    handleWhatsApp,
  };
};
