import React, { useState } from "react";
import ProductItemModal from "./ProductItemModal";
import { useNavigate } from "react-router";

export default function ProductsItem(props) {
  const [productModal, setProductModal] = useState(false);
  const style = {
    backgroundImage: `url(http://104.248.130.4${props.element.image})`,
  };

  return (
    <>
      <div onClick={() => setProductModal(true)} className="products-item-box">
        <div style={style} className="products-item-image" />
        <p className="products-item-title">
          <b>{props.element.name}</b>
        </p>
        <p className="products-item-price">{`${props.element.price} zł`}</p>
      </div>
      {
        <ProductItemModal
          itemName={props.element.name}
          itemPrice={props.element.price}
          itemImage={props.element.image}
          itemDescryption={props.element.descryption}
          productModal={productModal}
          setProductModal={setProductModal}
        />
      }
    </>
  );
}
