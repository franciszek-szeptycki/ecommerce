import React from "react";

export default function ProductBagItem(props) {
  return (
    <div className="product-bag-item" key={props.element.id}>
      <img
        src={`http://104.248.130.4${props.element.image}`}
        alt="product image"
      />
      <section>
        <h5>{props.element.name}</h5>
        <p>{props.element.price} zł</p>
      </section>
    </div>
  );
}
