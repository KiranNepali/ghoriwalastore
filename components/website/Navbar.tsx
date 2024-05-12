"use client";
import { Icon } from "@iconify/react";
import { gsap, Expo } from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GhoriwalaLogo from "@/public/images/ghoriwala-logo.png";
type Props = {};

function Navbar({}: Props) {
  const [openNav, setOpenNav] = useState(false);
  const sideNavRef = useRef(null);

  const { contextSafe } = useGSAP();
  const toggleNav = contextSafe(() => {
    if (!openNav) {
      gsap.to(sideNavRef.current, {
        opacity: 1,
        width: "100vw",
        duration: 0.7,
        display: "flex",
        ease: Expo.easeIn,
      });
      setOpenNav(true);
    }
    if (openNav) {
      gsap.to(sideNavRef.current, {
        opacity: 0,
        width: 0,
        duration: 0.5,
        display: "none",
        ease: Expo.easeOut,
      });
      setOpenNav(false);
    }
  });

  // search div
  const [showSearch, setShowSearch] = useState(false);
  const mainNavRef = useRef(null);
  const handleSearch = contextSafe(() => {
    if (!showSearch) {
      gsap.to(mainNavRef.current, {
        opacity: 1,
        display: "flex",
        height: "20vh",
        duration: 0.5,
        ease: Expo.easeOut,
      });
      setShowSearch(true);
    } else {
      gsap.to(mainNavRef.current, {
        opacity: 0,
        height: 0,
        duration: 0.5,
        display: "hidden",
        ease: Expo.easeOut,
      });
      setShowSearch(false);
    }
  });

  const [navColor, setNavColor] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentYPosition = window.scrollY;

      if (currentYPosition > 10) {
        setNavColor(true);
      }
      if (currentYPosition < 10) {
        setNavColor(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navColor]);

  return (
    <>
      <div
        className={`w-full ${
          navColor ? "bg-[#FF0100] backdrop-blur-sm  " : "bg-[#FF0100]"
        } fixed top-0 left-0 mx-auto h-[4rem] w-full  flex justify-start items-start z-[40]`}
      >
        <div className="w-11/12 mx-auto  h-full flex justify-between items-center">
          {/* logo  */}
          <Link href="/" className="cursor-pointer">
            <Image
              src={GhoriwalaLogo}
              alt="ghoriwala-storefront-logo "
              className="w-[10rem]  object-cover object-center"
            ></Image>
          </Link>
          {/* right part  */}
          <div className="flex  gap-[2rem]">
            {RightNavIcon.map((item, index) => (
              <Link
                href={index === 3 ? "products" : index === 1 ? "contact" : ""}
                onClick={() => {
                  index === 4 ? toggleNav() : index === 0 ? handleSearch() : "";
                }}
                key={index}
                className={`cursor-pointer text-white  hover:scale-[1.5] duration-150 ${
                  index !== 4 ? "hidden md:block" : ""
                }`}
              >
                <Icon width={20} icon={item.icon} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div
        ref={mainNavRef}
        className="fixed top-[4rem] left-0 w-full h-0 hidden opacity-0  bg-primary-300 z-10   justify-center items-center"
      >
        <div className="w-[25rem]  flex bg-white h-[2.5rem] overflow-hidden">
          <input
            type="text"
            className="outline-none w-full h-full p-3 text-[12px]"
            placeholder="Search here.."
          />
          <button className="px-3 h-full bg-primary-800 text-primary-50">
            <Icon width={20} icon="mdi:search" />
          </button>
        </div>
      </div>

      {/* side  nav  */}
      <div
        ref={sideNavRef}
        className="side-nav opacity-0 hidden fixed  z-[40] inset-0  h-screen   w-full"
      >
        <div className="flex w-full  justify-start items-center">
          <div className="w-full md:w-[30vw] relative flex flex-col justify-center items-center p-10 bg-white  h-full">
            {/* close button  */}
            <div
              onClick={toggleNav}
              className="w-full absolute right-[10%] top-[5%] z-10 flex cursor-pointer items-center justify-end  caret-transparent"
            >
              <div className="group relative inline-flex w-[2rem] h-[2rem]  items-center justify-center overflow-hidden rounded-full border-2 font-semibold uppercase ">
                <span className="ease absolute z-10 flex h-full w-full translate-y-full items-center justify-center rounded-full bg-secondary-500 text-primary-800 duration-300 group-hover:translate-y-0"></span>
                <div className="absolute z-50 flex h-full w-full items-center justify-center text-primary-800 group-hover:text-primary-200">
                  <svg
                    height="40px"
                    width="40px"
                    viewBox="0 0 72 72"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="black"
                      d="M 19 15 C 17.977 15 16.951875 15.390875 16.171875 16.171875 C 14.609875 17.733875 14.609875 20.266125 16.171875 21.828125 L 30.34375 36 L 16.171875 50.171875 C 14.609875 51.733875 14.609875 54.266125 16.171875 55.828125 C 16.951875 56.608125 17.977 57 19 57 C 20.023 57 21.048125 56.609125 21.828125 55.828125 L 36 41.65625 L 50.171875 55.828125 C 51.731875 57.390125 54.267125 57.390125 55.828125 55.828125 C 57.391125 54.265125 57.391125 51.734875 55.828125 50.171875 L 41.65625 36 L 55.828125 21.828125 C 57.390125 20.266125 57.390125 17.733875 55.828125 16.171875 C 54.268125 14.610875 51.731875 14.609875 50.171875 16.171875 L 36 30.34375 L 21.828125 16.171875 C 21.048125 15.391875 20.023 15 19 15 z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full  flex flex-col gap-5 justify-center items-center">
              {/* side nav links  */}
              <div className="w-8/12 gap-4  flex-col flex justify-center">
                {sideNavLinks.map((item, index) => (
                  <Link
                    onClick={toggleNav}
                    key={index}
                    href={
                      item.name === "Home"
                        ? "/"
                        : item.name === "Products"
                        ? "/products"
                        : item.name === "Contact"
                        ? "contact"
                        : ""
                    }
                    className="w-full text-primary-400 hover:text-secondary-600 hover:ml-5 duration-150 flex justify-between items-center"
                  >
                    <span className="text-lg font-semibold uppercase">
                      {item.name}
                    </span>
                    <Icon icon="ic:twotone-arrow-right-alt" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div
            onClick={toggleNav}
            className="hidden md:block w-full h-full  backdrop-blur-sm"
          ></div>
        </div>
      </div>
    </>
  );
}
export default Navbar;

const RightNavIcon = [
  { id: 1, name: "search", icon: "mdi:search" },
  { id: 2, name: "user", icon: "mdi:user" },
  { id: 3, name: "favourite", icon: "mdi:favourite" },
  { id: 4, name: "cart", icon: "mdi:cart" },
  { id: 5, name: "sideNav", icon: "fluent-mdl2:secondary-nav" },
];

const sideNavLinks = [
  {
    id: "1",
    name: "Home",
  },
  {
    id: "1",
    name: "Products",
  },
  {
    id: "1",
    name: "Contact",
  },
  {
    id: "1",
    name: "Blogs",
  },
];
