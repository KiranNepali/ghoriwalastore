"use client";
import Image from "next/image";
import React, { useState } from "react";

import NewProductImg1 from "@/public/images/new-product/new1Img.webp";
import NewProductImg2 from "@/public/images/new-product/new2Img.webp";
import NewProductImg3 from "@/public/images/new-product/new3Img.webp";
// import NewProductImg4 from "@/public/images/new-product/new4Img.webp";
import NewProductImg5 from "@/public/images/new-product/new5Img.webp";
import NewProductImg6 from "@/public/images/new-product/new6Img.webp";
import NewProductImg7 from "@/public/images/new-product/new7Img.webp";
import gsap from "gsap";
type Props = {};

function SocialProduct({}: Props) {
  const handleHover = (index) => {
    gsap.fromTo(
      `.text-reveal-${index}`,
      { opacity: 0 },
      { opacity: 0.6, duration: 0.3, ease: "linear" }
    );
  };
  const handleLeave = (index) => {
    gsap.to(`.text-reveal-${index}`, {
      opacity: 0,
      duration: 0.3,
    });
  };
  return (
    <main className="w-full my-[5rem] h-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        {/* title  */}
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <span className="text-4xl font-semibold">INSTAGRAM</span>
          <hr className="bg-secondary-500 w-[6rem] rounded-[110%] h-[3px]" />
        </div>
        {/* socio products  */}
        <div
          className="w-full  mt-[3rem] grid-cols-1
         grid md:grid-cols-5 lg:grid-cols-5 auto-rows-[10rem] md:auto-rows-[15rem] lg:auto-rows-[20rem] place-items-stretch  gap-y-1 gap-1 place-content-center"
        >
          {/* product card  */}
          {SocialProductData.map((item, index) => (
            <div
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleLeave(index)}
              key={index}
              className={`relative w-full cursor-pointer h-full  flex  overflow-hidden ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div className="w-full h-full overflow-hidden">
                <Image
                  src={item.img}
                  alt="socio-product-img"
                  className="w-full h-full object-cover object-center"
                ></Image>
              </div>

              <span
                className={`text-reveal-${index} absolute w-full h-full flex justify-center items-center bg-black  opacity-0 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] font-semibold text-sm uppercase`}
              >
                <span className="text-primary-50 text-xl">Shop now</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default SocialProduct;

const SocialProductData = [
  {
    id: "1",
    img: NewProductImg1,
    productName: "Flatware",
    price: "$78.00",
  },
  {
    id: "2",
    img: NewProductImg2,
    productName: "Kitchen Knife Set",
    price: "$99.99",
  },
  {
    id: "3",
    img: NewProductImg3,
    productName: "Dinnerware Set",
    price: "$120.00",
  },
  {
    id: "4",
    img: NewProductImg7,
    productName: "Glass Tumblers",
    price: "$25.50",
  },
  {
    id: "5",
    img: NewProductImg5,
    productName: "Tea Infuser",
    price: "$15.99",
  },
  {
    id: "6",
    img: NewProductImg6,
    productName: "Stainless Steel Water Bottle",
    price: "$20.00",
  },
  {
    id: "7",
    img: NewProductImg7,
    productName: "Glass Tumblers",
    price: "$25.50",
  },
];
