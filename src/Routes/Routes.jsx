import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Home from '../Components/Home/Home';


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: '/',
                index: true,
                Component: Home,
            },
        
        
        ]
    },
]);


export default router;