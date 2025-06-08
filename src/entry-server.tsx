
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import { createElement } from 'react';
import Layout from './components/layout/Layout';
import { Outlet } from "react-router-dom";
import { getElement } from './routes';
import { routeExists } from './utils/route-utils';
import { getSEOData } from './config/seo-config';

export async function render(url: string) {
  try {
    console.log('Server rendering URL:', url);
    
    // Use centralized SEO configuration
    const meta = getSEOData(url);
    console.log('Generated server meta:', meta);
    
    const element = getElement(url);
    
    // Check if route exists
    const isValidRoute = routeExists(url, []);
    
    if (!isValidRoute || !element) {
      console.log('Invalid route:', url);
      return {
        html: '<div>Page not found</div>',
        meta: getSEOData('/404'),
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
      meta: getSEOData(url),
      isValidRoute: false
    };
  }
}
