import React,   {useState} from "react";
import classes from "./Toggle.module.css";
import ToggleBtn from "./ToggleBtn/ToggleBtn";
import ToggleNav from "./ToggleNav/ToggleNav";

function Toggle() {

    const [toggle, setToggle] = useState(false);

    const onClickToggleBtnHandler=()=>{
        setToggle(!toggle)
    }


  return (
    <>
      <ToggleBtn state={toggle} onClickToggleBtnHandler={onClickToggleBtnHandler} />
       <ToggleNav state={toggle}/>
    </>
  );
}

export default Toggle;
