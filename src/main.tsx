
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Wait for DOM to be ready before initializing React
function initializeApp() {
  const root = document.getElementById("root");

  if (!root) {
    throw new Error('Root element not found');
  }

  console.log('Initializing React app...');

  const reactRoot = createRoot(root);
  reactRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log('React app initialized successfully');
}

// Wait for document ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
