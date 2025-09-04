// Completely minimal React test - no imports except React
const React = window.React || require('react');
const ReactDOM = window.ReactDOM || require('react-dom/client');

function MinimalApp() {
  return React.createElement('div', {
    style: { 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh'
    }
  }, [
    React.createElement('h1', { 
      key: 'title',
      style: { color: 'green' } 
    }, '✅ React Working - No Dependencies'),
    React.createElement('p', { 
      key: 'desc' 
    }, 'This is a completely isolated React component with zero dependencies.'),
    React.createElement('p', { 
      key: 'time' 
    }, `Loaded at: ${new Date().toLocaleTimeString()}`)
  ]);
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(React.createElement(MinimalApp));
}