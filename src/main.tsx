import React from 'react'
import ReactDOM from 'react-dom/client'

function TestApp() {
  return React.createElement('div', null, 'React Test - No CSS')
}

const rootElement = document.getElementById("root")
if (!rootElement) {
  throw new Error("Root element not found")
}

const root = ReactDOM.createRoot(rootElement)
root.render(React.createElement(TestApp))