import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Minimal React component
function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', backgroundColor: '#f0f0f0' }}>
      <h1>Cargo to Pakistan - React Test</h1>
      <p>If you see this styled page, React is working!</p>
      <button onClick={() => alert('React event handlers work!')}>Test React Button</button>
    </div>
  )
}

// Try to initialize React
try {
  const container = document.getElementById('root')
  if (!container) {
    throw new Error('Root container not found')
  }
  
  console.log('Attempting to create React root...')
  const root = ReactDOM.createRoot(container)
  console.log('React root created successfully')
  
  root.render(<App />)
  console.log('React app rendered successfully')
  
} catch (error) {
  console.error('React initialization failed:', error)
  
  // Fallback to DOM if React fails
  const container = document.getElementById('root')
  if (container) {
    container.innerHTML = `
      <div style="padding: 20px; font-family: Arial; background: #ffebee;">
        <h1>React Failed - Fallback Mode</h1>
        <p>React initialization error: ${error.message}</p>
        <p>Check console for details</p>
      </div>
    `
  }
}