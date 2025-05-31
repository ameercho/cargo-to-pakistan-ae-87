
// Dynamic script loading for analytics
const GTM_ID = 'GTM-PSDGGPJQ';
const GA4_MEASUREMENT_ID = 'G-K5V7CJ0G5P';

// Load Google Tag Manager script
export const loadGTM = (): void => {
  if (typeof window === 'undefined') return;
  
  // Initialize dataLayer
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });
  
  // Load GTM script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
  
  // Add GTM noscript iframe
  const noscript = document.createElement('noscript');
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
  iframe.height = '0';
  iframe.width = '0';
  iframe.style.display = 'none';
  iframe.style.visibility = 'hidden';
  noscript.appendChild(iframe);
  document.body.insertBefore(noscript, document.body.firstChild);
};

// Load Google Analytics script
export const loadGA4 = (): void => {
  if (typeof window === 'undefined') return;
  
  // Initialize dataLayer and gtag
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).gtag = function() {
    (window as any).dataLayer.push(arguments);
  };
  
  // Load GA4 script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  
  // Configure GA4
  script.onload = () => {
    (window as any).gtag('js', new Date());
    (window as any).gtag('config', GA4_MEASUREMENT_ID);
  };
};
