import React from 'react';
import play from '../../assets/playstore.png';
import app from '../../assets/appsstore.png';
import heroImg from '../../assets/hero.png';
import { useLoaderData } from 'react-router';
import Card from '../Card/Card';

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="px-4 sm:px-6 lg:px-12">

            <div className="text-center mb-10 mt-12 sm:mt-16 lg:mt-20">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                    We Build
                </h1>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3">
                    <span className="text-[#9F62F2]">Productive</span> Apps
                </h1>

                <p className="mt-4 text-sm sm:text-base text-[#627382] max-w-3xl mx-auto leading-7">
                    At HeroX, we craft innovative apps designed to make everyday
                    life simpler, smarter, and more exciting. Our goal is to
                    turn your ideas into digital experiences that truly make an
                    impact.
                </p>
            </div>

            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-10">

                <button className="flex items-center gap-2 border px-3 py-2 text-sm sm:text-base rounded-lg border-[#627382] hover:bg-gray-100 transition">
                    <img src={play} alt="Google Play" className="w-5" />
                    <span>Play Store</span>
                </button>

                <button className="flex items-center gap-2 border px-3 py-2 text-sm sm:text-base rounded-lg border-[#627382] hover:bg-gray-100 transition">
                    <img src={app} alt="App Store" className="w-5" />
                    <span>App Store</span>
                </button>

            </div>


            <div className="flex justify-center items-center">
                <img
                    src={heroImg}
                    alt="Hero"
                    className="w-full max-w-xs sm:max-w-md lg:max-w-4xl"
                />
            </div>
            <div className="px-3 sm:px-6 lg:px-10 py-15 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] ">

                <h1 className="text-center text-white text-xl sm:text-3xl lg:text-4xl font-bold mb-6">
                    Trusted by Millions, Built for You
                </h1>

                <div className="flex flex-row justify-between sm:justify-around gap-3 text-center text-white">

                    <div className="flex-1">
                        <h1 className="text-xs sm:text-base opacity-90 mb-1">
                            Total Downloads
                        </h1>

                        <h1 className="text-2xl sm:text-4xl font-bold mb-1">
                            29.6M
                        </h1>

                        <h1 className="text-[10px] sm:text-sm opacity-80">
                            21% more than last month
                        </h1>
                    </div>

                    <div className="flex-1">
                        <h1 className="text-xs sm:text-base opacity-90 mb-1">
                            Total Reviews
                        </h1>

                        <h1 className="text-2xl sm:text-4xl font-bold mb-1">
                            906K
                        </h1>

                        <h1 className="text-[10px] sm:text-sm opacity-80">
                            46% more than last month
                        </h1>
                    </div>

                    <div className="flex-1">
                        <h1 className="text-xs sm:text-base opacity-90 mb-1">
                            Active Apps
                        </h1>

                        <h1 className="text-2xl sm:text-4xl font-bold mb-1">
                            132+
                        </h1>

                        <h1 className="text-[10px] sm:text-sm opacity-80">
                            31 more will launch
                        </h1>
                    </div>

                </div>
            </div>

            <div >
                <h1 className='text-5xl font-bold text-center mt-15 mb-5'>Trending Apps</h1>
                <p className='text-sm sm:text-base text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="grid grid-cols-4 gap-5">
                {
                    data.map(product=> <Card key={data.id} product= {product}></Card> )
                }
            </div>
        </div>
    );
};

export default Home;