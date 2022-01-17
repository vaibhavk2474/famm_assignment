import React from "react";

import classes from './Product.module.css';

function Product(props) {
    const productDetails = props.productDetails;
    const {name, pic, price} = productDetails;

  return (
    <div  className={[classes.Col_sm_6,classes.Col_md_4, classes.Col_lg_4].join(" ")}>
      <div  className={classes.Box}>
        <div className={classes.OptionContainer}>
          <div  className={classes.Options}>
            <a href=""    className={classes.Option1}>
             {name}
            </a>
            <a href="" className={classes.Option2} onClick={props.addToCart}>
              Add to Cart
            </a>
          </div>
        </div>
        <div className={classes.ImgBox}>
          <img src={pic} alt="pic" />
        </div>
        <div className={classes.DetailsBox}>
          <h5>{name}</h5>
          <h6>${price}</h6>
        </div>
      </div>
    </div>
  );
}

export default Product;
