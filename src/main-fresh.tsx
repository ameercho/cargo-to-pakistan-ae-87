// Fresh entry point to bypass cache issues
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Ultra-minimal test component
const TestApp = () => {
  return (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#f0f0f0', 
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#333', fontSize: '24px' }}>✅ Fresh React App</h1>
      <p style={{ color: '#666', fontSize: '16px' }}>
        This is a completely fresh entry point to bypass caching issues.
      </p>
      <p style={{ color: '#666', fontSize: '14px' }}>
        Timestamp: {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
};

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<TestApp />);
} else {
  console.error('Root element not found!');
}