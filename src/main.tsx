
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

  // Ensure React is fully loaded and available
  if (typeof React === 'undefined' || !React) {
    console.error('React is not available');
    return;
  }

  console.log('Initializing React app...');

  try {
    // Create root and render app
    const reactRoot = createRoot(root);
    reactRoot.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('React app initialized successfully');
  } catch (error) {
    console.error('Failed to render app:', error);
    // Fallback without StrictMode
    try {
      const reactRoot = createRoot(root);
      reactRoot.render(<App />);
    } catch (fallbackError) {
      console.error('Fallback render also failed:', fallbackError);
    }
  }
}

// Wait for document ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
