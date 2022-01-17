import React from "react";
import classes from './ToggleBtn.module.css';

function ToggleBtn(props) {


  return (
    <button
      className={classes.NavbarToggler}
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded={props.state}
      aria-label="Toggle navigation"
      onClick={props.onClickToggleBtnHandler}

    >
      <span className=""> </span>
    </button>
  );
}

export default ToggleBtn;
