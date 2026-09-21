export const COMPANY_INFO = {
  name: 'Cargo to Pakistan',
  phone: '+971504948135',
  email: 'info@cargotopakistan.ae',
  website: 'https://cargotopakistan.ae',
  address: 'Jebel Ali Free Zone, Dubai, UAE',
  description:
    'Professional cargo shipping services from UAE to Pakistan with competitive rates and reliable delivery.',
};

export const CONTACT_INFO = {
  phone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  whatsapp: COMPANY_INFO.phone,
  whatsappBase: `https://wa.me/${COMPANY_INFO.phone.replace(/[^\d]/g, '')}`,
  defaultMessage: "Hello, I'm interested in your cargo services to Pakistan.",
};

export const NAVIGATION_LINKS = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
  // Air Freight deliberately listed last: we don't handle it ourselves, the
  // page exists for SEO/informational purposes only, so it's deprioritized
  // in every listing rather than shown alongside services we actually offer.
  services: [
    { name: 'Sea Freight', href: '/services/sea-freight' },
    { name: 'Full Container', href: '/services/full-container' },
    { name: 'Courier Service', href: '/services/courier-service' },
    { name: 'Door to Door', href: '/services/door-to-door' },
    { name: 'Packaging', href: '/services/packaging' },
    { name: 'Warehousing', href: '/services/warehousing' },
    { name: 'Cross Stuffing', href: '/services/cross-stuffing' },
    { name: 'Moving Home', href: '/services/moving-home' },
    { name: 'Customs Clearance', href: '/services/customs-clearance' },
    { name: 'Secure Handling', href: '/services/secure-handling' },
    { name: 'Consulting', href: '/services/consulting' },
    { name: 'Air Freight', href: '/services/air-freight' },
  ],
  // Dubai/Abu Dhabi/Sharjah/Ajman are built as "{city}-to-pakistan" pages (pageType:
  // 'origin'), NOT "/areas/{city}" — only Al Ain/Fujairah/RAK/Umm Al Quwain are built
  // under /areas/ (pageType: 'area'). Mixing these up previously produced 4 live 404s
  // on the /service-areas/ hub page.
  areas: [
    { name: 'Dubai', href: '/dubai-to-pakistan' },
    { name: 'Abu Dhabi', href: '/abu-dhabi-to-pakistan' },
    { name: 'Sharjah', href: '/sharjah-to-pakistan' },
    { name: 'Ajman', href: '/ajman-to-pakistan' },
    { name: 'Al Ain', href: '/areas/al-ain' },
    { name: 'Ras Al Khaimah', href: '/areas/ras-al-khaimah' },
    { name: 'Fujairah', href: '/areas/fujairah' },
    { name: 'Umm Al Quwain', href: '/areas/umm-al-quwain' },
  ],
  pakistanCities: [
    { name: 'Karachi', href: '/pakistan-cargo-to-karachi' },
    { name: 'Lahore', href: '/pakistan-cargo-to-lahore' },
    { name: 'Islamabad', href: '/pakistan-cargo-to-islamabad' },
    { name: 'Peshawar', href: '/pakistan-cargo-to-peshawar' },
    { name: 'Quetta', href: '/pakistan-cargo-to-quetta' },
    { name: 'Faisalabad', href: '/pakistan-cargo-to-faisalabad' },
    { name: 'Multan', href: '/pakistan-cargo-to-multan' },
    { name: 'Rawalpindi', href: '/pakistan-cargo-to-rawalpindi' },
    { name: 'Sialkot', href: '/pakistan-cargo-to-sialkot' },
    { name: 'Sukkur', href: '/pakistan-cargo-to-sukkur' },
    { name: 'Larkana', href: '/pakistan-cargo-to-larkana' },
    { name: 'Sargodha', href: '/pakistan-cargo-to-sargodha' },
    { name: 'Bahawalpur', href: '/pakistan-cargo-to-bahawalpur' },
    { name: 'Hyderabad', href: '/pakistan-cargo-to-hyderabad' },
    { name: 'Gujranwala', href: '/pakistan-cargo-to-gujranwala' },
    { name: 'Sheikhupura', href: '/pakistan-cargo-to-sheikhupura' },
  ],
};

export const GTM_ID = 'GTM-TCDZPFK';

export function whatsappLink(message: string) {
  return `${CONTACT_INFO.whatsappBase}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:${COMPANY_INFO.phone}`;
}

// We don't actually handle air freight — that page exists for SEO purposes only,
// so it's always sorted last wherever services are listed rather than shown
// alongside services we actually offer.
export function sortServicesForDisplay<T extends { data: { slug: string } }>(services: T[]): T[] {
  return [...services].sort((a, b) => {
    const aLast = a.data.slug === 'air-freight' ? 1 : 0;
    const bLast = b.data.slug === 'air-freight' ? 1 : 0;
    return aLast - bLast;
  });
}
