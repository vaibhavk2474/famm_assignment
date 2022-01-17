import React from "react";
import NavLinks from "./NavLinks/NavLinks";
import classses from './Nav.module.css';

function Nav() {
  return (
    <div className={[classses.NavbarCollapse].join(" ")} id="navbarSupportedContent">
       <NavLinks/>
    </div>
  );
}

export default Nav;
