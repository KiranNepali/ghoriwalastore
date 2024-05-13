import ProductDetailMain from "@/components/website/ProductDetail/ProductDetailMain";
import React from "react";
import ProductsData from "@/data/products";

type Props = {};

function page({}: Props) {
  return (
    <div>
      <ProductDetailMain />
    </div>
  );
}

export default page;
