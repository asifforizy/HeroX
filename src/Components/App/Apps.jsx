import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Card/Card';

const Apps = () => {
    const data = useLoaderData();

    const [search, setSearch] = useState("");

    const filteredApps = data.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div>
                <h1 className='text-5xl font-bold text-center mt-15 mb-5'>
                    Our All Applications
                </h1>

                <h1 className='text-sm sm:text-base text-[#627382] text-center'>
                    Explore All Apps on the Market developed by us. We code for Millions
                </h1>
            </div>

            <div className="flex justify-between my-8">
                <div>
                    <h1 className="text-xl font-bold">
                        ({filteredApps.length}) Apps Found
                    </h1>
                </div>

                <div>
                    <label className="input">
                        <svg
                            className="h-[1em] opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>

                        <input
                            type="search"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </label>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-20">
                {
                    filteredApps.length > 0 ? (
                        filteredApps.map(product => (
                            <Card
                                key={product.id}
                                product={product}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10">
                            <h1 className="text-4xl font-bold text-red-500">
                                No Apps Found
                            </h1>

                            <p className="text-gray-500 mt-2">
                                Try searching with another name
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Apps;