
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from '@/components/layout/AppLayout'

// Import route configurations
import { mainRoutes } from './config/mainRoutes'
import { serviceRoutes } from './config/serviceRoutes'
import { areaRoutes } from './config/areaRoutes'
import { pakistanRoutes } from './config/pakistanRoutes'

// Helper function to create route elements with lazy loading
const createLazyRoute = (Component: any) => {
  return React.createElement(React.Suspense, 
    { fallback: React.createElement('div', { className: 'flex items-center justify-center min-h-screen' }, 'Loading...') },
    React.createElement(Component)
  );
};

// Convert route configs to actual routes
const convertRoutes = (routes: any[]) => {
  return routes.map(route => ({
    ...route,
    element: createLazyRoute(route.element)
  }));
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      // Main routes
      ...convertRoutes(mainRoutes),
      // Service routes
      ...convertRoutes(serviceRoutes),
      // Area routes  
      ...convertRoutes(areaRoutes),
      // Pakistan destination routes
      ...convertRoutes(pakistanRoutes),
    ],
  },
])

export { router }

export function getElement(path: string) {
  // Normalize the path
  const normalizedPath = path === '/' ? '/' : path.replace(/^\/+|\/+$/g, '');
  
  // Import components dynamically for SSR
  const Index = React.lazy(() => import('@/pages/Index'));
  const Services = React.lazy(() => import('@/pages/Services'));
  const About = React.lazy(() => import('@/pages/About'));
  const Contact = React.lazy(() => import('@/pages/Contact'));
  const FAQ = React.lazy(() => import('@/pages/FAQ'));
  const ServiceAreas = React.lazy(() => import('@/pages/ServiceAreas'));
  const NotFound = React.lazy(() => import('@/pages/NotFound'));
  
  // Main routes
  if (path === '/') return <Index />;
  if (path === '/services') return <Services />;
  if (path === '/about') return <About />;
  if (path === '/contact') return <Contact />;
  if (path === '/faq') return <FAQ />;
  if (path === '/areas' || path === '/service-areas') return <ServiceAreas />;
  
  return <NotFound />;
}
