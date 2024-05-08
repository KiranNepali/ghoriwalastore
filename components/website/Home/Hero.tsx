"use client";
import Link from "next/link";
import React from "react";
import CollectionBgImg from "@/public/images/collection/collection-bg.avif";
import Image from "next/image";

type Props = {};

function Hero({}: Props) {
  return (
    <main className="w-full relative overflow-hidden md:h-[80vh] flex justify-center items-center">
      <div className="w-full relative flex flex-col md:mt-[4rem] justify-center items-center">
        <div className="w-full h-full relative  top-0 left-0">
          <Image
            src={CollectionBgImg}
            alt="hero-slider-img"
            className="w-full h-full object-cover object-center"
          ></Image>
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        {/* hero titles  */}
        <div className="absolute z-1 w-full text-primary-50  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center gap-2 md:gap-5">
          <span className="text-sm font-semibold">New Collection</span>
          <h1 className="text-3xl md:text-7xl font-semibold">Kitchen Appliances</h1>
          <span className="text-lg md:text-2xl font-semibold">Every Items All Store</span>

          {/* shop now button  */}
          <Link href="shop">
            <button className="bg-primary-900 mt-2 md:mt-5 uppercase px-8 py-3 text-primary-50 text-[12px] font-semibold tracking-widest hover:bg-secondary-600">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Hero;
