
import ReactDOMServer from 'react-dom/server';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from '@remix-run/router';
import { routes } from './routes';
import { routeExists } from './utils/route-utils';
import { createElement } from 'react';
import Layout from './components/layout/Layout';
import { Outlet } from 'react-router-dom';

export async function render(url: string) {
  // Create a context object for the router
  const context = {};
  
  // Create a static handler and router for server-side rendering
  const { query } = createStaticHandler(routes);
  const remixRequest = new Request(url);
  const staticContext = await query(remixRequest);
  const router = createStaticRouter(routes, staticContext);
  
  // Render the app to HTML using StaticRouterProvider
  const html = ReactDOMServer.renderToString(
    createElement(
      StaticRouterProvider,
      { 
        router,
        context: staticContext,
      }
    )
  );
  
  // Return the rendered HTML along with metadata about the route
  return {
    html,
    // This flag helps the prerender script know if this is a valid route or 404
    isValidRoute: routeExists(url, routes)
  };
}
