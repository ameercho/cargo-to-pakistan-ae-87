
import { isProductionDomain } from '@/utils/environment';

// Define the window interface with dataLayer
interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}

// Initialize dataLayer if it doesn't exist yet
export const initDataLayer = (): void => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    
    // Ensure gtag function is available
    if (!(window as any).gtag) {
      (window as any).gtag = function() {
        if (isProductionDomain()) {
          (window as any).dataLayer.push(arguments);
        } else {
          console.log('Development gtag call:', arguments);
        }
      };
    }
  }
};

// Push events to dataLayer (only on production)
export const pushToDataLayer = (data: any): void => {
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    
    if (isProductionDomain()) {
      (window as any).dataLayer.push(data);
    } else {
      console.log('Development dataLayer push:', data);
    }
  }
};

// GA4 specific function
export const gtag = (...args: any[]): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag(...args);
  } else if (typeof window !== 'undefined') {
    // Queue gtag calls if gtag isn't loaded yet
    (window as any).dataLayer = (window as any).dataLayer || [];
    if (isProductionDomain()) {
      (window as any).dataLayer.push(args);
    } else {
      console.log('Development gtag queue:', args);
    }
  }
};
