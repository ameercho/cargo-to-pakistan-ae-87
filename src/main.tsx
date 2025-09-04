import React from 'react'
import ReactDOM from 'react-dom/client'

// Simple test component to verify React is working
function TestApp() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'green' }}>✅ React is Working!</h1>
      <p>This confirms the React instance is functioning correctly.</p>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
      <p>No router components loaded.</p>
    </div>
  )
}

const rootElement = document.getElementById("root")
if (!rootElement) {
  throw new Error("Root element not found")
}

const root = ReactDOM.createRoot(rootElement)

root.render(<TestApp />)