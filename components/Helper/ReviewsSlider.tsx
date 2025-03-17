import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewsCard from "./ClientReviewsCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ReviewsSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      itemClass="item"
    >
      <ClientReviewsCard image="/images/adnan.PNG" user="Adnan" role="Frontend Developer" description="Adnan specializes in crafting responsive and dynamic web interfaces using modern frontend technologies." />
      <ClientReviewsCard image="/images/ni.PNG" user="Nida Khurram" role="Frontend Developer" description="Nida has a keen eye for design and excels at turning creative concepts into functional web applications." />
      <ClientReviewsCard image="/images/ram.jpeg" user="Rameez" role="UI/UX Website and App Designer" description="Rameez – Creative UI/UX Designer crafting seamless, user-friendly digital experiences." />
    </Carousel>
  );
};

export default ReviewsSlider;