import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Very basic test component
const TestApp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Test App Loading</h1>
    </div>
  )
}

const rootElement = document.getElementById("root")
if (!rootElement) {
  throw new Error("Root element not found")
}

const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>
)