
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure React is available globally
if (typeof window !== 'undefined') {
  (window as any).React = React;
}

const root = document.getElementById("root")!;

// Use createRoot for client-side rendering with error boundary
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
