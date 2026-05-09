import React from 'react';
import play from '../../assets/playstore.png';
import app from '../../assets/appsstore.png';
import heroImg from '../../assets/hero.png';

const Home = () => {
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
        </div>
    );
};

export default Home;