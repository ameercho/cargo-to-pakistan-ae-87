
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
import App from './App';
import pkg from 'react-helmet-async';
const { HelmetProvider } = pkg;

export function render(url: string) {
  const helmetContext = {};
  
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </StaticRouter>
  );
  
  return html;
}
