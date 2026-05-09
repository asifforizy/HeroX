import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Home from '../Components/Home/Home';
import Apps from '../Components/App/Apps';
import Installation from '../Components/Installation/Installation';


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
            {
                path: '/apps',
                Component: Apps,
            },
        {
                path: '/installation',
                index: true,
                Component: Installation,
            },
        
        
        
        ]
    },
]);


export default router;