import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Home from '../Components/Home/Home';
import Apps from '../Components/App/Apps';
import Installation from '../Components/Installation/Installation';
import AppDetails from '../AppDetails/AppDetails';



const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        hydrateFallbackElement: <div>Loading...</div>,
        children: [
            {
                path: '/',
           
                loader: () => fetch('/data.json'),
                Component: Home,
            },
            {
                path: '/apps',
                loader: () => fetch('data.json'),
                Component: Apps,
            },
            {
                path: '/apps/:id',
                loader: () => fetch('/data.json'),
                Component: AppDetails,
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