import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes'
import './index.css'

const container = document.getElementById('root')
if (!container) {
  throw new Error('Root container not found')
}

const root = ReactDOM.createRoot(container)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)