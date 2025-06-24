import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { path: '/about', element: <About></About> },
            { path: '/resume', element: <Resume /> },
            { path: '/work', element: <Work /> },
            { path: '/content', element: <Content /> },
            { path: '/contact', element: <Contact /> },
        ]
    }
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
