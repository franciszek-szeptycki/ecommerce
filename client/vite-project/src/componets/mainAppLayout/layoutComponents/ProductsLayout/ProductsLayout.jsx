import React, { useState } from "react";
import ProductNav from "./ProductNavBar";
import ProductsBoard from "./ProductsBoard";


export default function ProductsLayout() {
  const [category, setCategory] = useState("");
  return (
    <>
      <ProductNav setCategory={setCategory} />
      <ProductsBoard category={category} />
    </>
  );
}
