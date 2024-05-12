"use client";
import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, FreeMode, Autoplay } from "swiper/modules";

type Props = {};

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, minus.",
    rating: "5",
  },
  {
    id: 2,
    name: "John Doe",
    review:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, minus.",
    rating: "5",
  },
  {
    id: 3,
    name: "John Doe",
    review:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, minus.",
    rating: "5",
  },
  {
    id: 1,
    name: "John Doe",
    review:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, minus.",
    rating: "5",
  },
  {
    id: 2,
    name: "John Doe",
    review:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, minus.",
    rating: "5",
  },
  {
    id: 3,
    name: "John Doe",
    review:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, minus.",
    rating: "5",
  },
];
function Reviews({}: Props) {
  return (
    <div className="overflow-hidden  mx-auto flex justify-center items-center flex-col">
      {/* title  */}
      <div className="flex flex-col justify-center w-full items-center gap-5">
        <span className="text-2xl md:text-4xl font-semibold">Reviews</span>
        <hr className="bg-secondary-500 w-[6rem] rounded-[110%] h-[3px]" />
      </div>

      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          924: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          1256: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1576: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="w-full mt-[3rem] mb-[5rem] h-[30vh]"
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index} className="px-3">
            <div className="p-5 border-t-[1px] cursor-pointer h-[70%] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-primary-500 text-[16px]">
                  {item.name}
                </span>
                <p className=" text-[15px] text-primary-400">{item.review}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Reviews;
