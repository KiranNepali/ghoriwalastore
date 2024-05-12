import Image from "next/image";
import React from "react";

import CollectionBgImg from "@/public/images/collection/collection-bg.avif";
import Link from "next/link";

type Props = {};

function CollectionSection({}: Props) {
  return (
    <main className="w-full relative my-[5rem] h-[80vh] flex justify-center items-center">
      <div className="h-full flex justify-center items-center w-full">
        {/* background image  */}
        <div className="w-full h-full relative">
          <Image
            src={CollectionBgImg}
            alt="collection-bg"
            className="w-full h-full  object-cover object-center"
          ></Image>
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* middle card  */}
        <div className="absolute backdrop-blur-sm border-[2px]  top-[50%]   border-primary-200 text-primary-50 left-[50%] -translate-x-[50%] -translate-y-[50%] w-[90%] md:w-[35rem] h-[18rem] p-4 flex flex-col gap-3 justify-center items-center">
          <span className="text-2xl md:text-3xl font-semibold">
            Collection Fashion
          </span>
          <span className="text-xl md:text-2xl tracking-[10px]">
            JUST FOR YOU
          </span>

          <Link href="/" className="mt-[1rem]">
            <button className="bg-primary-900 mt-3 uppercase px-8 py-3 text-primary-50 text-[11px] md:text-[12px] font-semibold tracking-widest hover:bg-secondary-600">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default CollectionSection;
