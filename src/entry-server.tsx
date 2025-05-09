
import ReactDOMServer from 'react-dom/server';
import { createStaticRouter, StaticRouterProvider } from 'react-router-dom/server.js';
import { routes } from './routes';
import { routeExists } from './utils/route-utils';

export async function render(url: string) {
  // Create a static router for server-side rendering
  const router = createStaticRouter(routes, {
    basename: "",
    location: url
  });
  
  // Render the app to HTML using StaticRouterProvider
  const html = ReactDOMServer.renderToString(
    <StaticRouterProvider
      router={router}
      context={{}}
    />
  );
  
  // Return the rendered HTML along with metadata about the route
  return {
    html,
    // This flag helps the prerender script know if this is a valid route or 404
    isValidRoute: routeExists(url, routes)
  };
}
