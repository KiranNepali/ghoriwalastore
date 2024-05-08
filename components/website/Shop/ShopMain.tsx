"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

import ShopHero from "./ShopHero";

// product images
import NewProductImg1 from "@/public/images/new-product/new1Img.webp";
import NewProductImg2 from "@/public/images/new-product/new2Img.webp";
import NewProductImg3 from "@/public/images/new-product/new3Img.webp";
// import NewProductImg4 from "@/public/images/new-product/new4Img.webp";
import NewProductImg5 from "@/public/images/new-product/new5Img.webp";
import NewProductImg6 from "@/public/images/new-product/new6Img.webp";
import NewProductImg7 from "@/public/images/new-product/new7Img.webp";

import { gsap, Expo } from "gsap";
import { useGSAP } from "@gsap/react";

import { Icon } from "@iconify/react";
import FilterShop from "./FilterShop";
import Link from "next/link";

type Props = {};

function ShopMain({}: Props) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const hoverIconRef = useRef(null);
  const handleHoverIcon = (index) => {
    setHoveredIndex(index);
    gsap.fromTo(
      `.hover-icon-${index}`,
      { bottom: 0, opacity: 0 },
      { bottom: 20, opacity: 1, duration: 0.5, ease: "linear" }
    );
  };

  const handleLeaveIcon = (index) => {
    setHoveredIndex(null);
    gsap.to(`.hover-icon-${index}`, {
      opacity: 0,
      bottom: 0,
      duration: 0.5,
      ease: "linear",
    });
  };
  const { contextSafe } = useGSAP();
  const filterShopRef = useRef(null);
  const [openFilter, setOpenFilter] = useState(true);
  const handleFilterButton = contextSafe(() => {
    if (openFilter) {
      gsap.to(filterShopRef.current, {
        opacity: 0,
        width: 0,
        duration: 1,
        display: "hidden",
        ease: Expo.easeOut,
      });
      gsap.to(".drop-icon", {
        ease: Expo.easeOut,
        duration: 1,
      });
      setOpenFilter(false);
    } else {
      gsap.to(filterShopRef.current, {
        display: "flex",
        duration: 1,
        width: "19vw",
        opacity: 1,
        ease: Expo.easeOut,
      });
      gsap.to(".drop-icon", {
        ease: Expo.easeIn,
        duration: 1,
      });
      setOpenFilter(true);
    }
  });
  return (
    <>
      <ShopHero />
      <main className="w-11/12 mx-auto h-full   my-[5rem] flex gap-2 justify-center items-center overflow-hidden">
        <div className="w-full h-full flex flex-col justify-center items-center">
          {/* title  */}
          <div className=" w-full  flex flex-col md:flex-row justify-between items-center gap-5">
            {/* filter button  */}
            <div
              onClick={() => handleFilterButton()}
              className="flex justify-center order-2 md:order-first  cursor-pointer items-center gap-2 px-4 py-2 border-[1px] border-primary-800 opacity-[0.8]"
            >
              <span className="text-[10px] md:text-[12px] font-semibold uppercase pt-1">
                Category
              </span>
              {/* arrow  */}
              <Icon
                icon="mdi:arrow-drop-up"
                width={20}
                className="text-blac drop-icon rotate-[-90deg]"
              />
            </div>
            <div>
              <span className="text-2xl md:text-4xl font-semibold">
                Shop Now
              </span>
              <div className="w-full p-3  flex justify-center md:justify-end items-center">
                <hr className="bg-secondary-500 w-[6rem]  h-[3px]" />
              </div>
            </div>
          </div>

          <div className="w-full flex gap-5">
            <FilterShop filterShopRef={filterShopRef} />
            {/* new products  */}
            <div className="mt-[3rem] w-full grid grid-cols-2 lg:grid-cols-4  place-content-start place-items-center gap-5">
              {/* product card  */}
              {NewProductData.map((item, index) => (
                <Link
                  href="product_detail"
                  key={index}
                  className="w-full cursor-pointer  overflow-hidden flex flex-col gap-3"
                  onMouseEnter={() => handleHoverIcon(index)}
                  onMouseLeave={() => handleLeaveIcon(index)}
                >
                  {/* product image */}
                  <div className="relative w-full h-[80%]">
                    {/* Assuming you have Image component imported */}
                    <Image
                      className="w-full h-full  object-cover object-center"
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
                  <div className="w-full flex-col gap-2 flex justify-center items-start md:items-center flex-grow">
                    <span className="text-[12px] md:text-sm font-semibold">
                      {item.productName}
                    </span>
                    <span className="text-[14px] md:text-[16px]  font-bold text-secondary-500">
                      {item.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ShopMain;

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
  {
    id: "6",
    img: NewProductImg6,
    productName: "Stainless Steel Water Bottle",
    price: "$20.00",
  },
  {
    id: "6",
    img: NewProductImg6,
    productName: "Stainless Steel Water Bottle",
    price: "$20.00",
  },

  {
    id: "6",
    img: NewProductImg6,
    productName: "Stainless Steel Water Bottle",
    price: "$20.00",
  },
  {
    id: "6",
    img: NewProductImg6,
    productName: "Stainless Steel Water Bottle",
    price: "$20.00",
  },
  {
    id: "6",
    img: NewProductImg6,
    productName: "Stainless Steel Water Bottle",
    price: "$20.00",
  },
  {
    id: "6",
    img: NewProductImg6,
    productName: "Stainless Steel Water Bottle",
    price: "$20.00",
  },
];
