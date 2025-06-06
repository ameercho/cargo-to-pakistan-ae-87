
// Core analytics functionality
import { isProductionDomain } from '@/utils/environment';

// Analytics configuration
const GA4_MEASUREMENT_ID = 'G-K5V7CJ0G5P';

// Define the window interface with dataLayer
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
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

// Load GTM script
export const loadGTM = (): void => {
  if (typeof window === 'undefined' || !isProductionDomain()) return;
  
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXXX`;
  document.head.appendChild(script);
};

// Load GA4 script
export const loadGA4 = (): void => {
  if (typeof window === 'undefined' || !isProductionDomain()) return;
  
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  
  script.onload = () => {
    (window as any).gtag('config', GA4_MEASUREMENT_ID);
  };
};

// Initialize analytics services
export const initializeAnalytics = (): void => {
  initDataLayer();
  
  if (isProductionDomain()) {
    console.log('Production domain detected, loading analytics scripts');
    loadGTM();
    loadGA4();
  } else {
    console.log('Development domain detected, skipping analytics scripts');
  }
};
