import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
const HomeSlider = ({ homePageSlider }) => {
  
  return (
    <React.Fragment>
    <div className=" h-screen w-full">
    <Swiper
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
    >

    {homePageSlider?.homeSlider.map((item) => (
   
      <SwiperSlide  key="{item}">
        <div
          className="h-screen bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${item?.slideImage?.sourceUrl})`,
          }}
        >
          <div className="h-screen bg-black bg-opacity-10 ">
            <div className="h-screen flex flex-col justify-center items-center space-y-6">
              <p className="text-7xl text-white "> {item?.sliderTitle}</p>
              <p className="text-2xl font-light text-white ">
                {item?.slideSubTitle}
              </p>  
              <button 
                type="button"
                className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
              >
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      ))}
       
    </Swiper>
  </div>
    </React.Fragment>
  );
};

export default HomeSlider;
