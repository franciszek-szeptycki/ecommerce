import React from "react";

export default function Category(props){
    const choiceCategories = (slug) => {
        props.setCategories(`${slug}`)
        
    }
    return(
        <li onClick={() => choiceCategories(props.element.slug)} key={props.element.id}><b>{props.element.name}</b></li>
    )
}