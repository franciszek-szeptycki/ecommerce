import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsItem from "./ProductsItem";
export default function ProductsBoard(props) {
  const [products, setProducts] = useState([]);
  

  const getCategories = () => {
    axios.get(`api/categories/${props.category}`, {
    
    }).then((res) => {
      setProducts(res.data)
      console.log(res.data)
     
    })
  }

  useEffect(() => {
      props.category ? getCategories() : ''
  }, [props.category])
  console.log(products)
  
  const productsElementsMap = products.map((element) => {
    return <ProductsItem element={element} />;
  });
  return (

    <>
      <header>
        <h3></h3>
      </header>
      <div className="products-main-container">{productsElementsMap}</div>
    </>
  );
}
