import Link from "next/link";
import React from "react";

// feature images
import FeatureImg1 from "@/public/images/feature-product/feature1Img.webp";
import FeatureImg2 from "@/public/images/feature-product/feature2Img.webp";
import FeatureImg3 from "@/public/images/feature-product/feature3Img.webp";
import Image from "next/image";

type Props = {};

function FeatureSection({}: Props) {
  return (
    <main className="w-full flex my-[5rem] justify-center items-center">
      <div className="w-full flex justify-center items-center">
        {/* feature section  */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 place-content-center place-items-center">
          {FeatureProductData.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.img})`,
              }}
              className="relative group flex bg-cover bg-center justify-start bg-primary-100  w-full h-[20rem] md:h-[30rem] items-start flex-col gap-2 overflow-hidden"
            >
              <Image
                src={item.img}
                className="w-full group-hover:scale-110 duration-300 h-full object-cover object-center"
                alt="feature-image"
              ></Image>
              <div className="flex flex-col absolute to top-[10%] left-[10%]">
                {/* section  */}
                <span className="text-primary-400 text-sm">{item.section}</span>

                {/* title  */}
                <span className="text-primary-800 font-semibold text-xl">
                  {item.title}
                </span>

                <Link href="/">
                  <button className="bg-primary-900 mt-5 uppercase px-8 py-3 text-primary-50 text-[11px] md:text-[12px] font-semibold tracking-widest hover:bg-secondary-600">
                    {item.button}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default FeatureSection;

const FeatureProductData = [
  {
    id: 1,
    section: "New Arrivals",
    title: "Table Runners",
    button: "Explore All",
    img: FeatureImg1,
  },
  {
    id: 2,
    section: "Best Sellers",
    title: "Cookware Sets",
    button: "Explore All",
    img: FeatureImg2,
  },
  {
    id: 3,
    section: "Top Picks",
    title: "Kitchen Gadgets",
    button: "Explore All",
    img: FeatureImg3,
  },
];
