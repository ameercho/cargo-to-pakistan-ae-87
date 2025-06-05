
export const COMPANY_INFO = {
  name: "Cargo to Pakistan",
  phone: "+971504948135",
  email: "info@cargotopakistan.ae",
  website: "https://cargotopakistan.ae",
  address: "UAE",
  description: "Professional cargo shipping services from UAE to Pakistan with competitive rates and reliable delivery."
};

export const CONTACT_INFO = {
  phone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  whatsapp: COMPANY_INFO.phone,
  address: COMPANY_INFO.address
};

export const SEO_DEFAULTS = {
  siteName: COMPANY_INFO.name,
  defaultImage: `${COMPANY_INFO.website}/images/cargo-services-default.jpg`,
  twitterHandle: "@cargotopakistan",
  locale: "en_US",
  region: "AE",
  placeName: "United Arab Emirates"
};

export const SOCIAL_LINKS = {
  twitter: "@cargotopakistan",
  facebook: "",
  linkedin: "",
  instagram: ""
};

export const NAVIGATION_LINKS = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" }
  ],
  services: [
    { name: "Sea Freight", href: "/services/sea-freight" },
    { name: "Air Freight", href: "/services/air-freight" },
    { name: "Full Container", href: "/services/full-container" },
    { name: "Courier Service", href: "/services/courier-service" },
    { name: "Packaging", href: "/services/packaging" },
    { name: "Warehousing", href: "/services/warehousing" },
    { name: "Insurance", href: "/services/insurance" },
    { name: "Moving Home", href: "/services/moving-home" }
  ],
  areas: [
    { name: "Dubai", href: "/areas/dubai" },
    { name: "Abu Dhabi", href: "/areas/abu-dhabi" },
    { name: "Sharjah", href: "/areas/sharjah" },
    { name: "Ajman", href: "/areas/ajman" },
    { name: "Ras Al Khaimah", href: "/areas/ras-al-khaimah" },
    { name: "Fujairah", href: "/areas/fujairah" },
    { name: "Umm Al Quwain", href: "/areas/umm-al-quwain" },
    { name: "Al Ain", href: "/areas/al-ain" }
  ],
  pakistanCities: [
    { name: "Karachi", href: "/pakistan-cargo-to-karachi" },
    { name: "Lahore", href: "/pakistan-cargo-to-lahore" },
    { name: "Islamabad", href: "/pakistan-cargo-to-islamabad" },
    { name: "Peshawar", href: "/pakistan-cargo-to-peshawar" },
    { name: "Quetta", href: "/pakistan-cargo-to-quetta" },
    { name: "Faisalabad", href: "/pakistan-cargo-to-faisalabad" },
    { name: "Multan", href: "/pakistan-cargo-to-multan" },
    { name: "Rawalpindi", href: "/pakistan-cargo-to-rawalpindi" }
  ]
};
