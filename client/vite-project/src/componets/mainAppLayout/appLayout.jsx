import React, { useState } from "react";

//Import components
import NavBar from "./layoutComponents/navBar";
import ModalOptions from "./layoutComponents/modalOptions";
import Slider from "./layoutComponents/Slider";
import ProductsLayout from "./layoutComponents/ProductsLayout/ProductsLayout";
import TestPlace from "./layoutComponents/Sections";
//Import tools

import "./mainStyles/index.css";

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

      <TestPlace />

      <ProductsLayout
        modalOptionsAccount={modalStateOptionsAccount}
        setModalOptionsAccount={setModalStateOptionsAccount}
      />
    </>
  );
}
