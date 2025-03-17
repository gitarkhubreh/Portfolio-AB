import React from "react";
import TypeWriteEffect from "./Helper/TypeWriteEffect";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg">
      <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
          <div>
            <h1 data-aos="fade-right" className="text-[#c4cfde] mb-[1.3rem]">
              WELCOME TO MY WORLD
            </h1>
            <div data-aos="fade-left" data-aos-delay="400">
              <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.6rem] text-white">
                Hi I&apos;m<span className="text-cyan-500 text-[25px]">AbdulRehman</span>
              </h1>
              <TypeWriteEffect />
            </div>
            <p data-aos="fade-up" data-aos-delay="800" className="mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde]">
              I am a Full-Stack Web Developer specializing in Next.js and the
              MERN stack, along with expertise in video editing, graphic design,
              and logo creation. As a YouTuber, I combine creativity and
              technical skills to produce engaging digital content.
            </p>
            <div className="mt-[2rem] flex items-center space-x-6">
              <a
                href="#contact" // This will scroll to the section with ID 'contact'
                data-aos="zoom-in"
                data-aos-delay="1200"
                className="relative flex h-[50px] w-40 rounded-md items-center justify-center font-semibold overflow-hidden bg-cyan-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-gray-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"
              >
                <span className="relative z-10">Hire Me</span>
              </a>
              <button
                data-aos="zoom-out"
                data-aos-delay="1600"
                className="before:ease relative h-12 w-40 overflow-hidden bg-cyan-600 text-white font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 rounded-md"
              >
                <a
                  href="/AbdulRehmanCV.pdf"  // Replace with your actual URL
                  download="AbdulRehmanCV.pdf"
                  className="relative z-10"
                >
                  Download CV
                </a>
              </button>
            </div>

            
          </div>
          <div data-aos="fade-left" data-aos-delay="2000" className="hidden md:block">
            <Image
              src="/images/hero1.jpeg"
              alt="/"
              width={600}
              height={600}
              className="object-contain rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
