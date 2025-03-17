import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeWriteEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Frontend Web Developer',
        1000,
        'Backend Web Developer',
        1000,
        'Next JS Developer',
        1000,
        'Mern Stack Developer',
        1000,
        'Video Editor',
        1000,
        'Graphics Designer',
        1000,
        'Logo Designer',
        1000,
        'YouTuber',
        1000
      ]}
      wrapper="span"
      speed={50}
      className='xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold'
      repeat={Infinity}
    />
  );
};

export default TypeWriteEffect;
