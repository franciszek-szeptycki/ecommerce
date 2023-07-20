import React from "react";
import "./styles/ProductItemModal.css";

import { FaTimes, FaShoppingCart, FaShoppingBasket } from "react-icons/fa";
export default function ProductItemModal(props) {
  const productBG = {
    backgroundImage: `url(http://104.248.130.4${props.itemImage})`,
  };

  return (
    <>
      <div
        className={`product-modal-item ${
          props.productModal ? "active-product-modal" : ""
        }`}
      >
        <div className="product-modal-box-item">
          <div
            style={productBG}
            id="modal-product-item-img"
            className="modal-product-item-section"
          ></div>

          <section
            id="info-clicked-product-section"
            className="modal-product-item-section"
          >
            <button onClick={() => props.setProductModal(false)} className="btn-modal-item-hidden">{<FaTimes />}</button>
            <header>
              <h5>
                <b>{props.itemName}</b>
              </h5>
            </header>
            <section className="price-clicked-product">
              <p>
                <b>
                  {<FaShoppingBasket />} {props.itemPrice} zł
                </b>
              </p>
            </section>
            <section className="buttons-product-section">
              <button>
                {<FaShoppingCart />} <b>Add to Bag</b>
              </button>
            </section>
            <section className="descryption-btn-show-box">
              <button>
                <b>Descryption...</b>
              </button>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
