import React, { useState } from "react";

import {
  FaBars,
  FaRegLightbulb,
  FaUserCircle,
  FaRegEdit,
} from "react-icons/fa";

export default function NavBar() {
  const [menuHandler, setmenuHandler] = useState(false);

  return (
    <>
      <nav className="navigation">
        <h3>ECOMMERCE</h3>

        <ul>
          <li>{<FaUserCircle />}   About</li>
          <li>{<FaRegEdit />}   Colaboration</li>
          <li>{<FaRegLightbulb />}   Help</li>
        </ul>

        <button className="btn-contact-nav">Contact</button>

        <button onClick={() => setmenuHandler(!menuHandler)} id="btn-toggle">
          {<FaBars />}
        </button>
      </nav>
      <div className={`drop-menu ${menuHandler ? "active-menu" : ""}`}>
        <header>
          <button className="btn-close-menu">Contact</button>
        </header>
        <ul>
          <li>{<FaUserCircle />} About</li>
          <li>{<FaRegEdit />} Colaboration</li>
          <li>{<FaRegLightbulb />} Help</li>
        </ul>
      </div>
    </>
  );
}
