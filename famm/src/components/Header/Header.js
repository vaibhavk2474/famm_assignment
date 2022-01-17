import React from "react";
import Navbar from "./Navbar/Navbar";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.Header_section}>
      <div className={classes.Container}>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
