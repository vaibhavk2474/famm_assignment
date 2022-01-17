import React,   {useEffect, useState} from "react";
import "./Toggle.module.css";
import ToggleBtn from "./ToggleBtn/ToggleBtn";
import ToggleNav from "./ToggleNav/ToggleNav";

function Toggle() {

    const [toggle, setToggle] = useState("");

    const onClickToggleBtnHandler=()=>{
        setToggle(!toggle)
    }



    useEffect(() => {
      let interval = setInterval(()=>{
        console.log(window.innerWidth);
        if (window.innerWidth>992) {
          setToggle("")
        }
      },500)
  
      return () => {
        clearInterval(interval)
      }
    }, [])

  

    


  return (
    <>
      <ToggleBtn state={toggle} onClickToggleBtnHandler={onClickToggleBtnHandler} />
       <ToggleNav state={toggle}/>
    </>
  );
}

export default Toggle;
