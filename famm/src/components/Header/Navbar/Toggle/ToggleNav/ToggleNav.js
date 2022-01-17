import React, {useState} from "react";
import Nav from '../../Nav/Nav'
import classes from './ToggleNav.module.css'

function ToggleNav(props) {

    if (props.state===true) {
        return (
            <div className={[classes.WithToggle,classes.showMenuSlide].join(" ")}>
            <Nav/>
          </div>
        )  
    } else if(props.state===false) {
        return (
            <div className={[classes.WithToggle,classes.hideMenuSlide].join(" ")}>
            <Nav/>
          </div>
        )  
    }else{
        return null
    }

    

}

export default ToggleNav
