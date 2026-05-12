import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Card/Card';

const Apps = () => {
    const data = useLoaderData()
    return (
        <div>
            <div>
                <h1 className='text-5xl font-bold text-center mt-15 mb-5' >Our All Applications</h1>
                <h1 className='text-sm sm:text-base text-[#627382] text-center' >Explore All Apps on the Market developed by us. We code for Millions</h1>
            </div>
            <div className="flex justify-between my-8">
                <div>
                    <h1 className="text-xl font-bold" >({data.length}) Apps Found</h1>
                </div>
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-20" >

                {
                    data.map(product => (
                        <Card
                            key={product.id}
                            product={product}
                        />
                    ))
                }

            </div>
        </div>
    );
};

export default Apps;