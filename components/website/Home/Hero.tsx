"use client";
import Link from "next/link";
import React from "react";

import HeroBgVideo from "@/public/HeroBgVideo.mp4";

type Props = {};

function Hero({}: Props) {
  return (
    <main className="w-full mt-[4rem] md:mt-0 relative overflow-hidden md:h-[80vh] flex justify-center items-center">
      <div className="w-full relative flex flex-col md:mt-[4rem] justify-center items-center">
        <div className="w-full h-full relative  top-0 left-0">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover object-center"
          >
            <source src={HeroBgVideo} type="video/mp4" />
            {/* Your browser does not support the video tag. */}
          </video>

          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        {/* hero titles  */}
        <div className="absolute z-1 w-full text-primary-50  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center gap-2 md:gap-5">
          <span className="text-sm font-semibold">New Collection</span>
          <h1 className="text-3xl md:text-7xl font-semibold">
            Kitchen Appliances
          </h1>
          <span className="text-lg md:text-2xl font-semibold">
            Every Items All Store
          </span>

          {/* shop now button  */}
          <Link href="products">
            <button className="bg-primary-900 mt-2 md:mt-5 uppercase px-8 py-3 text-primary-50 text-[12px] font-semibold tracking-widest hover:bg-secondary-600">
              Explore Products
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Hero;
