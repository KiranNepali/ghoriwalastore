"use client";
import Link from "next/link";
import React, { useRef } from "react";

import { Icon } from "@iconify/react";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="w-11/12 mx-auto h-screen flex justify-center items-center">
      <form
        action=""
        className="w-full justify-start flex-col  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center p-5 md:w-[30rem]"
      >
        {/* logo  */}
        <div className="py-4 border-b-[1px] font-bold text-xl border-primary-100  w-full text-center">
          Logo
        </div>
        <div className="w-full flex gap-2">
          {/* username  */}
          <div className="w-full flex flex-col gap-2 mt-6">
            <label className="text-sm text-primary-500" htmlFor="username">
              Username
            </label>
            <div
              id="username"
              className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full h-[2.5rem]"
            >
              <input
                type="text"
                placeholder="Your full name"
                className="w-full h-full p-2 outline-none text-primary-400 text-[12px]"
              />
            </div>
          </div>
          {/* username  */}
          <div className="w-full flex flex-col gap-2 mt-6">
            <label className="text-sm text-primary-500" htmlFor="phone">
              Phone no.
            </label>
            <div
              id="phone"
              className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full h-[2.5rem]"
            >
              <input
                type="text"
                placeholder="Your phone no."
                className="w-full h-full p-2 outline-none text-primary-400 text-[12px]"
              />
            </div>
          </div>
        </div>

        {/* email address  */}
        <div className="w-full flex flex-col gap-2 mt-6">
          <label className="text-sm text-primary-500" htmlFor="email">
            Email Address
          </label>
          <div
            id="email"
            className="w-full h-[2.5rem] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          >
            <input
              type="text"
              placeholder="Your email"
              className="w-full h-full p-2 outline-none text-primary-400 text-[12px]"
            />
          </div>
        </div>

        <div className="w-full flex-grow flex mt-6 flex-col">
          <label className="text-sm text-primary-500" htmlFor="email">
            Message
          </label>
          <div className="w-full h-[5rem] flex-grow shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <textarea
              name=""
              id=""
              className="w-full h-full p-2 outline-none text-primary-400 text-[12px]"
              placeholder="Write something here.."
            ></textarea>
          </div>
        </div>

        {/* socio icons  */}
        <div className="flex justify-center w-full my-5 gap-3">
          {SocioIcon.map((item, index) => (
            <span
              key={index}
              className="w-[1.5rem] h-[1.5rem] hover:scale-[1.3] duration-200 cursor-pointer"
            >
              <Icon
                icon={item.src}
                className="w-full h-full object-cover object-center"
              />
            </span>
          ))}
        </div>

        {/* submit  */}
        <div className="w-full flex flex-col gap gap-2 ">
          {/* shop now button  */}
          <Link href="/" className="w-full flex justify-center">
            <button className="bg-primary-900 w-8/12 mt-2 md:mt-5 uppercase px-8 py-3 text-primary-50 text-[12px] font-semibold tracking-widest hover:bg-secondary-600">
              Submit
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Contact;

const SocioIcon = [
  {
    src: "logos:twitter",
  },
  {
    src: "logos:whatsapp-icon",
  },
  {
    src: "skill-icons:instagram",
  },
  {
    src: "devicon:behance",
  },
];
