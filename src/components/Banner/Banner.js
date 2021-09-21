import React from "react";
import Slider from "react-slick";
const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="banner-container">
      <Slider {...settings}>
        <div className="slide">
          <img src="slide1.png" alt="" />
        </div>
        <div className="slide">
          <img
            src="https://internshala.com/cached_uploads/banner-images/home/branch_specific_slab-1920-198e74.png"
            alt=""
          />
        </div>
        <div className="slide">
          <img src="slide2.png" alt="" />
        </div>
        <div className="slide">
          <img
            src="https://internshala.com/cached_uploads/banner-images/home/volunteering_banner-1255-048523.png"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://internshala.com/cached_uploads/banner-images/home/internship_jackpot_sept-1255-26c9c7.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
