import React from 'react'
import ReactDOM from 'react-dom/client'

// Debug React loading
console.log('React object:', React);
console.log('React.useContext:', React?.useContext);
console.log('React.useRef:', React?.useRef);

if (!React || typeof React.useContext !== 'function') {
  console.error('React is not properly loaded!', React);
}

function SimpleTest() {
  console.log('Rendering SimpleTest component');
  return React.createElement('div', { 
    style: { padding: '20px', fontSize: '18px' } 
  }, 'React is working! Check console for debug info.');
}

const rootElement = document.getElementById("root")
if (!rootElement) {
  throw new Error("Root element not found")
}

const root = ReactDOM.createRoot(rootElement)
root.render(React.createElement(SimpleTest))