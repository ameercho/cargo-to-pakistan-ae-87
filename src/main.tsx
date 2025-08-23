import './index.css'

// Create the most basic React app possible
function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Cargo to Pakistan - Basic Test</h1>
      <p>If you can see this, React is working!</p>
    </div>
  )
}

// Use basic DOM rendering without React imports to test
const container = document.getElementById('root')
if (container) {
  container.innerHTML = `
    <div style="padding: 20px; font-family: Arial;">
      <h1>Cargo to Pakistan - Direct DOM Test</h1>
      <p>Testing without React first...</p>
      <button onclick="alert('Basic JS works!')">Test Button</button>
    </div>
  `
}