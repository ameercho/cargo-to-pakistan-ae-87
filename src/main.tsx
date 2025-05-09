
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root")!;

// Use createRoot for client-side rendering
createRoot(root).render(<App />);
