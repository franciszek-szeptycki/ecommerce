import React, { useEffect, useState } from "react";
import Category from "./Category";
import axios from "axios";
import "./styles/ProductsMain.css";
import { FaTimes } from "react-icons/fa";
export default function ProductsSideMenu(props) {
  const [categorys, setCategorys] = useState([]);

  const getDataCategories = () => {
    console.log("test");

    axios.get("/api/categories/").then((res) => {
      setCategorys(res.data);
      console.log(res.data)
    });
  };

  useEffect(() => {
    getDataCategories();
  }, []);

  const categorysElementsMap = categorys.map((element, idx) => {
    return <Category  setCategories={props.setCategory}  element={element} />;
  });
  return (
    <>
      <div
        className={`products-side-menu ${
          props.menuState ? "products-menu-active" : ""
        }`}
      >
        <div className="buttons-products-wrapper-menu">
          <button onClick={() => props.setMenuState(false)}>
            {<FaTimes />}
          </button>
        </div>
        <header>
          <h3>Categories</h3>
        </header>
        <div className="categorys-list-menu">
          <ul>{categorysElementsMap}</ul>
        </div>
      </div>
    </>
  );
}
