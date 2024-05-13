"use client";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import Image from "next/image";

// import ShopHero from "./ShopHero";

import { gsap, Expo } from "gsap";
import { useGSAP } from "@gsap/react";

import { Icon } from "@iconify/react";
import FilterShop from "./FilterShop";
import Link from "next/link";

import ProductsData from "@/data/products";

import dynamic from "next/dynamic";

const ShopHero = dynamic(() => import("./ShopHero"), {
  loading: () => <p>Loading...</p>,
});
type Props = {};

function AllProducts({}: Props) {
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
  const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
  const handleFilterButton = () => {
    if (typeof window !== "undefined") {
      if (openFilter) {
        gsap.to(filterShopRef.current, {
          opacity: 0,
          width: !isSmallScreen ? "0" : "100vw",
          duration: 0.8,
          display: "none",
          ease: Expo.easeOut,
        });
        setOpenFilter(false);
      } else {
        gsap.to(filterShopRef.current, {
          display: "flex",
          duration: 0.5,
          width: !isSmallScreen ? "19vw" : "",
          opacity: 1,
          ease: Expo.easeOut,
        });

        setOpenFilter(true);
      }
    }
  };

  const handleCloseFilter = () => {
    gsap.to(filterShopRef.current, {
      width: isSmallScreen ? "0" : "",
      duration: 0.5,
      display: "none",
      ease: Expo.easeInOut,
    });
  };

  const [renderProducts, setRenderProducts] = useState(ProductsData);

  const [categoryName, setCategoryName] = useState("");
  const handleProductByCategory = (name: string) => {
    setCategoryName(name);
    if (!isSmallScreen) {
      gsap.to(filterShopRef.current, {
        width: isSmallScreen ? "0" : "",
        duration: 0.5,
        display: "none",
        ease: Expo.easeInOut,
      });
    }
  };

  const productsMainRef = useRef(null);
  const productsHeaderRef = useRef(null);

  // Filter renderProducts based on categoryName
  const filteredProducts = renderProducts.filter((item) => {
    // If categoryName is not set or matches the category of the item
    return !categoryName || item.category === categoryName;
  });

  return (
    <>
      <ShopHero />
      <main
        ref={productsMainRef}
        className="w-11/12 mx-auto h-full  my-[5rem] flex gap-2 justify-center items-center "
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
                className="drop-icon rotate-[90deg] md:rotate-[-90deg]"
              />
            </div>

            {/* title  */}
            <div>
              <span className="text-2xl md:text-4xl font-semibold">
                Our Products
              </span>
              <div className="w-full flex justify-center md:justify-end items-center">
                <hr className="bg-secondary-500 w-[6rem] rounded-[110%] h-[3px]" />
              </div>
            </div>
          </div>

          <div className="w-full h-auto md:h-[150vh] flex md:flex-row flex-col gap-5">
            <FilterShop
              filterShopRef={filterShopRef}
              productsMainRef={productsMainRef}
              productsHeaderRef={productsHeaderRef}
              handleCloseFilter={handleCloseFilter}
              handleProductByCategory={handleProductByCategory}
            />

            {/* new products  */}
            <div className="w-full grid grid-cols-2 lg:grid-cols-4  place-content-start place-items-center gap-5">
              {/* product card  */}
              {filteredProducts.map((item, index) => (
                <Link
                  href={`product_detail/${item.id}`}
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
                      placeholder="blur"
                      loading="lazy"
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
