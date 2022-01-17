import React from "react";
import sliderBgURL from "../../../assets/images/slider-bg.jpg"
import classes from './Slider.module.css';
import SliderCarousel from "./Carousel/SliderCarousel";

function Slider() {
  return (
    <section className={classes.SliderSection}>
      <div className={classes.SliderBgBox}>
        <img src={sliderBgURL} alt="sliderBg" />
      </div>
      <SliderCarousel/>
    </section>
  );
}

export default Slider;
