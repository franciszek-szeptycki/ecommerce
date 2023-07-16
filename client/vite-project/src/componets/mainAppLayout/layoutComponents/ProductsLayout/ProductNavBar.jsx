import React, { useState } from "react";
import "./styles/ProductNav.css";
import { FaFilter, FaSearch } from "react-icons/fa";
import axios from "axios";

export default function ProductNav(props) {
 

  return (
    <>
      <section className="product-nav">
        <p className="product-nav-item">
          <b>Products</b>
        </p>
        <button onClick={() => props.setMenuState(true)} className="product-nav-item">
          <b>Categores {<FaSearch />}</b>
        </button>
        
        
      </section>
      
    </>
  );
}
