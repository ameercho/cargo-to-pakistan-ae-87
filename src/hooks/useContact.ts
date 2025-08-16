import { useCallback } from 'react';
import { CONTACT_INFO } from '@/constants';
import { useAnalytics } from '@/hooks/useAnalytics';

/**
 * Centralized contact actions hook
 * Handles all contact-related actions with analytics tracking
 */
export const useContact = () => {
  const { trackEvent } = useAnalytics();

  const makeCall = useCallback((source?: string) => {
    trackEvent({
      event: 'phone_call',
      category: 'contact',
      action: 'call_initiated',
      label: source || 'unknown'
    });
    
    window.location.href = `tel:${CONTACT_INFO.phone}`;
  }, [trackEvent]);

  const openWhatsApp = useCallback((message?: string, source?: string) => {
    const messageToSend = message || CONTACT_INFO.defaultMessage;
    const encodedMessage = encodeURIComponent(messageToSend);
    
    trackEvent({
      event: 'whatsapp_contact',
      category: 'contact',
      action: 'whatsapp_opened',
      label: source || 'unknown'
    });
    
    window.open(`${CONTACT_INFO.whatsappBase}?text=${encodedMessage}`, "_blank");
  }, [trackEvent]);

  const sendEmail = useCallback((subject?: string, body?: string, source?: string) => {
    trackEvent({
      event: 'email_contact',
      category: 'contact',
      action: 'email_opened',
      label: source || 'unknown'
    });
    
    const params = new URLSearchParams();
    if (subject) params.append('subject', subject);
    if (body) params.append('body', body);
    
    const queryString = params.toString();
    window.location.href = `mailto:${CONTACT_INFO.email}${queryString ? '?' + queryString : ''}`;
  }, [trackEvent]);

  return {
    makeCall,
    openWhatsApp,
    sendEmail,
    contactInfo: CONTACT_INFO
  };
};