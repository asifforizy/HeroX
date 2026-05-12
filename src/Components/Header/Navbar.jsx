import React from 'react';
import Logo from '../../assets/logo.png'
import { FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-5">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/apps">Apps</NavLink></li>
                            <li><NavLink to="/installation">Installation</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to="/" className="flex items-center">
                        <img src={Logo} alt="logo" className='w-10' />
                        <span className="btn btn-ghost text-xl">HeroX</span>
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/apps">Apps</NavLink></li>
                        <li><NavLink to="/installation">Installation</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="https://github.com/asifforizy" className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:scale-105 transition-all duration-300">
                        <FaGithub className='text-xl' /> Contribute
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;