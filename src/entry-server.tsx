
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { routes } from './routes';
import { routeExists } from './utils/route-utils';

export async function render(url: string) {
  // Since TypeScript is having issues with the server module imports,
  // we'll use a simpler approach for SSR
  
  // Render the app to HTML using the standard StaticRouter for compatibility
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  
  // Return the rendered HTML along with metadata about the route
  return {
    html,
    // This flag helps the prerender script know if this is a valid route or 404
    isValidRoute: routeExists(url, routes)
  };
}
