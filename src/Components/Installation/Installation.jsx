import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import download from '../../assets/icon-downloads.png';
import star from '../../assets/icon-ratings.png';
import { removeApp } from '../../Utils/storage';

const Installation = () => {
    const loaderData = useLoaderData();
    const [installedApps, setInstalledApps] = useState(loaderData);

    const handleRemove = (id) => {
        removeApp(id);                                         
        setInstalledApps(prev => prev.filter(a => a.id != id)); 
    };

    if (installedApps.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-screen gap-4">
                <h1 className="text-4xl font-bold text-gray-500">No Apps Installed</h1>
                <p className="text-gray-400">Go install some apps first!</p>
                <a href="/apps" className="btn btn-primary">Browse Apps</a>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-8 space-y-4">
            <h1 className='text-5xl font-bold text-center mt-15 mb-5'>Your Installed Apps</h1>
            <p className='text-sm sm:text-base text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>

            {installedApps.map(app => (
                <div key={app.id} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                    <img src={app.image} alt={app.title} className="w-16 h-16 rounded-xl object-cover" />

                    <div className="flex-1">
                        <h2 className="text-lg font-semibold">{app.title}</h2>
                        <div className="flex gap-3">
                            <div className='flex items-center gap-1'>
                                <img src={download} alt="" className='h-3' />
                                <h1 className='text-xs'>{app.downloads / 1000000}M</h1>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img src={star} alt="" className='h-3' />
                                <h1 className='text-xs'>{app.ratingAvg}</h1>
                            </div>
                            <div>
                                <h1 className='text-xs'>{app.size}</h1>
                            </div>
                        </div>
                    </div>

                    <button onClick={() => handleRemove(app.id)} className='btn btn-primary'>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Installation;