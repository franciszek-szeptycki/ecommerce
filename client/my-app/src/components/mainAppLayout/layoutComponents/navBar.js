import React from "react";

import { FaBars } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="navigation">
      <h3>ECOMMERCE</h3>

      <ul>
        <li>About</li>
        <li>Colaboration</li>
        <li>Help</li>
      </ul>

      <button className="btn-contact-nav">Contact</button>

      <button id="btn-toggle">{<FaBars />}</button>
    </nav>
  );
}
