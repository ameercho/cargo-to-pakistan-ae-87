
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { routes } from './routes';
import { routeExists } from './utils/route-utils';
import { createElement } from 'react';
import Layout from './components/layout/Layout';
import { Outlet } from 'react-router-dom';

export async function render(url: string) {
  // Create a context object for the router
  const context = {};
  
  // Render the app to HTML using StaticRouter
  const html = ReactDOMServer.renderToString(
    createElement(
      StaticRouter,
      { location: url },
      createElement(Layout, null, createElement(Outlet))
    )
  );
  
  // Return the rendered HTML along with metadata about the route
  return {
    html,
    // This flag helps the prerender script know if this is a valid route or 404
    isValidRoute: routeExists(url, routes)
  };
}
