import React from "react";
import classes from './InnerPageSection.module.css';

function InnerPageSection(props) {
  return (
    <section className={classes.InnerPageHead}>
      <div className={classes.ContainerFuild}>
        <div className={classes.Row}>
          <div className={classes.Col_md_12}>
          <div className={classes.Full}>
              <h3>{props.innerTitle}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InnerPageSection;
