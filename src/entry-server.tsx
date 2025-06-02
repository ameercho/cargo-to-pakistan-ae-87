
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import { createElement } from 'react';
import Layout from './components/layout/Layout';
import { Outlet } from "react-router-dom";
import { router } from './routes';
import { routeExists } from './utils/route-utils';

// Meta data for different pages
const getPageMeta = (url: string) => {
  const routes = {
    '/': {
      title: 'Cargo to Pakistan - Reliable Shipping Services from UAE',
      description: 'Professional cargo shipping services from UAE to Pakistan. Sea freight, air freight, door-to-door delivery with competitive rates and reliable tracking.'
    },
    '/services': {
      title: 'Cargo Services UAE to Pakistan | Sea & Air Freight',
      description: 'Complete cargo services from UAE to Pakistan including sea freight, air freight, full container loads, and express courier services.'
    },
    '/about': {
      title: 'About Cargo to Pakistan - Professional Logistics Company',
      description: 'Learn about our professional cargo shipping company specializing in UAE to Pakistan logistics with years of experience in international shipping.'
    },
    '/contact': {
      title: 'Contact Cargo to Pakistan - Get Shipping Quote',
      description: 'Contact our cargo shipping experts for quotes and inquiries. Professional customer service for all your UAE to Pakistan shipping needs.'
    },
    '/service-areas': {
      title: 'Service Areas - UAE to Pakistan Cargo Coverage',
      description: 'Complete coverage across UAE and Pakistan with door-to-door delivery options in all major cities and remote areas.'
    }
  };

  return routes[url] || {
    title: 'Cargo to Pakistan - Professional Shipping Services',
    description: 'Professional cargo shipping services from UAE to Pakistan with competitive rates and reliable delivery.'
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
