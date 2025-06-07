
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import { createElement } from 'react';
import Layout from './components/layout/Layout';
import { Outlet } from "react-router-dom";
import { getElement } from './routes';
import { routeExists } from './utils/route-utils';

// Enhanced meta data generation with unique content for each route
const getPageMeta = (url: string) => {
  console.log('Generating meta for URL:', url);
  
  const routes = {
    '/': {
      title: 'Cargo to Pakistan Dubai | #1 Professional Shipping Service UAE 2024',
      description: 'Dubai\'s leading cargo service to Pakistan. 10,000+ satisfied customers. Door-to-door delivery from Business Bay, Deira to all Pakistan cities.',
      keywords: 'cargo to pakistan dubai, dubai pakistan shipping, door to door cargo dubai, air cargo dubai pakistan, sea freight dubai'
    },
    
    // UAE to Pakistan route pages
    '/dubai-to-pakistan': {
      title: 'Dubai to Pakistan Cargo | Door-to-Door Delivery Service',
      description: 'Professional cargo shipping from Dubai to Pakistan with door-to-door pickup and delivery. Reliable, secure & affordable shipping solutions.',
      keywords: 'dubai to pakistan cargo, dubai pakistan shipping, door to door cargo dubai, dubai cargo services'
    },
    '/abu-dhabi-to-pakistan': {
      title: 'Abu Dhabi to Pakistan Cargo | Capital Emirate Shipping',
      description: 'Professional cargo services from Abu Dhabi to Pakistan with comprehensive door-to-door delivery and competitive rates.',
      keywords: 'abu dhabi to pakistan cargo, abu dhabi pakistan shipping, capital emirate cargo, abu dhabi shipping'
    },
    '/sharjah-to-pakistan': {
      title: 'Sharjah to Pakistan Cargo | Cultural Capital Shipping',
      description: 'Efficient cargo services from Sharjah to Pakistan with reliable delivery schedules and professional handling throughout.',
      keywords: 'sharjah to pakistan cargo, sharjah pakistan shipping, cultural capital cargo, sharjah shipping'
    },
    '/ajman-to-pakistan': {
      title: 'Ajman to Pakistan Cargo | Complete Door-to-Door Service',
      description: 'Complete cargo services from Ajman to Pakistan with professional collection and doorstep delivery across all major cities.',
      keywords: 'ajman to pakistan cargo, ajman pakistan shipping, door to door ajman, ajman cargo services'
    },
    
    // Pakistan destination pages with unique content
    '/pakistan-cargo-to-karachi': {
      title: 'Cargo to Karachi Pakistan | Port City Shipping Services',
      description: 'Reliable cargo shipping from UAE to Karachi, Pakistan\'s largest city and economic hub. Professional handling with competitive rates.',
      keywords: 'cargo to karachi, uae to karachi shipping, karachi cargo services, pakistan port city delivery'
    },
    '/pakistan-cargo-to-lahore': {
      title: 'Cargo to Lahore Pakistan | Cultural Capital Shipping',
      description: 'Professional cargo services from UAE to Lahore, Pakistan\'s cultural capital. Reliable delivery across Gulberg, Defence, and all areas.',
      keywords: 'cargo to lahore, uae to lahore shipping, lahore cargo services, pakistan cultural capital'
    },
    '/pakistan-cargo-to-islamabad': {
      title: 'Cargo to Islamabad Pakistan | Capital City Delivery',
      description: 'Cargo shipping services from UAE to Islamabad, Pakistan\'s federal capital. Professional handling with delivery to F-series sectors.',
      keywords: 'cargo to islamabad, uae to islamabad shipping, islamabad cargo services, pakistan capital delivery'
    },
    '/pakistan-cargo-to-peshawar': {
      title: 'Cargo to Peshawar Pakistan | Historic City Shipping',
      description: 'Professional cargo services from UAE to Peshawar with reliable delivery across Hayatabad, University Town, and all areas.',
      keywords: 'cargo to peshawar, uae to peshawar shipping, peshawar cargo services, khyber pakhtunkhwa delivery'
    },
    
    // Service pages with enhanced descriptions
    '/services/sea-freight': {
      title: 'Sea Freight to Pakistan | Cost-Effective Ocean Shipping UAE',
      description: 'Affordable sea freight services from UAE to Pakistan. Cost-effective ocean shipping for large cargo with reliable 15-20 day delivery.',
      keywords: 'sea freight pakistan, ocean shipping uae, cargo by sea, bulk shipping rates'
    },
    '/services/air-freight': {
      title: 'Air Freight to Pakistan | Fast Express Cargo Shipping UAE',
      description: 'Express air freight services from UAE to Pakistan. Fast, secure air cargo shipping for urgent shipments with 2-3 days delivery.',
      keywords: 'air freight pakistan, air cargo uae, express shipping, fast delivery pakistan'
    },
    '/services/courier-service': {
      title: 'Courier Service to Pakistan | Express Document Delivery UAE',
      description: 'Professional courier services from UAE to Pakistan. Fast, reliable express delivery for documents and small packages with tracking.',
      keywords: 'courier service pakistan, express delivery uae, document shipping, small package delivery'
    },
    '/services/full-container': {
      title: 'Full Container Load to Pakistan | FCL Shipping UAE',
      description: 'Full container load shipping from UAE to Pakistan. Dedicated container solutions for large volume cargo with secure handling.',
      keywords: 'full container load pakistan, FCL shipping uae, container cargo, bulk shipping'
    },
    
    // Area pages with local optimization
    '/areas/dubai': {
      title: 'Cargo to Pakistan from Dubai | Fast & Reliable Shipping 2024',
      description: 'Professional cargo shipping services from Dubai to Pakistan. Business Bay, Deira, Downtown coverage with door-to-door delivery.',
      keywords: 'dubai cargo pakistan, business bay shipping, deira freight, downtown cargo services'
    },
    '/areas/abu-dhabi': {
      title: 'Cargo to Pakistan from Abu Dhabi | Capital Emirate Service',
      description: 'Reliable cargo shipping from Abu Dhabi to Pakistan. Khalifa City, Corniche, Al Reem coverage with professional handling.',
      keywords: 'abu dhabi cargo pakistan, khalifa city shipping, corniche freight, capital emirate cargo'
    },
    '/areas/sharjah': {
      title: 'Cargo to Pakistan from Sharjah | Cultural Capital Shipping',
      description: 'Professional cargo services from Sharjah to Pakistan. Al Majaz, Rolla, Nahda coverage with reliable delivery schedules.',
      keywords: 'sharjah cargo pakistan, al majaz shipping, rolla freight, cultural capital cargo'
    },
    '/areas/ajman': {
      title: 'Cargo to Pakistan from Ajman | Complete Emirates Service',
      description: 'Cargo shipping services from Ajman to Pakistan. Al Nuaimiya, Corniche coverage with professional handling and delivery.',
      keywords: 'ajman cargo pakistan, al nuaimiya shipping, corniche freight, compact emirate service'
    }
  };

  const foundRoute = routes[url as keyof typeof routes];
  
  if (foundRoute) {
    console.log('Found specific route meta for:', url);
    return foundRoute;
  }

  // Generate dynamic meta for unmatched routes
  console.log('Generating dynamic meta for:', url);
  
  if (url.includes('pakistan-cargo-to-')) {
    const cityName = url.replace('/pakistan-cargo-to-', '').replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    return {
      title: `Cargo to ${cityName} Pakistan | Professional UAE Shipping Service`,
      description: `Professional cargo services from UAE to ${cityName}, Pakistan. Door-to-door delivery with reliable handling and competitive rates.`,
      keywords: `cargo to ${cityName.toLowerCase()}, uae to ${cityName.toLowerCase()}, ${cityName.toLowerCase()} shipping, pakistan cargo`
    };
  }
  
  if (url.includes('-to-pakistan')) {
    const originCity = url.replace('/', '').replace('-to-pakistan', '').replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    return {
      title: `${originCity} to Pakistan Cargo | Professional Shipping Service`,
      description: `Professional cargo services from ${originCity} to Pakistan with door-to-door delivery and competitive rates.`,
      keywords: `${originCity.toLowerCase()} to pakistan, ${originCity.toLowerCase()} cargo, ${originCity.toLowerCase()} shipping`
    };
  }

  // Default fallback
  return {
    title: 'Cargo to Pakistan from UAE | Professional Shipping Services',
    description: 'Professional cargo shipping services from UAE to Pakistan with competitive rates and reliable delivery to all major cities.',
    keywords: 'cargo to pakistan, uae pakistan shipping, professional cargo services, door to door delivery'
  };
};

export async function render(url: string) {
  try {
    console.log('Server rendering URL:', url);
    const meta = getPageMeta(url);
    console.log('Generated meta:', meta);
    
    const element = getElement(url);
    
    // Check if route exists
    const isValidRoute = routeExists(url, []);
    
    if (!isValidRoute || !element) {
      console.log('Invalid route:', url);
      return {
        html: '<div>Page not found</div>',
        meta: getPageMeta(url),
        isValidRoute: false
      };
    }
    
    // Render the specific page element
    const html = ReactDOMServer.renderToString(element);
    console.log('Successfully rendered:', url);
    
    return {
      html,
      meta,
      isValidRoute: true
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
