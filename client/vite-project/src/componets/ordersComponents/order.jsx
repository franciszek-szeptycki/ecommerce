import React from "react";
//Import object products
import { productsList } from "../mainAppLayout/layoutComponents/objProducts.jsx";
import ProductBagItem from "./productBagItem.jsx";
//Import tools
import "./styles/style.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
export default function OrderUser() {
  const mapElements = productsList.map((element) => {
    return <ProductBagItem element={element} />;
  });
  return (
    <>
      <div className="orders-container">
        <main className="orders-wrapper">
          <header>
            <Link to="/appLayout">
              <button className="header-item">
                <b>{<FaHome />}</b> Home
              </button>
            </Link>
            <p className="header-item">User</p>
            <p className="header-item">{localStorage.getItem("User name")}</p>
          </header>
          <section id="info-container">
            <div className="info-container-item">
              <h2 className="wrapper-info-item">basket</h2>
              <button className="wrapper-info-item">Buy</button>
            </div>
            <div className="info-container-item">
              <p id="text-check-order">All products are available</p>
            </div>
          </section>
          <section id="list-box-orders" className="info-container-item">
            {mapElements}
          </section>
        </main>
      </div>
    </>
  );
}
