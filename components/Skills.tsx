import React from "react";
import SkillsCard from "./Helper/SkillsCard";

const Skills = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black" id="skills">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
        <div className="col-span-3">
          <p className="heading__mini">My Skills</p>
          <h1 className="heading__primary">
            Let&apos;s Explore Popular <span className="text-cyan-300">Skills</span>{" "}
            & Experience
          </h1>
          <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
            With expertise in graphic design, frontend web development, and
            video editing, I craft visually stunning and highly functional
            digital experiences. Whether it&apos;s designing eye-catching graphics,
            developing seamless user interfaces, or editing engaging videos, I
            bring creativity and technical precision to every project.
            Additionally, my work in faceless YouTube content and AI-generated
            visuals allows me to create compelling and innovative media that
            captivates audiences.
          </p>
          
        </div>
        <div className="col-span-4 mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
            <div data-aos="flip-left" data-aos-anchor-placement="top-center">
              <SkillsCard
                title="HTML"
                image="/images/html.svg"
                percentage="80%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-delay="200"
            >
              <SkillsCard
                title="CSS"
                image="/images/css.svg"
                percentage="40%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-delay="400"
            >
              <SkillsCard
                title="JavaScript"
                image="/images/js.svg"
                percentage="50%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-delay="600"
            >
              <SkillsCard
                title="TypeScript"
                image="/images/ts.svg"
                percentage="50%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-delay="800"
            >
              <SkillsCard
                title="Node JS"
                image="/images/node.svg"
                percentage="50%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-delay="1000"
            >
              <SkillsCard
                title="Next JS"
                image="/images/next.svg"
                percentage="50%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-delay="1200"
            >
              <SkillsCard
                title="Python"
                image="/images/python.svg"
                percentage="40%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-delay="1200"
            >
              <SkillsCard
                title="Graphics"
                image="/images/333.webp"
                percentage="80%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-delay="1200"
            >
              <SkillsCard
                title="VE"
                image="/images/VE.webp"
                percentage="80%"
              />
            </div>
            
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
