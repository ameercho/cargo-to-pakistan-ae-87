
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure React is available globally for development
if (typeof window !== 'undefined') {
  (window as any).React = React;
}

const root = document.getElementById("root")!;

// Use createRoot for client-side rendering
createRoot(root).render(<App />);
