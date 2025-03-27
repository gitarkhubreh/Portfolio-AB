import React from "react";
import ServicesCard from "./Helper/ServicesCard";
import Image from "next/image";
const Projects = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#0b0c13]" id="projects">
      <div className="text-center">
        <p className="heading__mini">Popular Projects</p>
        <h1 className="heading__primary">
          My Special <span className="text-cyan-300">Projects</span> For You
        </h1>
      </div>
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
      <article className="card__article">
            <Image
              src="/images/C.png"
              alt="image"
              className="card__img"
              height={1000}
              width={1000}
            />

            <div className="card__data">
              <span className="card__description">
                Using NextJS And Tailwind CSS
              </span>
              <h2 className="card__title">Cosmetics Website</h2>
              <a
                href="https://cosmetics-two.vercel.app/" // This will scroll to the section with ID 'contact'
                
                className="relative flex h-[50px] w-40 rounded-md items-center justify-center font-semibold overflow-hidden bg-cyan-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-cyan-300 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"
              >
                <span className="relative z-10">View Projects</span>
              </a>
            </div>
          </article>
          <article className="card__article">
            <Image
              src="/images/T.png"
              alt="image"
              className="card__img"
              height={1000}
              width={1000}
            />

            <div className="card__data">
              <span className="card__description">
                Usind NextJS And Tailwind CSS
              </span>
              <h2 className="card__title">CountDown-Timer</h2>
              <a
                href="https://next-js-count-down-timer.vercel.app/" // This will scroll to the section with ID 'contact'
               
                className="relative flex h-[50px] w-40 rounded-md items-center justify-center font-semibold overflow-hidden bg-cyan-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-cyan-300 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"
              >
                <span className="relative z-10">View Projects</span>
              </a>
            </div>
          </article>
          <article className="card__article">
            <Image
              src="/images/CAL.png"
              alt="image"
              className="card__img"
              height={1000}
              width={1000}
            />

            <div className="card__data">
              <span className="card__description">
              Usind NextJS And Tailwind CSS
              </span>
              <h2 className="card__title">Calendar</h2>
              <a
                href="https://next-js-calendar-2025.vercel.app/" // This will scroll to the section with ID 'contact'
               
                className="relative flex h-[50px] w-40 rounded-md items-center justify-center font-semibold overflow-hidden bg-cyan-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-cyan-300 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"
              >
                <span className="relative z-10">View Projects</span>
              </a>
            </div>
          </article>
          <article className="card__article">
            <Image
              src="/images/CU.png"
              alt="image"
              className="card__img"
              height={1000}
              width={1000}
            />

            <div className="card__data">
              <span className="card__description">
              Usind NextJS And Tailwind CSS
              </span>
              <h2 className="card__title">Calculator</h2>
              <a
                href="https://next-js-calculator-gamma.vercel.app/" // This will scroll to the section with ID 'contact'
               
                className="relative flex h-[50px] w-40 rounded-md items-center justify-center font-semibold overflow-hidden bg-cyan-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-cyan-300 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"
              >
                <span className="relative z-10">View Projects</span>
              </a>
            </div>
          </article>
          <article className="card__article">
            <Image
              src="/images/FU.png"
              alt="image"
              className="card__img"
              height={1000}
              width={1000}
            />

            <div className="card__data">
              <span className="card__description">
                Using HTML,CSS And JavaScript
              </span>
              <h2 className="card__title">Furniture Store Website</h2>
              <a
                href="https://ecommerce-website-three-ashy.vercel.app/" // This will scroll to the section with ID 'contact'
               
                className="relative flex h-[50px] w-40 rounded-md items-center justify-center font-semibold overflow-hidden bg-cyan-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-cyan-300 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"
              >
                <span className="relative z-10">View Projects</span>
              </a>
            </div>
          </article>
          <article className="card__article">
            <Image
              src="/images/PO.png"
              alt="image"
              className="card__img"
              height={1000}
              width={1000}
            />

            <div className="card__data">
              <span className="card__description">
                Using HTML,CSS And JavaScript
              </span>
              <h2 className="card__title">Team Member Portfolio</h2>
              <a
                href="https://rameez-portfolio-gold.vercel.app/" // This will scroll to the section with ID 'contact'
              
                className="relative flex h-[50px] w-40 rounded-md items-center justify-center font-semibold overflow-hidden bg-cyan-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-cyan-300 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"
              >
                <span className="relative z-10">View Projects</span>
              </a>
            </div>
          </article>
          <article className="card__article">
            <Image
              src="/images/JA.png"
              alt="image"
              className="card__img"
              height={1000}
              width={1000}
            />

            <div className="card__data">
              <span className="card__description">
                Using JavaScript Code
              </span>
              <h2 className="card__title">JavaScript Assignment</h2>
              <a
                href="https://github.com/gitarkhubreh/JavaScript-Assignments" // This will scroll to the section with ID 'contact'
                
                className="relative flex h-[50px] w-40 rounded-md items-center justify-center font-semibold overflow-hidden bg-cyan-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-cyan-300 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"
              >
                <span className="relative z-10">View Projects</span>
              </a>
            </div>
          </article>
          <article className="card__article">
            <Image
              src="/images/UC.png"
              alt="image"
              className="card__img"
              height={1000}
              width={1000}
            />

            <div className="card__data">
              <span className="card__description">
                Using Streamlit Code
              </span>
              <h2 className="card__title">Unit Converter</h2>
              <a
                href="https://gitarkhubreh-unit-convertor-app-xnzme3.streamlit.app/" // This will scroll to the section with ID 'contact'
                
                className="relative flex h-[50px] w-40 rounded-md items-center justify-center font-semibold overflow-hidden bg-cyan-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-cyan-300 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"
              >
                <span className="relative z-10">View Projects</span>
              </a>
            </div>
          </article>
          <article className="card__article">
            <Image
              src="/images/GMS.png"
              alt="image"
              className="card__img"
              height={1000}
              width={1000}
            />

            <div className="card__data">
              <span className="card__description">
                Using Streamlit Code
              </span>
              <h2 className="card__title">Growth MindSet App</h2>
              <a
                href="https://gitarkhubreh-growth-mind-set-app-app-bakkhw.streamlit.app/" // This will scroll to the section with ID 'contact'
                
                className="relative flex h-[50px] w-40 rounded-md items-center justify-center font-semibold overflow-hidden bg-cyan-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-cyan-300 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"
              >
                <span className="relative z-10">View Projects</span>
              </a>
            </div>
          </article>
          <article className="card__article">
            <Image
              src="/images/PSS.png"
              alt="image"
              className="card__img"
              height={1000}
              width={1000}
            />

            <div className="card__data">
              <span className="card__description">
                Using Streamlit Code
              </span>
              <h2 className="card__title">Password Strength Meter</h2>
              <a
                href="https://gitarkhubreh-password-strength-meter-app-m9rrkr.streamlit.app/" // This will scroll to the section with ID 'contact'
                
                className="relative flex h-[50px] w-40 rounded-md items-center justify-center font-semibold overflow-hidden bg-cyan-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-cyan-300 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"
              >
                <span className="relative z-10">View Projects</span>
              </a>
            </div>
          </article>
          <article className="card__article">
            <Image
              src="/images/PB.png"
              alt="image"
              className="card__img"
              height={1000}
              width={1000}
            />

            <div className="card__data">
              <span className="card__description">
                Using Streamlit Code
              </span>
              <h2 className="card__title">Personal Library Manager</h2>
              <a
                href="https://gitarkhubreh-personal-library-manager-app-zslu71.streamlit.app/" // This will scroll to the section with ID 'contact'
                
                className="relative flex h-[50px] w-40 rounded-md items-center justify-center font-semibold overflow-hidden bg-cyan-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-cyan-300 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"
              >
                <span className="relative z-10">View Projects</span>
              </a>
            </div>
          </article>
          <article className="card__article">
            <Image
              src="/images/4.png"
              alt="image"
              className="card__img"
              height={1000}
              width={1000}
            />

            <div className="card__data">
              <span className="card__description">
                Using Python Practice
              </span>
              <h2 className="card__title">Projects 4 Assignment</h2>
              <a
                href="https://github.com/gitarkhubreh/Project-4-Assignments" // This will scroll to the section with ID 'contact'
                
                className="relative flex h-[50px] w-40 rounded-md items-center justify-center font-semibold overflow-hidden bg-cyan-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-cyan-300 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56"
              >
                <span className="relative z-10">View Projects</span>
              </a>
            </div>
          </article>
         
         
          
      </div>
    </div>
  );
};

export default Projects;
