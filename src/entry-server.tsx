
import ReactDOMServer from 'react-dom/server';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routes } from './routes';
import { routeExists } from './utils/route-utils';

export async function render(url: string) {
  // Create a memory router for server-side rendering
  const router = createMemoryRouter(routes, {
    initialEntries: [url],
  });
  
  // Render the app to HTML using RouterProvider
  const html = ReactDOMServer.renderToString(
    <RouterProvider router={router} />
  );
  
  // Return the rendered HTML along with metadata about the route
  return {
    html,
    // This flag helps the prerender script know if this is a valid route or 404
    isValidRoute: routeExists(url, routes)
  };
}
