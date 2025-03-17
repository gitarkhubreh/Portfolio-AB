import { CheckBadgeIcon, CheckIcon, StarIcon } from "@heroicons/react/16/solid";
import React from "react";

const AboutMe = () => {
  return (
    <div className="mt-[-4rem] bg-black pb-[3rem]" id="about">
      <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div>
          <p className="heading__mini">About Me</p>
          <h1 className="heading__primary">
            Professional <span className="text-cyan-400">Website</span>for Your
            Bussiness
          </h1>
          <p className="text-[15px] mt-[1.3rem] text-white opacity-75">
            I am a Full-Stack Web Developer with expertise in Next.js and the
            MERN stack, passionate about building dynamic and user-friendly web
            applications. Alongside development, I am a Video Editor, Graphics
            Designer, and Logo Designer, creating visually appealing content
            that enhances brand identity. As a YouTuber, I leverage my skills to
            produce engaging and informative videos. My goal is to blend
            creativity with technology to deliver high-quality digital
            experiences.
          </p>
          <div className="mt-[2rem] space-y-3">
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              className="flex items-center space-x-4"
            >
              <StarIcon className="w-[2rem] h-[2rem] text-cyan-400" />
              <p className="text-[18px] text-white">Frontend Web Developer</p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
              className="flex items-center space-x-4"
            >
              <StarIcon className="w-[2rem] h-[2rem] text-cyan-400" />
              <p className="text-[18px] text-white">Backend Web Developer</p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="400"
              className="flex items-center space-x-4"
            >
              <StarIcon className="w-[2rem] h-[2rem] text-cyan-400" />
              <p className="text-[18px] text-white">Video Editor</p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="top-center"
              data-aos-delay="600"
              className="flex items-center space-x-4"
            >
              <StarIcon className="w-[2rem] h-[2rem] text-cyan-400" />
              <p className="text-[18px] text-white">Graphics Designer</p>
            </div>
          </div>
        </div>
        <div className="lg:ml-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
    <div data-aos="fade-up" data-aos-anchor-placement="top-center" className="p-6 text-center bg-cyan-500">
      <p className="text-[50px] text-black font-bold">2</p>
      <p className="text-[20px] text-black font-600">
        Years Experience Web Development
      </p>
    </div>
    <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200" className="p-6 text-center bg-cyan-500">
      <p className="text-[50px] text-black font-bold">1</p>
      <p className="text-[20px] text-black font-600">
        Years Experience Graphic Designing
      </p>
    </div>
    <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400" className="p-6 text-center bg-cyan-500">
      <p className="text-[50px] text-black font-bold">1</p>
      <p className="text-[20px] text-black font-600">
        Years Experience Logo Designer
      </p>
    </div>
    <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="600" className="p-6 text-center bg-cyan-500">
      <p className="text-[50px] text-black font-bold">20+</p>
      <p className="text-[20px] text-black font-600">
        I have created Projects using my skills.
      </p>
    </div>
  </div>
</div>

        {/*  */}
      </div>
    </div>
  );
};

export default AboutMe;
