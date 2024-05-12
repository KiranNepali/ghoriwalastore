"use client";
import React from "react";

// payment method icons
import SkrillPaymentImg from "@/public/images/payment/Skrill.svg";
import PaypalPaymentImg from "@/public/images/payment/paypal.svg";
import VisaPaymentImg from "@/public/images/payment/visa.svg";
import GhoriwalaLogo from "@/public/images/ghoriwala-logo.png";

import Image from "next/image";

import { Icon } from "@iconify/react";
import Link from "next/link";

type Props = {};

function Footer({}: Props) {
  return (
    <main className="border-t-[1.5px] py-5 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]   w-full flex flex-col justify-center items-center">
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
            <div className="flex flex-col text-[12px] md:text-sm gap-2">
              {FooterData.Help.map((item, index) => (
                <span
                  key={index}
                  className="text-primary-400 hover:text-secondary-500 cursor-pointer hover:ml-[5px] duration-200"
                >
                  {item.name}
                </span>
              ))}
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
            <div className="flex flex-col text-[12px] md:text-sm gap-2">
              {FooterData.Information.map((item, index) => (
                <span
                  key={index}
                  className="text-primary-400 hover:text-secondary-500 cursor-pointer hover:ml-[5px] duration-200"
                >
                  {item.name}
                </span>
              ))}
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
            <div className="flex flex-col text-[12px] md:text-sm gap-2">
              {FooterData.Support.map((item, index) => (
                <span
                  key={index}
                  className="text-primary-400 hover:text-secondary-500 cursor-pointer hover:ml-[5px] duration-200"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>

          {/* <!-- Follow section --> */}
          <div className="w-full flex justify-start flex-col gap-3">
            {/* <!-- title --> */}
            <div className="w-full flex flex-col">
              <span className="font-semibold text-lg">Follow Us</span>
              <hr className=" bg-secondary-500  h-[2px] w-[20%] mt-2" />
            </div>

            {/* <!-- links --> */}
            <div className="flex flex-col text-[12px] md:text-sm gap-2">
              {FooterData.FollowUs.map((item, index) => (
                <div key={index} className="flex   gap-2">
                  <span className="">
                    <Icon icon={`${item.iname}`} />
                  </span>
                  <span className="text-primary-400 hover:text-secondary-500 cursor-pointer hover:ml-[5px] duration-200">
                    {item.contact}
                  </span>
                </div>
              ))}

              <div className="flex w-full  mt-5 gap-3">
                {FooterData.Icons.map((item, index) => (
                  <span
                    key={index}
                    className="w-[1.5rem] h-[1.5rem] hover:scale-[1.3] duration-200 cursor-pointer"
                  >
                    <Icon
                      icon={`${item.socioIcon}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </span>
                ))}
              </div>
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
              <span className="text-sm md:text-[15px]">
                Be the first who learns about our great promotions!
              </span>

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
      <div className="w-11/12 mt-8  flex flex-col md:flex-row justify-between gap-2 md:gap-5  items-start md:items-center">
        {/* LOGO  */}
        <Link href="/" className="cursor-pointer">
          <Image
            src={GhoriwalaLogo}
            alt="ghoriwala-storefront-logo "
            className="w-[7rem]  object-cover object-center"
          ></Image>
        </Link>
        {/* Payment icons  */}
        <div className="flex gap-5">
          <Image src={SkrillPaymentImg} alt="skrill-payment" width={40}></Image>
          <Image src={PaypalPaymentImg} alt="skrill-payment" width={40}></Image>
          <Image src={VisaPaymentImg} alt="skrill-payment" width={40}></Image>
        </div>

        {/* copyright  */}
        <span className="text-[10px] md:text-[12px] font-medium text-primary-400">
          © Copyright 2025 | WebX
        </span>
      </div>
    </main>
  );
}

export default Footer;

const FooterData = {
  Help: [
    { id: 1, name: "Search" },
    { id: 2, name: "Help" },
    { id: 3, name: "Information" },
    { id: 4, name: "Privacy Policy" },
    { id: 5, name: "Shipping Details" },
  ],
  Information: [
    { id: 1, name: "Search Terms" },
    { id: 2, name: "Advanced Search" },
    { id: 3, name: "Help & FAQ's" },
    { id: 4, name: "Store Location" },
    { id: 5, name: "Orders & Returns" },
  ],
  Support: [
    { id: 1, name: "Contact Us" },
    { id: 2, name: "About Us" },
    { id: 3, name: "Careers" },
    { id: 4, name: "Refunds & Returns" },
    { id: 5, name: "Deliveries" },
  ],
  FollowUs: [
    { contact: "98*******", iname: "ic:outline-phone" },
    { contact: "(123) 98*******", iname: "bytesize:telephone" },
    { contact: "johndoe@gmail.com", iname: "ic:outline-mail" },
    { contact: "Kapan-3, Kathmandu", iname: "ic:outline-map" },
  ],
  Icons: [
    { socioIcon: "logos:twitter" },
    { socioIcon: "logos:whatsapp-icon" },
    { socioIcon: "skill-icons:instagram" },
    { socioIcon: "devicon:behance" },
  ],
};
