
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
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

export function render(url: string) {
  // Render the app to HTML
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  
  // Return the rendered HTML along with metadata about the route
  return {
    html,
    // This flag helps the prerender script know if this is a valid route or 404
    isValidRoute: routeExists(url)
  };
}
