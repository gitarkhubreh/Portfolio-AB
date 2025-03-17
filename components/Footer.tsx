import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4rem] pb-5 border-gray-600 border-opacity-40">
        <div>
          <div className="font-primary text-white text-[18px]">
            <span className="text-[30px] md:text-[40px] text-cyan-400">
              AK.
            </span>
            Rehman
          </div>
          <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70">
            “Thank you for visiting my portfolio! I’m thrilled to showcase my
            work and share the creative projects I’ve had the pleasure of
            bringing to life. If you’d like to collaborate or have any
            questions, don’t hesitate to get in touch. Let’s create something
            amazing together!”
          </h1>
          <p className="mt-[1.3rem] text-cyan-300 underline font-semibold">
            ab.rahmanedu@gmail.com
          </p>
        </div>
        <div className="md:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Quick Link
          </h1>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-cyan-300">
            About
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-cyan-300">
            Services
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-cyan-300">
            Popular Services
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-cyan-300">
            Projects
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-cyan-300">
            Contact
          </p>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Address
          </h1>
          <div className="flex items-center mt-[1rem] space-x-2">
            <MapIcon className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px] text-cyan-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              Pakistan, Karachi Surjani Town Near KDA Flats Lasani View
              Appartment
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <EnvelopeIcon className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px] text-cyan-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              ab.rahmanedu@gmail.com
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <PhoneIcon className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px] text-cyan-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              +92 3122050069
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70">
        &#169; Copyright AK.rehman 2025
      </div>
    </div>
  );
};

export default Footer;
