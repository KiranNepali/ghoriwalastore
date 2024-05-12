"use client";
import React from "react";
import Hero from "./Hero";
import FeatureSection from "./FeatureBrand";
import NewProduct from "./NewProduct";
import CollectionSection from "./CollectionSection";
import SocialProduct from "./SocialProduct";
import Review from "./Reviews";

type Props = {};

function HomeMain({}: Props) {
  return (
    <div className="mx-auto w-full ">
      <div className="w-full">
        <Hero />
      </div>
      <div className="w-11/12 mx-auto">
        <FeatureSection />
      </div>
      <div className="w-11/12 mx-auto">
        <NewProduct />
      </div>
      <div className="w-full mx-auto">
        <CollectionSection />
      </div>
      <div className="w-11/12 mx-auto">
        <SocialProduct />
      </div>

      <div className="w-11/12 mx-auto">
        <Review />
      </div>
    </div>
  );
}

export default HomeMain;
