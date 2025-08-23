import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from '@/components/layout/AppLayout'

// Import pages
import Index from '@/pages/Index'
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
        path: 'areas',
        element: <ServiceAreas />,
      },
      {
        path: 'service-areas',
        element: <ServiceAreas />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export { router }

export function getElement(path: string) {
  if (path === '/') return <Index />;
  if (path === '/areas' || path === '/service-areas') return <ServiceAreas />;
  return <NotFound />;
}