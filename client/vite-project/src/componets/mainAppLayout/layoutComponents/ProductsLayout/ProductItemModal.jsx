import React from "react";
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
          <div style={productBG} className="modal-product-item-img"></div>
          <section className="info-clicked-product-section">
            <header>
              <h5>{props.itemName}</h5>
            </header>
            <section className="price-clicked-product">
              <p>{props.itemPrice}</p>
            </section>
            <section className="buttons-product-section">
              <button>Add to Bag</button>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
