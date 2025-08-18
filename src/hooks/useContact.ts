import { CONTACT_INFO } from '@/constants';

/**
 * Simplified contact actions hook without React dependencies
 * Provides safe fallbacks during React initialization issues
 */
export const useContact = () => {
  const makeCall = (source?: string) => {
    try {
      console.log('Phone call initiated from:', source);
      window.location.href = `tel:${CONTACT_INFO.phone}`;
    } catch (error) {
      console.warn('Phone call failed:', error);
    }
  };

  const openWhatsApp = (message?: string, source?: string) => {
    try {
      const messageToSend = message || CONTACT_INFO.defaultMessage;
      const encodedMessage = encodeURIComponent(messageToSend);
      console.log('WhatsApp opened from:', source);
      window.open(`${CONTACT_INFO.whatsappBase}?text=${encodedMessage}`, "_blank");
    } catch (error) {
      console.warn('WhatsApp failed:', error);
    }
  };

  const sendEmail = (subject?: string, body?: string, source?: string) => {
    try {
      console.log('Email opened from:', source);
      const params = new URLSearchParams();
      if (subject) params.append('subject', subject);
      if (body) params.append('body', body);
      
      const queryString = params.toString();
      window.location.href = `mailto:${CONTACT_INFO.email}${queryString ? '?' + queryString : ''}`;
    } catch (error) {
      console.warn('Email failed:', error);
    }
  };

  return {
    makeCall,
    openWhatsApp,
    sendEmail,
    contactInfo: CONTACT_INFO
  };
};