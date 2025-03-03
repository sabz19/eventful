import React from 'react';
import { createBrowserRouter, RouterProvider, Route, BrowserRouter } from 'react-router-dom';
import Home from './Routes/Home/Home';
import About from './Routes/About/About';
import Navigation from './Routes/Navigation';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Home />,
    },
    {
        path:'/about',
        element:<About />,
    },
]);

function App(){
    return (
    <div>
        <RouterProvider router={router} />
        <Navigation />
    </div>
    );
    
};

export default App;