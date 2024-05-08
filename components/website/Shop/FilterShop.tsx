import React, { useRef, useState } from "react";

import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import { gsap, Expo } from "gsap";
import { Span } from "next/dist/trace";
type Props = {};

function FilterShop({ filterShopRef }: any) {
  return (
    <>
      <div ref={filterShopRef} className="w-[19vw]">
        {/* filter main  */}
        <div className="mt-[3rem] hidden h-screen overflow-auto w-full custom-scrollbar opacity-1 md:flex flex-col gap-3">
          {ShopCategoryData.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 cursor-pointer text-primary-400 hover:text-secondary-600 hover:ml-5 duration-150 text-[13px] text-nowrap font-semibold hover:font-bold"
            >
              <span className=" ">{item.categoryName}</span>
              <div className="flex w-full justify-start items-center">
                <hr className="w-[50%] bg-secondary-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FilterShop;

const ShopCategoryData = [
  { id: "1", categoryName: "Electronics" },
  { id: "2", categoryName: "Clothing" },
  { id: "3", categoryName: "Books" },
  { id: "4", categoryName: "Home Decor" },
  { id: "5", categoryName: "Sports Gear" },
  { id: "6", categoryName: "Beauty Products" },
  { id: "7", categoryName: "Toys & Games" },
  { id: "8", categoryName: "Food & Groceries" },
  { id: "9", categoryName: "Jewelry" },
  { id: "10", categoryName: "Furniture" },
  { id: "11", categoryName: "Pet Supplies" },
  { id: "12", categoryName: "Stationery" },
  { id: "13", categoryName: "Health & Wellness" },
  { id: "14", categoryName: "Automotive" },
  { id: "15", categoryName: "Craft Supplies" },
  { id: "16", categoryName: "Outdoor Equipment" },
  { id: "17", categoryName: "Music & Instruments" },
  { id: "18", categoryName: "Art Supplies" },
  { id: "19", categoryName: "Party Supplies" },
  { id: "20", categoryName: "Fitness Gear" },
  { id: "21", categoryName: "Travel Accessories" },
  { id: "22", categoryName: "Kitchen Appliances" },
  { id: "23", categoryName: "Gardening Tools" },
  { id: "24", categoryName: "Smart Home Devices" },
  { id: "25", categoryName: "Office Furniture" },
  { id: "26", categoryName: "Board Games" },
  { id: "27", categoryName: "Camping Gear" },
  { id: "28", categoryName: "DIY Supplies" },
  { id: "29", categoryName: "Musical Instruments" },
  { id: "30", categoryName: "Artisanal Foods" },
  { id: "31", categoryName: "Fitness Apparel" },
  { id: "32", categoryName: "Baby Products" },
  { id: "33", categoryName: "Smartphone Accessories" },
  { id: "34", categoryName: "Vintage Clothing" },
  { id: "35", categoryName: "Cookware Sets" },
  { id: "36", categoryName: "Gourmet Coffee" },
  { id: "37", categoryName: "Scrapbooking Supplies" },
  { id: "38", categoryName: "Educational Toys" },
  { id: "39", categoryName: "Yoga Equipment" },
  { id: "40", categoryName: "Tech Gadgets" },
  { id: "41", categoryName: "Sustainable Products" },
  { id: "42", categoryName: "Wine & Spirits" },
  { id: "43", categoryName: "Puzzle Games" },
  { id: "44", categoryName: "Vintage Decor" },
  { id: "45", categoryName: "Fitness Trackers" },
  { id: "46", categoryName: "Luxury Watches" },
  { id: "47", categoryName: "Candles & Scents" },
  { id: "48", categoryName: "Pet Grooming" },
  { id: "49", categoryName: "Travel Essentials" },
  { id: "50", categoryName: "Board Games" },
];
