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
                loader: ()=> fetch('data.json'),
                Component: Home,
            },
            {
                path: '/apps',
                loader: ()=> fetch('data.json'),
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