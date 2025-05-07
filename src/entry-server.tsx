
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
// Fix import of react-helmet-async to work with CommonJS module
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
