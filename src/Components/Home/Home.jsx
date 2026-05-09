import React from 'react';
import play from '../../assets/playstore.png'
import app from '../../assets/appsstore.png'
import heroImg from '../../assets/hero.png'

const Home = () => {
    return (
        <div>
            <div className='text-center mb-10'>
                <h1 className='text-5xl font-bold mt-20'>We Build</h1>
                <h1 className='text-5xl font-bold mt-3'><span className='text-[#9F62F2]'>Productive</span> Apps</h1>
                <p className='px-100 mt-3 text-[#627382]'>At HeroX , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex  items-center justify-center gap-6 mb-10'>
                <button className='flex gap-3 border px-5 py-2 rounded border-[#627382]'><img src={play} alt="" className='w-6'/> Google play</button>
                <button className='flex gap-3 border px-5 py-2 rounded border-[#627382]' ><img src={app} alt="" className='w-6' /> App Store</button>
            </div>
            <div className='flex justify-center items-center'>
                <img src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Home;