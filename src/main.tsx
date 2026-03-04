import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// 1. Import the Global Context Provider
import { ContactProvider } from './contexts/ContactContext'

// Import SEO cleanup utility
import './utils/seo-cleanup'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

const rootElement = document.getElementById("root")
if (!rootElement) {
  throw new Error("Root element not found")
}

const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* 2. Wrap the entire Router with ContactProvider */}
      <ContactProvider>
        <RouterProvider router={router} />
      </ContactProvider>
    </QueryClientProvider>
  </React.StrictMode>
)