
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import { createElement } from 'react';
import Layout from './components/layout/Layout';
import { Outlet } from "react-router-dom";
import { getElement } from './routes';
import { routeExists } from './utils/route-utils';

// Enhanced meta data for different pages with unique content
const getPageMeta = (url: string) => {
  const routes = {
    '/': {
      title: 'Cargo to Pakistan - Professional Shipping Services from UAE',
      description: 'Leading cargo shipping company from UAE to Pakistan. Door-to-door delivery, competitive rates, professional handling. Sea freight, air freight, courier services available.',
      keywords: 'cargo to pakistan, uae to pakistan shipping, cargo services, sea freight, air freight'
    },
    '/services': {
      title: 'Cargo Services from UAE to Pakistan | Sea Freight, Air Freight & More',
      description: 'Comprehensive cargo shipping services from UAE to Pakistan. Sea freight, air freight, courier services, packaging, and full container loads with door-to-door delivery.',
      keywords: 'cargo services, UAE to Pakistan shipping, sea freight, air freight, courier service, full container load'
    },
    '/about': {
      title: 'About Cargo to Pakistan - Professional Logistics Company UAE',
      description: 'Learn about our professional cargo shipping company specializing in UAE to Pakistan logistics with years of experience, reliable service and customer satisfaction.',
      keywords: 'about cargo to pakistan, logistics company uae, shipping company, cargo experience'
    },
    '/contact': {
      title: 'Contact Cargo to Pakistan - Get Free Shipping Quote',
      description: 'Contact our cargo shipping experts for free quotes and shipping inquiries. Professional customer service for all your UAE to Pakistan cargo needs.',
      keywords: 'contact cargo to pakistan, shipping quote, cargo inquiry, customer service'
    },
    '/service-areas': {
      title: 'Service Areas - UAE to Pakistan Cargo Coverage Map',
      description: 'Complete cargo service coverage across UAE and Pakistan with door-to-door delivery options in all major cities and remote areas.',
      keywords: 'service areas, uae pakistan coverage, cargo delivery areas, shipping locations'
    },
    '/faq': {
      title: 'Frequently Asked Questions - Cargo to Pakistan',
      description: 'Get answers to common questions about shipping cargo from UAE to Pakistan including rates, delivery times, packaging requirements and customs procedures.',
      keywords: 'cargo faq, shipping questions, pakistan cargo help, delivery information'
    },
    // Service pages
    '/services/sea-freight': {
      title: 'Sea Freight to Pakistan | Cost-Effective Ocean Shipping',
      description: 'Affordable sea freight services from UAE to Pakistan. Cost-effective ocean shipping for large cargo with reliable delivery schedules.',
      keywords: 'sea freight pakistan, ocean shipping, cargo by sea, bulk shipping'
    },
    '/services/air-freight': {
      title: 'Air Freight to Pakistan | Fast Cargo Shipping',
      description: 'Express air freight services from UAE to Pakistan. Fast, secure air cargo shipping for urgent and time-sensitive shipments.',
      keywords: 'air freight pakistan, air cargo, express shipping, fast delivery'
    },
    '/services/courier-service': {
      title: 'Courier Service to Pakistan | Express Delivery',
      description: 'Professional courier services from UAE to Pakistan. Fast, reliable express delivery for documents and small packages.',
      keywords: 'courier service pakistan, express delivery, document shipping, small package delivery'
    },
    '/services/full-container': {
      title: 'Full Container Load to Pakistan | FCL Shipping',
      description: 'Full container load shipping from UAE to Pakistan. Dedicated container solutions for large volume cargo with secure handling.',
      keywords: 'full container load, FCL shipping, container cargo, bulk shipping'
    },
    '/services/packaging': {
      title: 'Professional Packaging Services | Cargo to Pakistan',
      description: 'Expert packaging services for cargo shipments to Pakistan. Professional packing materials and techniques for safe delivery.',
      keywords: 'packaging services, cargo packing, professional packaging, safe shipping'
    },
    '/services/insurance': {
      title: 'Cargo Insurance for Pakistan Shipments | Protection Coverage',
      description: 'Comprehensive cargo insurance options for shipments to Pakistan. Protect your valuable cargo with our insurance coverage.',
      keywords: 'cargo insurance, shipping insurance, pakistan cargo protection, shipment coverage'
    },
    '/services/moving-home': {
      title: 'Moving Home to Pakistan | Household Relocation Services',
      description: 'Complete household moving services from UAE to Pakistan. Professional relocation assistance for families and individuals.',
      keywords: 'moving home pakistan, household relocation, family moving, home shifting'
    },
    // Area pages
    '/areas/dubai': {
      title: 'Cargo to Pakistan from Dubai | Fast & Reliable Shipping',
      description: 'Professional cargo shipping services from Dubai to Pakistan. Fast, reliable & affordable rates with door-to-door delivery options.',
      keywords: 'dubai cargo, pakistan shipping, dubai to pakistan, cargo services dubai'
    },
    '/areas/abu-dhabi': {
      title: 'Cargo to Pakistan from Abu Dhabi | Professional Service',
      description: 'Reliable cargo shipping from Abu Dhabi to Pakistan with door-to-door service. Professional handling and competitive rates.',
      keywords: 'abu dhabi cargo, pakistan shipping, abu dhabi to pakistan, cargo services abu dhabi'
    },
    '/areas/sharjah': {
      title: 'Cargo to Pakistan from Sharjah | Cultural Capital Shipping',
      description: 'Professional cargo services from Sharjah to Pakistan. Reliable delivery with competitive rates and secure handling.',
      keywords: 'sharjah cargo, pakistan shipping, sharjah to pakistan, cargo services sharjah'
    },
    '/areas/ajman': {
      title: 'Cargo to Pakistan from Ajman | Smallest Emirate Service',
      description: 'Cargo shipping services from Ajman to Pakistan with professional handling and door-to-door delivery options.',
      keywords: 'ajman cargo, pakistan shipping, ajman to pakistan, cargo services ajman'
    },
    '/areas/ras-al-khaimah': {
      title: 'Cargo to Pakistan from Ras Al Khaimah | Northern Emirates',
      description: 'Professional cargo shipping from Ras Al Khaimah to Pakistan with reliable delivery and competitive pricing.',
      keywords: 'ras al khaimah cargo, pakistan shipping, rak to pakistan, northern emirates cargo'
    },
    '/areas/fujairah': {
      title: 'Cargo to Pakistan from Fujairah | East Coast Shipping',
      description: 'Cargo services from Fujairah to Pakistan with professional handling and reliable delivery schedules.',
      keywords: 'fujairah cargo, pakistan shipping, fujairah to pakistan, east coast shipping'
    },
    '/areas/umm-al-quwain': {
      title: 'Cargo to Pakistan from Umm Al Quwain | Complete Coverage',
      description: 'Professional cargo shipping from Umm Al Quwain to Pakistan with door-to-door service and competitive rates.',
      keywords: 'umm al quwain cargo, pakistan shipping, uaq to pakistan, complete coverage'
    },
    '/areas/al-ain': {
      title: 'Cargo to Pakistan from Al Ain | Garden City Service',
      description: 'Reliable cargo shipping services from Al Ain to Pakistan with professional handling and timely delivery.',
      keywords: 'al ain cargo, pakistan shipping, al ain to pakistan, garden city cargo'
    },
    // Pakistan destinations
    '/pakistan-cargo-to-karachi': {
      title: 'Cargo to Karachi Pakistan | Port City Shipping Services',
      description: 'Reliable cargo shipping from UAE to Karachi, Pakistan. Professional handling, competitive rates & door-to-door delivery to Pakistan\'s largest city.',
      keywords: 'cargo to karachi, uae to karachi, karachi shipping, pakistan port city'
    },
    '/pakistan-cargo-to-lahore': {
      title: 'Cargo to Lahore Pakistan | Cultural Capital Shipping',
      description: 'Professional cargo services from UAE to Lahore, Pakistan\'s cultural capital. Reliable delivery with competitive rates and secure handling.',
      keywords: 'cargo to lahore, uae to lahore, lahore shipping, pakistan cultural capital'
    },
    '/pakistan-cargo-to-islamabad': {
      title: 'Cargo to Islamabad Pakistan | Capital City Delivery',
      description: 'Cargo shipping services from UAE to Islamabad, Pakistan\'s capital. Professional handling and reliable delivery.',
      keywords: 'cargo to islamabad, uae to islamabad, islamabad shipping, pakistan capital'
    },
    '/pakistan-cargo-to-peshawar': {
      title: 'Cargo to Peshawar Pakistan | Historic City Shipping',
      description: 'Professional cargo services from UAE to Peshawar with reliable delivery and competitive rates.',
      keywords: 'cargo to peshawar, uae to peshawar, peshawar shipping, khyber pakhtunkhwa'
    },
    '/pakistan-cargo-to-quetta': {
      title: 'Cargo to Quetta Pakistan | Balochistan Capital Shipping',
      description: 'Cargo shipping from UAE to Quetta, Balochistan with professional handling and secure delivery.',
      keywords: 'cargo to quetta, uae to quetta, quetta shipping, balochistan cargo'
    },
    '/pakistan-cargo-to-faisalabad': {
      title: 'Cargo to Faisalabad Pakistan | Textile Hub Shipping',
      description: 'Professional cargo services from UAE to Faisalabad, Pakistan\'s textile hub with reliable delivery.',
      keywords: 'cargo to faisalabad, uae to faisalabad, faisalabad shipping, textile city'
    },
    '/pakistan-cargo-to-multan': {
      title: 'Cargo to Multan Pakistan | City of Saints Shipping',
      description: 'Cargo shipping services from UAE to Multan with professional handling and competitive rates.',
      keywords: 'cargo to multan, uae to multan, multan shipping, city of saints'
    },
    '/pakistan-cargo-to-sialkot': {
      title: 'Cargo to Sialkot Pakistan | Sports Goods Hub Shipping',
      description: 'Professional cargo services from UAE to Sialkot with reliable delivery and secure handling.',
      keywords: 'cargo to sialkot, uae to sialkot, sialkot shipping, sports goods'
    },
    '/pakistan-cargo-to-rawalpindi': {
      title: 'Cargo to Rawalpindi Pakistan | Twin City Shipping',
      description: 'Cargo shipping from UAE to Rawalpindi with professional handling and door-to-door delivery.',
      keywords: 'cargo to rawalpindi, uae to rawalpindi, rawalpindi shipping, twin city'
    },
    '/pakistan-cargo-to-gujranwala': {
      title: 'Cargo to Gujranwala Pakistan | Industrial City Shipping',
      description: 'Professional cargo services from UAE to Gujranwala with reliable delivery and competitive rates.',
      keywords: 'cargo to gujranwala, uae to gujranwala, gujranwala shipping, industrial city'
    },
    '/pakistan-cargo-to-hyderabad': {
      title: 'Cargo to Hyderabad Pakistan | Sindh Province Shipping',
      description: 'Cargo shipping services from UAE to Hyderabad, Sindh with professional handling.',
      keywords: 'cargo to hyderabad, uae to hyderabad, hyderabad shipping, sindh province'
    },
    '/pakistan-cargo-to-bahawalpur': {
      title: 'Cargo to Bahawalpur Pakistan | Historic City Shipping',
      description: 'Professional cargo services from UAE to Bahawalpur with reliable delivery.',
      keywords: 'cargo to bahawalpur, uae to bahawalpur, bahawalpur shipping, punjab south'
    },
    '/pakistan-cargo-to-sargoda': {
      title: 'Cargo to Sargodha Pakistan | Agricultural Hub Shipping',
      description: 'Cargo shipping from UAE to Sargodha with professional handling and secure delivery.',
      keywords: 'cargo to sargodha, uae to sargodha, sargodha shipping, agricultural hub'
    },
    '/pakistan-cargo-to-sukkur': {
      title: 'Cargo to Sukkur Pakistan | Indus River City Shipping',
      description: 'Professional cargo services from UAE to Sukkur with reliable delivery.',
      keywords: 'cargo to sukkur, uae to sukkur, sukkur shipping, indus river'
    },
    '/pakistan-cargo-to-larkana': {
      title: 'Cargo to Larkana Pakistan | Historic Sindh Shipping',
      description: 'Cargo shipping services from UAE to Larkana with professional handling.',
      keywords: 'cargo to larkana, uae to larkana, larkana shipping, sindh historic'
    },
    '/pakistan-cargo-to-sheikhupura': {
      title: 'Cargo to Sheikhupura Pakistan | Punjab City Shipping',
      description: 'Professional cargo services from UAE to Sheikhupura with reliable delivery.',
      keywords: 'cargo to sheikhupura, uae to sheikhupura, sheikhupura shipping, punjab city'
    },
    // Route pages
    '/dubai-to-pakistan': {
      title: 'Dubai to Pakistan Cargo | Door-to-Door Delivery Service',
      description: 'Comprehensive cargo service from Dubai to Pakistan with door-to-door pickup and delivery. Reliable, secure & affordable shipping solutions.',
      keywords: 'dubai to pakistan, cargo from dubai, dubai pakistan shipping'
    },
    '/abu-dhabi-to-pakistan': {
      title: 'Abu Dhabi to Pakistan Cargo | Capital Emirate Shipping',
      description: 'Professional cargo services from Abu Dhabi to Pakistan with door-to-door delivery and competitive rates.',
      keywords: 'abu dhabi to pakistan, cargo from abu dhabi, capital emirate shipping'
    },
    '/sharjah-to-pakistan': {
      title: 'Sharjah to Pakistan Cargo | Cultural Capital Shipping',
      description: 'Cargo shipping from Sharjah to Pakistan with professional handling and reliable delivery.',
      keywords: 'sharjah to pakistan, cargo from sharjah, cultural capital shipping'
    },
    '/ajman-to-pakistan': {
      title: 'Ajman to Pakistan Cargo | Smallest Emirate Service',
      description: 'Professional cargo services from Ajman to Pakistan with door-to-door delivery.',
      keywords: 'ajman to pakistan, cargo from ajman, smallest emirate'
    }
  };

  // Default meta for unmatched routes
  return routes[url] || {
    title: 'Cargo to Pakistan - Professional Shipping Services',
    description: 'Professional cargo shipping services from UAE to Pakistan with competitive rates and reliable delivery.',
    keywords: 'cargo to pakistan, shipping services, uae pakistan cargo'
  };
};

export async function render(url: string) {
  try {
    const meta = getPageMeta(url);
    const element = getElement(url);
    
    // Check if route exists
    const isValidRoute = routeExists(url, []);
    
    if (!isValidRoute || !element) {
      return {
        html: '<div>Page not found</div>',
        meta: getPageMeta(url),
        isValidRoute: false
      };
    }
    
    // Render the specific page element
    const html = ReactDOMServer.renderToString(element);
    
    return {
      html,
      meta,
      isValidRoute
    };
  } catch (error) {
    console.error(`Error rendering ${url}:`, error);
    return {
      html: '<div>Error rendering page</div>',
      meta: getPageMeta(url),
      isValidRoute: false
    };
  }
}
