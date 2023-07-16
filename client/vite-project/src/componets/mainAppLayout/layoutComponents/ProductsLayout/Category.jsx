import React from "react";

export default function Category(props){
    return(
        <li key={props.element.id}>{props.element.name}</li>
    )
}