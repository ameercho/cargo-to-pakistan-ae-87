import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Toaster } from '@/components/ui/toaster'
import './index.css'

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(container)
root.render(<App />)