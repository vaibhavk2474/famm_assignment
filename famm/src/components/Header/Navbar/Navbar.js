import React  from "react";
import Nav from "./Nav/Nav";
import classes from "./Navbar.module.css";
import NavbarBrand from "./NavbarBrand/NavbarBrand";
import Toggle from "./Toggle/Toggle";

function Navbar() {

  return (
    <nav
      className={[
        classes.Navbar,
        classes.NavbarExpandLg,
        classes.Custom_navContainer,
      ].join(" ")}
    >
      <NavbarBrand />

      <Toggle />

      <div className={classes.WithoutToggle}>
        <Nav />
      </div>
    </nav>
  );
}

export default Navbar;
