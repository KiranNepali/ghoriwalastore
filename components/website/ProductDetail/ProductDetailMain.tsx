"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import { Icon } from "@iconify/react";

import NewProductImg2 from "@/public/images/new-product/new2Img.webp";
import RecommendedProduct from "./RecommendedProduct";

type Props = {};

function ProductDetailMain({}: Props) {
  const  [productDetail, setProductDetail] = useState([]);
  return (
    <main className="w-11/12 mx-auto my-[5rem]  md:my-[8rem]  flex flex-col gap-10 justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        {/* nav small  */}
        <div className="flex  mb-[3rem] justify-start w-full items-center text-[13px] font-bold text-primary-200  gap-2">
            <Link  href="/" className="hover:text-primary-400">Home</Link> <span>></span> <Link href="products" className="hover:text-primary-400">Products</Link>>
            <Link className="text-primary-400" href="product-detail">Product detail</Link> <span>></span> 
          </div>
        <div className="grid w-full md:grid-cols-7 gap-5 place-content-center place-items-center">
          {/* product images  */}
          <div className="w-full h-full flex flex-col md:flex-row  col-span-3 gap-2">
            <div className="md:w-[20%] w-full flex-row md:flex-col flex gap-3">
              <div className="w-full min-h-[6rem]  bg-primary-400 cursor-pointer">
                <Image
                  src={NewProductImg2}
                  alt="product-detail-image"
                  className="w-full h-full object-center object-cover"
                ></Image>
              </div>
              <div className="w-full min-h-[6rem] bg-primary-400 cursor-pointer">
                <Image
                  src={NewProductImg2}
                  alt="product-detail-image"
                  className="w-full h-full object-center object-cover"
                ></Image>
              </div>
            </div>
            <div className="bg-slate-50  w-full h-[30rem]">
              <Image
                src={NewProductImg2}
                alt="product-detail-image"
                className="w-full h-full object-center object-cover"
              ></Image>
            </div>
          </div>
          {/* description  */}
          <div className="w-full h-full col-span-2  flex flex-col gap-5  justify-start items-center">
            <div className="w-full pb-5  shadow-sm flex justify-between">
              {/* name price  */}
              <div className="flex-col gap-2 flex">
                <span className="text-3xl font-semibold text-primary-500">
                  Beechwood
                </span>
                <span className="text-secondary-400 font-semibold text-xl">
                  $120.00
                </span>
              </div>
              {/* fav icon  */}
              <div className="">
                <Icon
                  width={20}
                  icon="mdi:favourite"
                  className="cursor-pointer hover:text-secondary-500 hover:scale-125 duration-200"
                />
              </div>
            </div>

            {/* description  */}
            <p className="text-primary-500 text-[13px]  flex justify-start items-center">
              COOKWARE AND FRYING PANS Our saucepans and frying pans are made
              with high quality materials and under strict control. Casserole
              pans, saucepans, frying pans, paella pans and more, to suit all
              tastes and heat sources. Buy now PRESSURE COOKERS Using a pressure
              cooker, dishes are prepared much faster than with..
            </p>

            {/* <div className="flex-col flex">
              <span className="flex gap-2">
                <span>Name:</span> <span>value</span>
              </span>
            </div> */}

            {/* shop now button  */}
            <Link href="product_detail" className="text-start w-full">
              <button className="bg-primary-900 mt-2 md:mt-5 uppercase px-8 py-3 text-primary-50 text-[12px] font-semibold tracking-widest hover:bg-secondary-600">
                Add to Cart
              </button>
            </Link>

            {/* category name  */}
            <div className="flex gap-1 font-semibold  w-full text-start">
              <span className="text-[12px]">Categories:</span>
              <span className="text-[11px] text-primary-300">glass, oil</span>
            </div>
          </div>

          {/* why chose us  */}
          <div className="flex mt-[3rem] md:mt-0 flex-col gap-3 col-span-2">
            <div className="h-[10rem] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-3  text-center border-primary-400 flex justify-start flex-col gap-2 items-center">
              <span className="text-sm font-semibold">Why Choose Us ?</span>
              <p className="text-[13px] text-primary-400">
                Official Herschel stockist Australian warranty assistance &
                support Australian shipping & returns.Customer first experience
                environmentally focused
              </p>
            </div>
            <div className="h-[10rem] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-3  text-center border-primary-400 flex justify-start flex-col gap-2 items-center">
              <span className="text-sm font-semibold">Why Choose Us ?</span>
              <p className="text-[13px] text-primary-400">
                Official Herschel stockist Australian warranty assistance &
                support Australian shipping & returns.Customer first experience
                environmentally focused
              </p>
            </div>
            <div className="h-[10rem] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-3  text-center border-primary-400 flex justify-start flex-col gap-2 items-center">
              <span className="text-sm font-semibold">Why Choose Us ?</span>
              <p className="text-[13px] text-primary-400">
                Official Herschel stockist Australian warranty assistance &
                support Australian shipping & returns.Customer first experience
                environmentally focused
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RecommendedProduct */}
      <RecommendedProduct />
    </main>
  );
}

export default ProductDetailMain;
