import React, { useState } from "react";
import ProductNav from "./ProductNavBar";
import ProductsBoard from "./ProductsBoard";
import ProductsSideMenu from "./ProductsSideMenu";

export default function ProductsLayout() {
  const [category, setCategory] = useState("");
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <ProductNav setMenuState={setMenuState} setCategory={setCategory} />
      <ProductsBoard  category={category} />
      <ProductsSideMenu category={category} setCategory={setCategory}  menuState={menuState} setMenuState={setMenuState} />
    </>
  );
}
