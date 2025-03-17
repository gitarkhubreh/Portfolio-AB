import React from 'react'
import ReviewsSlider from './Helper/ReviewsSlider'

const Reviews = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
        <div className='text-center'>
            <p className='heading__mini'>Our Team Members</p>
            <h1 className='heading__primary'>Our Team <span className='text-cyan-300'>Members</span></h1>
        </div>
        <div className='w-[80%] pt-[3rem] md:pt-[5rem] mx-auto'>
            <ReviewsSlider/>
        </div>
    </div>
  )
}

export default Reviews