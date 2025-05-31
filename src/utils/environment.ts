
// Environment detection utilities
export const isProductionDomain = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const hostname = window.location.hostname;
  const productionDomains = ['cargotopakistan.ae', 'www.cargotopakistan.ae'];
  
  return productionDomains.includes(hostname);
};

export const isDevelopment = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const hostname = window.location.hostname;
  return hostname.includes('lovable') || hostname.includes('localhost') || hostname === '127.0.0.1';
};

export const getCurrentDomain = (): string => {
  if (typeof window === 'undefined') return '';
  return window.location.hostname;
};
