
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import { createElement } from 'react';
import Layout from './components/layout/Layout';
import { Outlet } from "react-router-dom";
import { router } from './routes';
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
    // Pakistan destinations
    '/pakistan-cargo-to-karachi': {
      title: 'Cargo to Karachi Pakistan | Professional Shipping Services',
      description: 'Reliable cargo shipping from UAE to Karachi, Pakistan. Professional handling, competitive rates & door-to-door delivery to Pakistan\'s largest city.',
      keywords: 'cargo to karachi, uae to karachi, karachi shipping, pakistan port city'
    },
    '/pakistan-cargo-to-lahore': {
      title: 'Cargo to Lahore Pakistan | Cultural Capital Shipping',
      description: 'Professional cargo services from UAE to Lahore, Pakistan\'s cultural capital. Reliable delivery with competitive rates and secure handling.',
      keywords: 'cargo to lahore, uae to lahore, lahore shipping, pakistan cultural capital'
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
    
    // Render the app to HTML using StaticRouter
    const html = ReactDOMServer.renderToString(
      createElement(
        StaticRouter,
        { location: url },
        createElement(Layout, null, createElement(Outlet, null))
      )
    );
    
    // Check if route exists
    const isValidRoute = routeExists(url, router.routes);
    
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
