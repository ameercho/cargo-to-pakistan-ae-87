import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root")
if (!rootElement) {
  throw new Error("Root element not found")
}

// Ensure React is properly loaded before rendering
if (typeof React !== 'object' || React === null) {
  throw new Error("React is not properly loaded")
}

const root = ReactDOM.createRoot(rootElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)