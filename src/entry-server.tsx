
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router/server';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

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
