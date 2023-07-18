import React from "react";

export default function ProductsItem(props){
   const style = {
    backgroundImage: `url(http://104.248.130.4/${props.element.image})`,
   }
    return(
        <>

        <div  className="products-item-box">
            <div style={style} className="products-item-image"/>
            <p className="products-item-title"><b>{props.element.name}</b></p>
            <p className="products-item-price">{`${props.element.price} zł`}</p>
        </div>
        </>
    )
}