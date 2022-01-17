import React from 'react';

import classes from './Backdrop.css';

let style={
    width: "100%",
    height:"100%",
    position: "fixed",
    zIndex: "100",
    left: "0",
    top: "0",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
}
const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} style={style} onClick={props.clicked}></div> : null
);

export default backdrop;