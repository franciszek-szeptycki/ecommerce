import React, { useState } from "react";
import ProductsItem from "./ProductsItem";
export default function ProductsBoard(props) {
  const [products, setProducts] = useState([]);
  //https://fer1s.github.io/
  //
  const productsElementsMap = products.map((element) => {
    return <ProductsItem element={element} />;
  });
  return (
    <>
      <div className="products-main-container">{productsElementsMap}</div>
    </>
  );
}
