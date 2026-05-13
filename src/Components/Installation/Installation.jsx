import React, { useState, useMemo } from 'react';
import { useLoaderData } from 'react-router';
import download from '../../assets/icon-downloads.png';
import star from '../../assets/icon-ratings.png';
import { removeApp } from '../../Utils/storage';

const Installation = () => {
    const loaderData = useLoaderData();
    const [installedApps, setInstalledApps] = useState(loaderData);
    const [sortOrder, setSortOrder] = useState('');

    const sortedApps = useMemo(() => {
        if (sortOrder === 'high-low') return [...installedApps].sort((a, b) => b.downloads - a.downloads);
        if (sortOrder === 'low-high') return [...installedApps].sort((a, b) => a.downloads - b.downloads);
        return installedApps;
    }, [installedApps, sortOrder]);

    const handleRemove = (id) => {
        removeApp(id);
        setInstalledApps(prev => prev.filter(a => a.id != id));
    };

    if (installedApps.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-4 text-center">
                <h1 className="text-2xl sm:text-4xl font-bold text-gray-500">No Apps Installed</h1>
                <p className="text-gray-400 text-sm sm:text-base">Go install some apps first!</p>
                <a href="/apps" className="btn btn-primary">Browse Apps</a>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 space-y-4">

            <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold text-center mt-6 sm:mt-10 mb-2 sm:mb-5'>
                Your Installed Apps
            </h1>
            <p className='text-sm sm:text-base text-[#627382] text-center mb-4'>
                Explore All Trending Apps on the Market developed by us
            </p>

            <div className="flex justify-end">
                <select
                    value={sortOrder}
                    onChange={e => setSortOrder(e.target.value)}
                    className="select select-bordered w-full sm:w-48 text-sm"
                >
                    <option value="">Sort by Downloads</option>
                    <option value="high-low">High → Low</option>
                    <option value="low-high">Low → High</option>
                </select>
            </div>

            {sortedApps.map(app => (
                <div
                    key={app.id}
                    className="flex items-center gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-xl shadow-sm"
                >

                    <img
                        src={app.image}
                        alt={app.title}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-cover flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                        <h2 className="text-sm sm:text-lg font-semibold truncate">{app.title}</h2>
                        <div className="flex flex-wrap gap-2 sm:gap-3 mt-1">
                            <div className='flex items-center gap-1'>
                                <img src={download} alt="" className='h-3' />
                                <span className='text-xs text-gray-500'>{app.downloads / 1000000}M</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img src={star} alt="" className='h-3' />
                                <span className='text-xs text-gray-500'>{app.ratingAvg}</span>
                            </div>
                            <span className='text-xs text-gray-500'>{app.size} MB</span>
                        </div>
                    </div>

                    <button
                        onClick={() => handleRemove(app.id)}
                        className='btn btn-error btn-xs sm:btn-sm md:btn-md flex-shrink-0'
                    >
                        <span className="hidden sm:inline">Remove</span>
                        <span className="sm:hidden">✕</span>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Installation;