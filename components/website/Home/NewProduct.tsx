"use client";
import React, { useRef, useState } from "react";

import Image from "next/image";

import NewProductImg1 from "@/public/images/new-product/new1Img.webp";
import NewProductImg2 from "@/public/images/new-product/new2Img.webp";
import NewProductImg3 from "@/public/images/new-product/new3Img.webp";
// import NewProductImg4 from "@/public/images/new-product/new4Img.webp";
import NewProductImg5 from "@/public/images/new-product/new5Img.webp";
import NewProductImg6 from "@/public/images/new-product/new6Img.webp";
import NewProductImg7 from "@/public/images/new-product/new7Img.webp";

import { Icon } from "@iconify/react";

import { gsap, Expo } from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {};

function NewProduct({}: Props) {
  const handleHoverIcon = (index: number) => {
    gsap.fromTo(
      `.hover-icon-${index}`,
      { bottom: 0, opacity: 0 },
      { bottom: 20, opacity: 1, duration: 0.3, ease: "linear" }
    );
  };

  const handleLeaveIcon = (index: number) => {
    gsap.to(`.hover-icon-${index}`, {
      opacity: 0,
      bottom: 0,
      duration: 0.2,
      ease: "linear",
    });
  };
  return (
    <main className="w-full h-full  my-[5rem] flex justify-center items-center">
      <div className="w-full h-full flex flex-col justify-center items-center">
        {/* title  */}
        <div className="flex flex-col justify-center items-center gap-5">
          <span className="text-2xl md:text-4xl font-semibold">
            New Product
          </span>
          <hr className="bg-secondary-500 w-[6rem] rounded-[110%] h-[3px]" />
        </div>

        {/* new products  */}
        <div className="mt-[3rem] w-full grid grid-cols-2 md:grid-cols-4 place-content-center place-items-center gap-5">
          {/* product card  */}
          {NewProductData.map((item, index) => (
            <div
              key={index}
              className="w-full cursor-pointer  overflow-hidden flex flex-col gap-3"
              onMouseEnter={() => handleHoverIcon(index)}
              onMouseLeave={() => handleLeaveIcon(index)}
            >
              {/* product image */}
              <div className="relative w-full h-[80%]">
                {/* Assuming you have Image component imported */}
                <Image
                  className="w-full h-full object-cover object-center"
                  src={item.img}
                  alt={item.productName}
                />
                {/* hover icon  */}
                <div
                  className={`w-full opacity-0 absolute bottom-10 left-[50%] -translate-x-[50%] flex gap-3 justify-center items-center hover-icon-${index}`}
                >
                  <div className="w-[3rem] text-black flex justify-center items-center h-[3rem] rounded-full bg-white">
                    <Icon width={20} icon="mdi:cart" />
                  </div>
                  <div className="w-[3rem] text-black flex justify-center items-center h-[3rem] rounded-full bg-white">
                    <Icon width={20} icon="mdi:search" />
                  </div>
                  <div className="w-[3rem] text-black flex justify-center items-center h-[3rem] rounded-full bg-white">
                    <Icon width={20} icon="mdi:favourite" />
                  </div>
                </div>
              </div>

              {/* name price */}
              <div className="flex-col gap-2 flex w-full justify-center items-center flex-grow">
                <span className="text-sm font-semibold">
                  {item.productName}
                </span>
                <span className="text-[16px] font-bold text-secondary-500">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default NewProduct;

const NewProductData = [
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
];
