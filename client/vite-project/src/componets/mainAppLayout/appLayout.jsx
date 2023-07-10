import React, { useState } from "react";
import NavBar from "./layoutComponents/navBar";
import axios from 'axios'
import "./mainStyles/mainAppStyles.css";

export default function AppLayout() {

  window.onload = () => {
    // Start test axios systems 
    axios.get('https://todo-app-navroo.vercel.app/todo').then(res => {
      console.log(res.data)
    })
    //End test axios systems 
  }
  return (
    <>
    <NavBar/>
  
    </>
  );
}
