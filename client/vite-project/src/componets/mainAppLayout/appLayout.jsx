import React, { useState } from "react";

//Import components
import NavBar from "./layoutComponents/navBar";
import ModalOptions from "./layoutComponents/modalOptions";
import Footer from "./layoutComponents/Footer";

import ProductsLayout from "./layoutComponents/ProductsLayout/ProductsLayout";
//Import tools

import "./mainStyles/mainAppStyles.css";

import Slider from "./layoutComponents/Slider";

export default function AppLayout() {
  const [modalStateOptionsAccount, setModalStateOptionsAccount] =
    useState(false);
  console.log(localStorage.getItem("Account Token"));

  return (
    <>
      <NavBar
        modalOptionsAccount={modalStateOptionsAccount}
        setModalOptionsAccount={setModalStateOptionsAccount}
      />
      <ModalOptions
        state={modalStateOptionsAccount}
        setState={setModalStateOptionsAccount}
      />

      <Slider />
      <ProductsLayout
        modalOptionsAccount={modalStateOptionsAccount}
        setModalOptionsAccount={setModalStateOptionsAccount}
      />
     
    </>
  );
}
