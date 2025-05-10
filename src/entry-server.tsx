
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import { createElement } from 'react';
import Layout from './components/layout/Layout';
import { Outlet } from "react-router-dom";
import { router } from './routes';
import { routeExists } from './utils/route-utils';

export async function render(url: string) {
  // Create a context object for the router
  const context = {};
  
  // Render the app to HTML using StaticRouter from react-router-dom/server
  // This is the recommended approach for server-side rendering with React Router
  const html = ReactDOMServer.renderToString(
    createElement(
      StaticRouter,
      { location: url },
      createElement(Layout, null, createElement(Outlet, null))
    )
  );
  
  // Return the rendered HTML along with metadata about the route
  return {
    html,
    // This flag helps the prerender script know if this is a valid route or 404
    isValidRoute: routeExists(url, router.routes)
  };
}
