// Fresh entry point to bypass cache issues - v2
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

console.log('🔥 FRESH MAIN LOADED - Cache busted!', Date.now());

// Ultra-minimal test component
const TestApp = () => {
  console.log('🚀 TestApp rendering');
  
  return (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#e8f5e8', 
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      border: '4px solid #4CAF50'
    }}>
      <h1 style={{ color: '#2E7D32', fontSize: '32px', textAlign: 'center' }}>
        ✅ SUCCESS: Fresh React App Working!
      </h1>
      <p style={{ color: '#388E3C', fontSize: '18px', textAlign: 'center' }}>
        🎉 Service worker disabled and cache cleared!
      </p>
      <p style={{ color: '#66BB6A', fontSize: '16px', textAlign: 'center' }}>
        Cache bust timestamp: {Date.now()}
      </p>
      <p style={{ color: '#81C784', fontSize: '14px', textAlign: 'center' }}>
        If you see this green page, React is working properly.
      </p>
    </div>
  );
};

const root = document.getElementById("root");
if (root) {
  console.log('📍 Root element found, rendering app...');
  createRoot(root).render(<TestApp />);
  console.log('✅ App rendered successfully!');
} else {
  console.error('❌ Root element not found!');
}