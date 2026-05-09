import React from "react";
import Logo from "../../assets/logo.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">


        <div className="flex flex-col md:flex-row items-center justify-between gap-6">


          <div className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="w-10" />
            <h1 className="text-2xl font-bold">HeroX</h1>
          </div>

     
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-xl font-semibold">Social Links</h1>

            <div className="flex gap-4 text-2xl">
              <FaFacebook className="cursor-pointer hover:text-blue-500 hover:scale-110 transition duration-300" />

              <FaLinkedin className="cursor-pointer hover:text-blue-400 hover:scale-110 transition duration-300" />

              <FaGithub className="cursor-pointer hover:text-gray-400 hover:scale-110 transition duration-300" />
            </div>
          </div>
        </div>

     
        <div className="border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
          <p>Copyright © 2025 - All rights reserved by HeroX</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;