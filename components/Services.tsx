import React from "react";
import ServicesCard from "./Helper/ServicesCard";

const Services = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#0b0c13]" id="services">
      <div className="text-center">
        <p className="heading__mini">Popular Services</p>
        <h1 className="heading__primary">
          My Special <span className="text-cyan-300">Services</span> For You
        </h1>
      </div>
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <ServicesCard
            title="React Website"
            num="01"
            description="Building fast and modern web applications using React.js with optimized performance."
          />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <ServicesCard
            title="Next JS Website"
            num="02"
            description="Developing highly scalable and SEO-friendly applications with Next.js."
          />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
          <ServicesCard
            title="Fullstack Website"
            num="03"
            description="Creating robust full-stack applications with both frontend and backend integration."
          />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-delay="600">
          <ServicesCard
            title="Graphic Designing"
            num="04"
            description="Crafting visually stunning designs that effectively communicate your brand identity."
          />
        </div >
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-delay="800">
          <ServicesCard
            title="Logo Designing"
            num="05"
            description="Designing unique and professional logos tailored to your brand's vision."
          />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-delay="1000">
          <ServicesCard
            title="Video Editing"
            num="06"
            description="Editing high-quality videos with smooth transitions and engaging effects."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
