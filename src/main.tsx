
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initDataLayer } from './utils/gtm'

// Initialize Google Tag Manager dataLayer
initDataLayer();

const root = document.getElementById("root")!;

// Use createRoot for client-side rendering
createRoot(root).render(<App />);
