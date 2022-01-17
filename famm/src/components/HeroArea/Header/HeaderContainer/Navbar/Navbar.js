import React, { useState,useEffect } from "react";
import  "./Navbar.css";
import logo from "../../../../../assets/images/logo.png";
import NavLinks from "./NavLinks/NavLinks";

function Navbar() {



  const [state, setstate] = useState({
    ariaExpanded:false,
    class:""
  });


  // setInterval(()=>{
   
  //    console.log(  window.innerWidth);

  //    if ( window.innerWidth>= 992) {
  //      setstate({
  //       ariaExpanded:false,
  //       class:""
  //      })
  //    }
  // },2000)

 const toglingButtonHandler=()=>{
  //  console.log("logging...");


  if (state.class==="" ) {
    setstate({
      ariaExpanded:!state.ariaExpanded,
      class:"toggleClicked"
    })
  } else {
    setstate({
      ariaExpanded:!state.ariaExpanded,
      class:`${state.class==="toggleClicked"?"toggleClosed":"toggleClicked"}`
    })
  }

 }
  return (
    <nav  className="navbar navbar-expand-lg custom_nav-container "
    >
      {/* <a className={classes.NavbarBrand} href="index.html"><img width="250" src="images/logo.png" alt="#" /></a> */}
      <a className="navbar-brand"  href="/">
        <img width="250" src={logo} alt="logo" />
      </a>

      <button
        className="navbar-toggler" 
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={state.ariaExpanded}
        aria-label="Toggle navigation"
        onClick={ toglingButtonHandler}>
        <span class=""> </span>
      </button>


      

      <div
        class={`nav1 navbar-collapse ${state.class}`}
        id="navbarSupportedContent"
      >
        <NavLinks />

      </div>

      <div
        class="nav2 navbar-collapse"
        id="navbarSupportedContent"
      >
        <NavLinks />

      </div>
    </nav>
  );
}

export default Navbar;
