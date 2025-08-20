
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('main.tsx: React object:', React);
console.log('main.tsx: React version:', React.version);
console.log('main.tsx: createRoot function:', createRoot);

const root = document.getElementById("root")!;
console.log('main.tsx: Root element found:', !!root);

// Minimal setup to test React
try {
  createRoot(root).render(<App />);
  console.log('main.tsx: App rendered successfully');
} catch (error) {
  console.error('main.tsx: Error rendering app:', error);
}
