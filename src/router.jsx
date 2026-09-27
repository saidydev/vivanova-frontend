import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

// Import Layouts / Components / Pages
import AboutUs from './page/AboutUs';
import Services from './page/Services';
import Index from './pages/Index';
import Portfolio from './page/Portfolio';
import Contact from './page/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/about',
    element: <AboutUs />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/works',
    element: <Portfolio />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    // Redirect ikitokea mtu akaandika URL isiyokuwepo
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

export default router;