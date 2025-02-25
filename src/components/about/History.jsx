"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import Swiper from "swiper";
import "swiper/css";

const TimelineSlider = () => {
  const [data, setData] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("/data/history.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    if (data && !swiperRef.current) {
      // Initialize Swiper only once
      swiperRef.current = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        on: {
          slideChange: (swiper) => {
            setActiveSlide(swiper.activeIndex);
          },
        },
      });
    }
  }, [data]);

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div className="history w-full p-8">
      <div className="flex justify-center items-center mb-6">
        <h2 className="text-[40px] ">Our History</h2>
      </div>

      <div className="relative flex items-center px-[20px]">
        {/* Navigation Buttons */}
        <button onClick={goToPrevSlide} className="p-2 w-[50px] h-[50px] text-[bold] text-[#51aed1] border-[#51aed1] border-[1px]  rounded-full">
          ←
        </button>

        {/* Timeline Progress */}
        <div className="flex-1 mx-4 relative px-[100px]">
          <div className="h-[1px] bg-[#51aed1] relative">
            <div
              className="absolute top-0 h-1  bg-[#51aed1]"
              style={{
                width: `${(activeSlide / (data.slides.length - 1)) * 100}%`,
                transition: "width 0.3s ease",
              }}
            ></div>
            {data.slides.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full absolute top-[-6px] transform -translate-x-1/2 ${
                  index === activeSlide ? " " : " "
                }`}
                style={{
                  left: `${(index / (data.slides.length - 1)) * 100}% `,
                  top:"-8px",
                }}
              >
                <svg viewBox="0 0 100 100" className="w-50px ml-[] h-50px">
                  <polygon
                    points="50,0 100,25 100,75 50,100 0,75 0,25"
                    fill={index === activeSlide ? "#51aed1" : "#000"}
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <button onClick={goToNextSlide} className="p-2 w-[50px] h-[50px] text-[bold] text-[#51aed1] border-[#51aed1] border-[1px]  rounded-full ">
          →
        </button>
      </div>

      {/* Slides */}
      <div className="swiper mySwiper mt-8">
        <div className="swiper-wrapper p-6">
          {data.slides.map((slide, index) => (
            <div key={index} className="swiper-slide p-6 shadow rounded-lg bg-white" > 
              <h2 className="text-[30px] font-[Roboto-thin] text-[#010440]">{slide.h2}</h2>
              <h3 className="text-[25px] text-[#010440] my-2">{slide.h3}</h3>
              <p className="text-[#010440] ">{slide.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TimelineSlider), { ssr: false });

