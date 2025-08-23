import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from '@/components/layout/AppLayout'
import { Toaster } from '@/components/ui/toaster'

// Direct imports without lazy loading
import Index from '@/pages/Index'
import Services from '@/pages/Services'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import FAQ from '@/pages/FAQ'
import ServiceAreas from '@/pages/ServiceAreas'
import NotFound from '@/pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'faq',
        element: <FAQ />,
      },
      {
        path: 'service-areas',
        element: <ServiceAreas />,
      },
      {
        path: 'areas',
        element: <ServiceAreas />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App