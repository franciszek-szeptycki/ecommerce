import React, { useState } from "react";
import "./ProductNav.css";
import { FaFilter, FaSearch } from "react-icons/fa";
import axios from "axios";

export default function ProductNav(props) {
  const [categorys, setCategorys] = useState([]);

  window.onload = () => {
    axios.get("").then((res) => {
      setCategorys(categorys.push(res.data));
    });
  };

  const categorysElementsMap = categorys.map((element) => {
    return <li>{}</li>;
  });

  return (
    <>
      <section className="product-nav">
        <p className="product-nav-item">
          <b>Products</b>
        </p>
        <button className="product-nav-item">
          <b>Categores {<FaSearch />}</b>
        </button>
        <div className="wrapper-category">
          <ul>{categorysElementsMap}</ul>
        </div>
      </section>
    </>
  );
}
