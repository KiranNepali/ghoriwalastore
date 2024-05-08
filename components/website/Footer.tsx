"use client";
import React from "react";

// payment method icons
import SkrillPaymentImg from "@/public/images/payment/Skrill.svg";
import PaypalPaymentImg from "@/public/images/payment/paypal.svg";
import VisaPaymentImg from "@/public/images/payment/visa.svg";
import Image from "next/image";

import { Icon } from "@iconify/react";

type Props = {};

function Footer({}: Props) {
  return (
    <main className="border-t-[1.5px] py-5  border-primary-200 w-full flex flex-col justify-center items-center">
      <div className="w-11/12 h-full flex justify-center items-center">
        <div className="w-full grid grid-cols-2 lg:grid-cols-6 gap-y-6  place-content-center place-items-start mx-auto">
          {/* Help section  */}
          <div className="w-full flex flex-col gap-3">
            {/* title  */}
            <div className="w-full flex flex-col">
              <span className="font-semibold text-lg">Help</span>
              <hr className=" bg-secondary-500  h-[2px] w-[20%] mt-2" />
            </div>

            {/* links */}
            <div className="flex flex-col text-sm gap-2">
              <span>Search</span>
              <span>Help</span>
              <span>Information</span>
              <span>Privacy Policy</span>
              <span>Shipping Details</span>
            </div>
          </div>

          {/* <!-- Information section --> */}
          <div className="w-full flex flex-col gap-3">
            {/* <!-- title --> */}
            <div className="w-full flex flex-col">
              <span className="font-semibold text-lg">Information</span>
              <hr className=" bg-secondary-500  h-[2px] w-[20%] mt-2" />
            </div>

            {/* <!-- links --> */}
            <div className="flex flex-col text-sm gap-2">
              <span>Search Terms</span>
              <span>Advanced Search</span>
              <span>Help & Faq's</span>
              <span>Store Location</span>
              <span>Orders & Returns</span>
            </div>
          </div>

          {/* <!-- Support section --> */}
          <div className="w-full flex flex-col gap-3">
            {/* <!-- title --> */}
            <div className="w-full flex flex-col">
              <span className="font-semibold text-lg">Support</span>
              <hr className=" bg-secondary-500  h-[2px] w-[20%] mt-2" />
            </div>

            {/* <!-- links --> */}
            <div className="flex flex-col text-sm gap-2">
              <span>Contact us</span>
              <span>About Us</span>
              <span>Careers</span>
              <span>Refunds & Returns</span>
              <span>Deliveries</span>
            </div>
          </div>

          {/* <!-- Follow section --> */}
          <div className="w-full flex flex-col gap-3">
            {/* <!-- title --> */}
            <div className="w-full flex flex-col">
              <span className="font-semibold text-lg">Follow Us</span>
              <hr className=" bg-secondary-500  h-[2px] w-[20%] mt-2" />
            </div>

            {/* <!-- links --> */}
            <div className="flex flex-col text-sm gap-2">
              <div className="flex   gap-2">
                <span className="">
                  <Icon icon="ic:outline-phone" />
                </span>
                98*******
              </div>
              <div className="flex gap-2">
                <span className="">
                  <Icon icon="bytesize:telephone" />
                </span>
                (123) 98*******
              </div>
              <div className="flex gap-2">
                <span className="">
                  <Icon icon="ic:outline-mail" />
                </span>
                johndoe@gmail.com
              </div>
              <div className="flex gap-2">
                <span className="">
                  <Icon icon="ic:outline-map" />
                </span>
                Kapan-3, Kathmandu
              </div>
              <span className="flex mt-5 gap-3">
                <span className="w-[1.5rem] h-[1.5rem] hover:scale-[1.3] duration-200 cursor-pointer">
                  <Icon
                    icon="logos:twitter"
                    className="w-full h-full object-cover object-center"
                  />
                </span>
                <span className="w-[1.5rem] h-[1.5rem] hover:scale-[1.3] duration-200 cursor-pointer">
                  <Icon
                    icon="logos:whatsapp-icon"
                    className="w-full h-full object-cover object-center"
                  />
                </span>
                <span className="w-[1.5rem] h-[1.5rem] hover:scale-[1.3] duration-200 cursor-pointer">
                  <Icon
                    icon="skill-icons:instagram"
                    className="w-full h-full object-cover object-center"
                  />
                </span>
                <span className="w-[1.5rem] h-[1.5rem] hover:scale-[1.3] duration-200 cursor-pointer">
                  <Icon
                    icon="devicon:behance"
                    className="w-full h-full object-cover object-center"
                  />
                </span>
              </span>
            </div>
          </div>

          {/* <!-- Newsletter section --> */}
          <div className="w-full flex flex-col gap-3 col-span-2">
            {/* <!-- title --> */}
            <div className="w-full flex flex-col">
              <span className="font-semibold text-lg">Newsletter</span>
              <hr className=" bg-secondary-500  h-[2px] w-[20%] mt-2" />
            </div>

            {/* <!-- links --> */}
            <div className="flex  w-full flex-col text-sm gap-3">
              <span>Be the first who learns about our great promotions!</span>

              <div className="w-full h-[3rem] bg-black flex">
                <input
                  className="outline-none text-[11px] p-2 w-full bg-primary-50"
                  type="text"
                  placeholder="Write something.."
                />
                <button className="text-primary-50 font-semibold px-3 text-[13px] hover:bg-secondary-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom part  */}
      <div className="w-11/12 mt-8 md:mt-0   md:py-6 flex flex-col md:flex-row justify-between gap-2 md:gap-5  items-start md:items-center">
        {/* LOGO  */}
        <div>Logo</div>

        {/* Payment icons  */}
        <div className="flex gap-5">
          <Image src={SkrillPaymentImg} alt="skrill-payment" width={40}></Image>
          <Image src={PaypalPaymentImg} alt="skrill-payment" width={40}></Image>
          <Image src={VisaPaymentImg} alt="skrill-payment" width={40}></Image>
        </div>

        {/* copyright  */}
        <span className="text-[12px] font-medium text-primary-400">
          © Copyright 2025 | WebX
        </span>
      </div>
    </main>
  );
}

export default Footer;
