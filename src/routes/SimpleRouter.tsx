import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '@/components/layout/AppLayout'

// Import pages directly (no lazy loading for now)
import Index from '@/pages/Index'
import Services from '@/pages/Services'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import FAQ from '@/pages/FAQ'
import ServiceAreas from '@/pages/ServiceAreas'
import NotFound from '@/pages/NotFound'

// Area pages
import DubaiArea from '@/pages/areas/DubaiArea'
import AbuDhabiArea from '@/pages/areas/AbuDhabiArea'
import SharjahArea from '@/pages/areas/SharjahArea'
import AjmanArea from '@/pages/areas/AjmanArea'

export const simpleRouter = createBrowserRouter([
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
        path: 'areas/dubai',
        element: <DubaiArea />,
      },
      {
        path: 'areas/abu-dhabi',
        element: <AbuDhabiArea />,
      },
      {
        path: 'areas/sharjah',
        element: <SharjahArea />,
      },
      {
        path: 'areas/ajman',
        element: <AjmanArea />,
      },
      {
        path: '*',
        element: <NotFound />,
      }
    ],
  },
])