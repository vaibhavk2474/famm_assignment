import React,{useState} from "react";
import "./App_01.css";
function App_01() {

    const [state, setstate] = useState(["container"]);

    const clicked =()=>{
       if (state.length === 1) {

        setstate(["container", "show"])
           
       } else {
        setstate(["container"])
       }
    }
  return (
    <>
      <div className={state.join(" ")}>hi</div>

      <button onClick={clicked}>click</button>
    </>
  );
}

export default App_01;
