import React from "react";
import Slider from "./Slider/Slider";
import classes from "./HeroArea.module.css";

function HeroArea() {
  return (
    <div className={classes.HeroArea}>
      <Slider />
    </div>
  );
}

export default HeroArea;
