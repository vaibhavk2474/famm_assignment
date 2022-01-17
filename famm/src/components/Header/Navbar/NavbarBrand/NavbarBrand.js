import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";
import classes from './NavbarBrand.module.css';

// console.log(classes);
function NavbarBrand() {
  return (
    <Link className={classes.NavbarBrand} to="/">
      <img width="250" src={logo} alt="logo" />
    </Link>
  );
}

export default NavbarBrand;
