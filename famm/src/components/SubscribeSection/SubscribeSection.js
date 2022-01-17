import React from "react";
import classes from './SubscribeSection.module.css';

function SubscribeSection() {
  return (
    <section className={classes.SubscribeSection}>
      <div  className={classes.ContainerFuild}>
        <div className={classes.Box}>
          <div className={classes.Row}>
            <div  className={[classes.Col_md_6, classes.Offset_md_3].join(" ")}>
              <div className={classes.SubscribeForm}>
                <div 
                className={[classes.HeadingContainer, classes.HeadingCenter].join(" ")}>
                  <h3>Subscribe To Get Discount Offers</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <form action="">
                  <input type="email" placeholder="Enter your email" />
                  <button>subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscribeSection;
