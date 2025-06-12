
import React from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'
import { initializeAnalytics } from './services/analytics'

// Initialize analytics services
initializeAnalytics();

const root = document.getElementById("root")!;

// Use createRoot for client-side rendering with StrictMode and HelmetProvider
createRoot(root).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
