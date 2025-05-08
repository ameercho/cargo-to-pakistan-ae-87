
import ReactDOMServer from 'react-dom/server';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router-dom/server';
import App from './App';
import { routes } from './routes';

// Helper to check if a route exists in our route configuration
const routeExists = (path: string): boolean => {
  // Remove trailing slash for comparison (except for root path)
  const normalizedPath = path === '/' ? path : path.replace(/\/$/, '');
  
  // Check if the path exists in our defined routes
  return routes.some(route => {
    if (route.path === '*') return false; // Skip catch-all routes
    return route.path === normalizedPath || route.path + '/' === path;
  });
};

export async function render(url: string) {
  // Create a static handler for the routes
  const { query, dataRoutes } = createStaticHandler(routes);
  
  // Create a request object from the URL
  const request = new Request(url);
  
  // Query the routes to get the route matches and context
  const context = await query(request);
  
  // Create a static router with the routes and context
  const router = createStaticRouter(dataRoutes, context);
  
  // Render the app to HTML
  const html = ReactDOMServer.renderToString(
    <StaticRouterProvider
      router={router}
      context={context}
    />
  );
  
  // Return the rendered HTML along with metadata about the route
  return {
    html,
    // This flag helps the prerender script know if this is a valid route or 404
    isValidRoute: routeExists(url)
  };
}
