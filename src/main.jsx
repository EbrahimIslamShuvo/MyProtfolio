import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './Root';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Resume from './Pages/Resume/Resume';
import Work from './Pages/Work/Work';
import Content from './Pages/Content/Content';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root> ,
        children: [
            {
                path: '/',
                element: <About></About>           
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/resume',
                element: <Resume></Resume>
            },
            {
                path: '/work',
                element: <Work></Work>
            },
            {
                path: '/content',
                element: <Content></Content>
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)