import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import download from '../assets/icon-downloads.png'
import star from '../assets/icon-ratings.png'
import reviews from '../assets/icon-review.png'
import { toast } from 'react-toastify';
import { getInstalledApps, saveApp } from '../Utils/storage';


const AppDetails = () => {





    const { id } = useParams()
    const data = useLoaderData()
    const singleAppDetails = data.find(app => app.id == id);

    const [isInstalled, setIsInstalled] = useState(
        () => getInstalledApps().some(a => a.id == singleAppDetails?.id)
    );

    const handleInstall = () => {
        const result = saveApp(singleAppDetails);
        if (result.success) {
            setIsInstalled(true);
            toast.success(result.message);
        }


    };


    if (!singleAppDetails) {
        return (
            <div className="flex flex-col items-center justify-center  gap-4 h-screen">
                <h1 className="text-7xl font-bold text-red-500">App Not Found</h1>
                <p className="text-gray-500">The app you are looking for does not exist.</p>
                <link href="/apps" className="btn btn-primary">Back to Apps</link>
            </div>
        );
    }




    return (
        <div>
            <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-8">

                <div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl ">


                    <div className="flex-shrink-0 flex justify-center md:justify-start">
                        <img
                            src={singleAppDetails.image}
                            alt="App"
                            className="w-40 h-40 rounded-2xl object-cover"
                        />
                    </div>


                    <div className="flex-1 space-y-3">

                        <h1 className="text-2xl font-bold">
                            {singleAppDetails.title}
                        </h1>

                        <p className="text-sm">
                            Developed by : <span className="text-blue-600">{singleAppDetails.companyName}</span>
                        </p>
                        <hr className="text-gray-400" />

                        <div className="grid grid-cols-3 gap-4 pt-2">

                            <div className=" ">
                                <img src={download} alt="" className='w-5' />
                                <p className="text-sm">Downloads</p>
                                <p className="text-green-600 text-xl font-bold">{singleAppDetails.downloads/ 1000000}M</p>
                            </div>

                            <div className="">
                                <img src={star} alt="" className='w-5' />
                                <p className="text-sm ">Avg Rating</p>
                                <p className="text-orange-500 text-xl font-bold">{singleAppDetails.ratingAvg}</p>
                            </div>

                            <div className="">
                                <img src={reviews} alt="" className='w-5' />
                                <p className="text-sm ">Reviews</p>
                                <p className="text-purple-600 text-xl font-bold">{singleAppDetails.reviews / 1000}K</p>
                            </div>

                        </div>

                        <button
                            onClick={!isInstalled ? handleInstall : undefined}
                            disabled={isInstalled}
                            className={`mt-4 px-6 py-2 rounded-lg font-medium text-white transition-colors
            ${isInstalled
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-green-400 hover:bg-green-500 cursor-pointer'
                                }`}
                        >
                            {isInstalled ? 'Installed' : `Install Now (${singleAppDetails.size} MB)`}
                        </button>
                    </div>


                </div>

                <hr className="w-full text-gray-400" />





                <div className=" p-6 rounded-xl space-y-4">
                    <h2 className="text-xl font-semibold">Ratings</h2>

                    {(() => {
                        const maxCount = Math.max(...singleAppDetails.ratings.map(r => r.count));
                        const sorted = [...singleAppDetails.ratings].sort((a, b) => b.count - a.count);
                        const axisSteps = 4;
                        const axisLabels = Array.from({ length: axisSteps + 1 }, (_, i) =>
                            Math.round((maxCount / axisSteps) * i)
                        );

                        return (
                            <div className="flex gap-4">
                                <div className="flex-1 space-y-3">
                                    {sorted.map((rating, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="w-12 text-sm text-gray-600 text-right flex-shrink-0">
                                                {rating.name}
                                            </span>
                                            <div className="flex-1 bg-gray-200 h-8 rounded-sm overflow-hidden">
                                                <div
                                                    className="h-8 bg-orange-400 rounded-sm transition-all duration-500"
                                                    style={{ width: `${(rating.count / maxCount) * 100}%` }}
                                                />
                                            </div>
                                            <span className="text-xs text-gray-400 w-10 flex-shrink-0">
                                                {rating.count >= 1000 ? `${(rating.count / 1000).toFixed(1)}K` : rating.count}
                                            </span>
                                        </div>
                                    ))}

                                    <div className="flex items-center gap-3 mt-1">
                                        <div className="w-12 flex-shrink-0" />
                                        <div className="flex-1 flex justify-between">
                                            {axisLabels.map(label => (
                                                <span key={label} className="text-xs text-gray-400">
                                                    {label >= 1000 ? `${(label / 1000).toFixed(0)}K` : label}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="w-10 flex-shrink-0" />
                                    </div>
                                </div>
                            </div>
                        );
                    })()}
                </div>
                <hr className="w-full text-gray-400" />

                <div className=" p-6 rounded-xl  space-y-4">
                    <h2 className="text-xl font-semibold">Description</h2>

                    <p className="0 leading-relaxed">
                        {singleAppDetails.description}
                    </p>


                </div>

            </div>
        </div>
    );
};

export default AppDetails;  