
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure React is properly loaded
console.log('React loaded:', React ? 'Yes' : 'No');

const root = document.getElementById("root")!;

// Add error handling for root creation
try {
  createRoot(root).render(<App />);
} catch (error) {
  console.error('Error creating React root:', error);
  // Fallback: try legacy ReactDOM if available
  document.body.innerHTML = `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <h1>Application Error</h1>
      <p>There was an error starting the application. Please refresh the page.</p>
      <button onclick="window.location.reload()">Refresh Page</button>
    </div>
  `;
}
