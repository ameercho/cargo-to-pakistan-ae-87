
import { CONTACT_INFO } from '@/constants';

export class ContactService {
  private static instance: ContactService;
  
  public static getInstance(): ContactService {
    if (!ContactService.instance) {
      ContactService.instance = new ContactService();
    }
    return ContactService.instance;
  }

  makePhoneCall() {
    window.location.href = `tel:${CONTACT_INFO.phone}`;
  }

  openWhatsApp(message?: string) {
    const encodedMessage = message ? encodeURIComponent(message) : '';
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodedMessage}`, '_blank');
  }

  sendEmail(subject?: string, body?: string) {
    const params = new URLSearchParams();
    if (subject) params.append('subject', subject);
    if (body) params.append('body', body);
    
    const queryString = params.toString();
    window.location.href = `mailto:${CONTACT_INFO.email}${queryString ? '?' + queryString : ''}`;
  }
}

export const contactService = ContactService.getInstance();
