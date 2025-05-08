
import ReactDOMServer from 'react-dom/server';
import { StaticRouterProvider, createStaticRouter, createStaticHandler } from 'react-router-dom/server';
import App from './App';
import { routes } from './routes';
import { routeExists } from './utils/route-utils';

export async function render(url: string) {
  // Since TypeScript is having issues with the server module imports,
  // we'll use a simpler approach for SSR
  
  // Render the app to HTML using the appropriate StaticRouter components for React Router v7
  const html = ReactDOMServer.renderToString(
    <StaticRouterProvider
      router={createStaticRouter(routes, {
        basename: "",
        location: url
      })}
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
