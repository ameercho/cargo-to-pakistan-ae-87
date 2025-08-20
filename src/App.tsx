
import React from "react";

console.log('App.tsx: React object:', React);
console.log('App.tsx: React hooks available:', {
  useEffect: !!React.useEffect,
  useState: !!React.useState,
  useContext: !!React.useContext
});

// Minimal test component to verify React is working
const App: React.FC = () => {
  console.log('App.tsx: Component rendering');
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Test</h1>
      <p>If you can see this, React is working!</p>
      <p>Check console for debug logs</p>
    </div>
  );
};

export default App;
