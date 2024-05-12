import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";

import NewProductImg1 from "@/public/images/new-product/new1Img.webp";
import NewProductImg2 from "@/public/images/new-product/new2Img.webp";
import NewProductImg3 from "@/public/images/new-product/new3Img.webp";
// import NewProductImg4 from "@/public/images/new-product/new4Img.webp";
import NewProductImg5 from "@/public/images/new-product/new5Img.webp";
import NewProductImg6 from "@/public/images/new-product/new6Img.webp";
import NewProductImg7 from "@/public/images/new-product/new7Img.webp";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Affiliations = () => {
  const affRef = useRef(null);

  useGSAP(
    () => {
      const tl1 = gsap.timeline({ repeat: -1 });
      const tl2 = gsap.timeline({ repeat: -1 });
      const tl12 = gsap.timeline({ repeat: -1 });
      const tl22 = gsap.timeline({ repeat: -1 });

      tl2
        .to(".text3", {
          x: "0%",
          duration: 0.5,
          ease: "power4.inOut",
          // delay: 0.5,
        })
        .to(".text3", {
          y: "100%",
          duration: 3,
          delay: 0.5,
          // ease: "power4.inOut",
        })
        .to(
          ".text1",
          {
            y: "0%",
            duration: 1,
            ease: "expo.inOut",
            // delay: 0.5,
          },
          1
        )
        .to(
          ".text1",
          {
            x: "-100%",
            duration: 2,
            delay: 0.5,
            // ease: "expo.inOut",
          },
          2
        );
      tl22
        .to(".text32", {
          x: "0%",
          duration: 5,
          ease: "power4.inOut",
          // delay: 0.5,
        })
        .to(".text32", {
          y: "100%",
          duration: 3,
          delay: 0.5,
          // ease: "power4.inOut",
        })
        .to(
          ".text12",
          {
            y: "0%",
            duration: 1,
            ease: "expo.inOut",
            // delay: 0.5,
          },
          1
        )
        .to(
          ".text12",
          {
            x: "-100%",
            duration: 2,
            delay: 0.5,
            // ease: "expo.inOut",
          },
          2
        );
      tl1
        .to(
          ".text",
          {
            y: "-100%",
            duration: 1.2,
            // ease: "expo.inOut",
            delay: 0.5,
          },
          0
        )
        .to(
          ".text",
          {
            x: "100%",
            duration: 4,
            delay: 0.5,
            ease: "expo.inOut",
          },
          1.2
        )
        .to(
          ".text2",
          {
            x: "0%",
            duration: 3,
            // ease: "expo.inOut",
            // delay: 0.5,
          },
          0.7
        )
        .to(
          ".text2",
          {
            y: "-100%",
            duration: 7,
            delay: 0.5,
            ease: "expo.inOut",
          },
          0
        )

        .to(
          ".text4",
          {
            x: "0%",
            duration: 2,
            // ease: "power4.inOut",
            delay: 0.5,
          },
          1
        )
        .to(
          ".text4",
          {
            y: "100%",
            duration: 3,
            delay: 1,
            ease: "power4.inOut",
          },
          1
        );
      tl12
        .to(
          ".textt",
          {
            y: "-100%",
            duration: 2.8,
            // ease: "expo.inOut",
            delay: 0.5,
          },
          0
        )
        .to(
          ".textt",
          {
            x: "100%",
            duration: 4,
            delay: 2,
            ease: "expo.inOut",
          },
          0
        )
        .to(
          ".text22",
          {
            x: "0%",
            duration: 1,
            // ease: "expo.inOut",
            // delay: 0.5,
          },
          0
        )
        .to(
          ".text22",
          {
            y: "-100%",
            duration: 4,
            delay: 0.5,
            ease: "expo.inOut",
          },
          0
        )

        .to(
          ".text42",
          {
            x: "0%",
            duration: 2,
            // ease: "power4.inOut",
            delay: 0.5,
          },
          0.2
        )
        .to(
          ".text42",
          {
            y: "100%",
            duration: 5,
            // delay: 0.5,
            ease: "power4.inOut",
          },
          0
        );
    }
    // { scope: affRef.current }
  );

  return (
    <div
      ref={affRef}
      id="affiliations"
      className="h-full  my-20  w-full "
    >
      {/* title  */}
      <div className="flex flex-col justify-center items-center gap-5">
        <span className="text-2xl md:text-4xl font-semibold">Brand</span>
        <hr className="bg-secondary-500 w-[6rem] rounded-[110%] h-[3px]" />
      </div>

      {/* new motion repeat  */}
      <div className="whole-div relative mt-[3rem] flex flex-nowrap overflow-hidden py-4 w-full mx-auto ">
        <div className="absolute h-full w-[10%]  top-0 left-0  bg-gradient-to-r from-[#fff] via-[#fff] to-transparent   z-20"></div>
        <div className="absolute h-full w-[10%]  top-0 right-0 bg-gradient-to-r from-transparent via-[#fff] to-[#fff] z-20"></div>
        {[1, 2, 3].map((item) => {
          return (
            <motion.div
              key={item}
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
              className="move  gap-8 flex pr-8 justify-center z-10"
            >
              {logoData.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col min-w-[100px] min-h-fit "
                  >
                    <div className="four w-full h-full">
                      <Image
                        className="h-full  w-full object-contain"
                        src={item.logo}
                        alt="company logo"
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          );
        })}
      </div>
      <div className="whole-div relative flex flex-nowrap overflow-hidden py-4 w-full mx-auto ">
        <div className="absolute h-full w-[10%]  top-0 left-0  bg-gradient-to-r from-[#fff] via-[#fff] to-transparent   z-20"></div>
        <div className="absolute h-full w-[10%]  top-0 right-0 bg-gradient-to-r from-transparent via-[#fff] to-[#fff] z-20"></div>
        {[1, 2, 3].map((item) => {
          return (
            <motion.div
              key={item}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
              className="move  gap-8 flex pr-8 justify-center z-10"
            >
              {logoData2.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col min-w-[100px] min-h-fit  "
                  >
                    <div className="four w-full h-full">
                      <Image
                        className="h-full w-full object-contain"
                        src={item.logo}
                        alt="brand logo"
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Affiliations;

const logoData = [
  {
    id: 13,
    logo: NewProductImg1,
  },

  {
    id: 15,
    logo: NewProductImg2,
  },
  {
    id: 16,
    logo: NewProductImg3,
  },
  {
    id: 13,
    logo: NewProductImg1,
  },
  {
    id: 15,
    logo: NewProductImg2,
  },
  {
    id: 16,
    logo: NewProductImg3,
  },
];
const logoData2 = [
  {
    id: 13,
    logo: NewProductImg1,
  },

  {
    id: 15,
    logo: NewProductImg2,
  },
  {
    id: 16,
    logo: NewProductImg3,
  },
  {
    id: 13,
    logo: NewProductImg1,
  },
  {
    id: 15,
    logo: NewProductImg2,
  },
  {
    id: 16,
    logo: NewProductImg3,
  },
];
