"use client";
import Link from "next/link";
import React from "react";
import CollectionBgImg from "@/public/images/collection/collection-bg.avif";
import Image from "next/image";

type Props = {};

function ShopHero({}: Props) {
  return (
    <main className="w-full relative overflow-hidden md:h-[80vh] flex justify-center items-center">
      <div className="w-full relative flex flex-col  md:mt-[4rem] justify-center items-center">
        <div className="w-full h-full relative  top-0 left-0">
          <Image
            src={CollectionBgImg}
            alt="ShopHero-slider-img"
            className="w-full h-full object-cover object-center"
          ></Image>
          <div className="absolute w-full h-full inset-0 bg-black opacity-70"></div>
        </div>
        {/* ShopHero titles  */}
        <div className="absolute z-1 w-full text-primary-50  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center gap-2 md:gap-5">
          <span className="text-sm font-semibold">
            Step into a world of curated finds at our shop.
          </span>
          <h1 className="text-3xl md:text-7xl font-semibold">Market Realm</h1>
          {/* nav small  */}
          <div className="flex mt-[1rem] md:mt-[3rem] justify-center items-center text-[13px] font-bold text-primary-200  gap-2">
            <Link href="/">Home</Link> <span>></span> <Link href="shop" className="text-primary-50">Shop</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ShopHero;
