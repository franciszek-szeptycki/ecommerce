import React from "react";
import "./styles/ProductNav.css";
import { FaSearch } from "react-icons/fa";

export default function ProductNav(props) {
  return (
    <>
      <section className="product-nav">
        <p className="product-nav-item">
          <b>Products</b>
        </p>
        <button
          onClick={() => props.setMenuState(true)}
          className="product-nav-item"
        >
          <b>Search {<FaSearch />}</b>
        </button>
      </section>
    </>
  );
}
