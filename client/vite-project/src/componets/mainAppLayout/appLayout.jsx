import React, { useState } from "react";

//Import components
import NavBar from "./layoutComponents/navBar";
import ModalOptions from "./layoutComponents/modalOptions";

//Import tools
import axios from 'axios'
import "./mainStyles/mainAppStyles.css";


export default function AppLayout() {

  const [modalStateOptionsAccount, setModalStateOptionsAccount] = useState(false)
 
  axios.get('/auth/login').then((res) => {console.log(res)})
  
  return (
    <>
    <NavBar modalOptionsAccount={modalStateOptionsAccount} setModalOptionsAccount={setModalStateOptionsAccount} />
    <ModalOptions state={modalStateOptionsAccount} setState={setModalStateOptionsAccount}/>
  
    </>
  );
}
