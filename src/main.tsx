
import React from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root")!;

// Use createRoot for client-side rendering with HelmetProvider
createRoot(root).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
