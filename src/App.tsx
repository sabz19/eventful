import React, { useEffect} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Routes/Home/Home';
import About from './Routes/About/About';
import EventDetails from './Routes/Event/EventDetails';
import './Components/Styles/App.css';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Home />,
    },
    {
        path:'/about',
        element:<About />,
    },
    {
        path:'/event/:eventId',
        element:<EventDetails />
    },
    {
        path:'/event',
        element:<EventDetails />
    }
]);

function App(){
    useEffect(() => {
        document.body.style.backgroundColor = 'darkpink'; // Replace 'lightblue' with your desired color
      }, []);

    return (
    <div>
        <RouterProvider router={router} />
        {/* <Navigation /> */}
    </div>
    );
    
};

export default App;