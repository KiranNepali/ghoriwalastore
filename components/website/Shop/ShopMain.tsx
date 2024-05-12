"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

import ShopHero from "./ShopHero";

import { gsap, Expo } from "gsap";
import { useGSAP } from "@gsap/react";

import { Icon } from "@iconify/react";
import FilterShop from "./FilterShop";
import Link from "next/link";

import ProductsData from "@/data/products";

type Props = {};

function AllProducts({}: Props) {
  const hoverIconRef = useRef(null);
  const handleHoverIcon = (index: number) => {
    gsap.fromTo(
      `.hover-icon-${index}`,
      { bottom: 0, opacity: 0 },
      { bottom: 20, opacity: 1, duration: 0.5, ease: "linear" }
    );
  };

  const handleLeaveIcon = (index: number) => {
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

  const handleFilterButton = () => {
    if (typeof window !== "undefined") {
      const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;

      if (openFilter) {
        gsap.to(filterShopRef.current, {
          opacity: 0,
          width: isSmallScreen ? "auto" : "0",
          height: isSmallScreen ? "0" : "auto",
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
          width: isSmallScreen ? "auto" : "19vw",
          height: isSmallScreen ? "30vh" : "auto",
          opacity: 1,
          ease: Expo.easeOut,
        });
        gsap.to(".drop-icon", {
          ease: Expo.easeIn,
          duration: 1,
        });
        setOpenFilter(true);
      }
    }
  };

  const [renderProducts, setRenderProducts] = useState(ProductsData);

  const [categoryName, setCategoryName] = useState("");
  const handleProductByCategory = (name: string) => {
    setCategoryName(name);
  };

  const productsMainRef = useRef(null);
  const productsHeaderRef = useRef(null);

  // Filter renderProducts based on categoryName
  const filteredProducts = renderProducts.filter((item) => {
    // If categoryName is not set or matches the category of the item
    return !categoryName || item.category === categoryName;
  });

  const [clickedProducts, setClickedProducts] = useState<any[]>([]);
  const handleClickProduct = (clickedProduct: any) => {
    // Add the clicked product to the clickedProducts array
    setClickedProducts([...clickedProducts, clickedProduct]);
  };
  console.log(clickedProducts);
  return (
    <>
      <ShopHero />
      <main
        ref={productsMainRef}
        className="w-11/12 mx-auto h-full   my-[5rem] flex gap-2 justify-center items-center "
      >
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div
            ref={productsHeaderRef}
            className="w-full relative py-3 z-10 bg-white flex flex-col md:flex-row justify-between items-center gap-5"
          >
            {/* filter button  */}
            <div
              onClick={() => handleFilterButton()}
              className="flex justify-center order-2 bg-black text-white  md:hover:bg-secondary-600 md:order-first  cursor-pointer items-center gap-2 px-4 py-2 border-[1px]  opacity-[0.8]"
            >
              <span className="text-[10px] md:text-[11px] font-semibold uppercase pt-1">
                Filter
              </span>
              {/* arrow  */}
              <Icon
                icon="mdi:arrow-drop-up"
                width={20}
                className="drop-icon rotate-[180deg] md:rotate-[-90deg]"
              />
            </div>

            {/* title  */}
            <div>
              <span className="text-2xl md:text-4xl font-semibold">
                Our Products
              </span>
              <div className="w-full   flex justify-center md:justify-end items-center">
                <hr className="bg-secondary-500 w-[6rem] rounded-[110%] h-[3px]" />
              </div>
            </div>
          </div>

          <div className="w-full flex md:flex-row flex-col gap-5">
            <FilterShop
              filterShopRef={filterShopRef}
              productsMainRef={productsMainRef}
              productsHeaderRef={productsHeaderRef}
              handleProductByCategory={handleProductByCategory}
            />

            {/* new products  */}
            <div className="w-full grid grid-cols-2 lg:grid-cols-4  place-content-start place-items-center gap-5">
              {/* product card  */}
              {filteredProducts.map((item, index) => (
                <Link
                  href="product_detail"
                  onClick={() => handleClickProduct(item)}
                  key={index}
                  className="w-full cursor-pointer   flex flex-col gap-3"
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

export default AllProducts;
