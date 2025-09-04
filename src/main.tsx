import React from 'react'
import ReactDOM from 'react-dom/client'

// Minimal test component without any external dependencies
const MinimalApp = () => {
  console.log('React instance:', React);
  console.log('useContext:', React.useContext);
  console.log('useRef:', React.useRef);
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Minimal React Test</h1>
      <p>If you see this, React is working correctly.</p>
      <p>Check console for React instance details.</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);
root.render(<MinimalApp />);
