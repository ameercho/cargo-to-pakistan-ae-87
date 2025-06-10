
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure React is available globally and properly initialized
if (typeof window !== 'undefined') {
  (window as any).React = React;
  // Ensure all React hooks are available
  (window as any).ReactDOM = { createRoot };
}

const root = document.getElementById("root");

if (!root) {
  throw new Error('Root element not found');
}

// Use createRoot for client-side rendering
try {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error('Failed to render app:', error);
  // Fallback without StrictMode if there are issues
  createRoot(root).render(<App />);
}
