import React, { useContext } from "react";
import Context from "../../Context/Context";
import InnerPageSection from "../InnerPageSection/InnerPageSection";
import classes from "./Cart.module.css";



function Cart() {
  const context = useContext(Context);

  if (context.totalCountItems === 0) {
    return (
      <div style={{ height: "15rem", textAlign: "center", paddingTop:"5rem",boxSizing:"border-box" }}>
        <p>No items are added</p>
      </div>
    );
  }

  return (
    <div  style={{  boxSizing:"border-box" , margin:"1rem"}}>
      {context.cartItems.map((item) => {
          console.log(item);
        if (item.count === 0) {
          return null;
        }

        let price = item.details.price * item.count;
        return (
          <div key={item.id} className={classes.Box}>
            <h2>{item.details.name}</h2>
            <div className={classes.imgContainer}>
                 <img src={item.details.pic} alt="pic"></img>
            </div>
            <p>price: ${price}</p>
            <p>
              count:{" "}
              <strong>
                <span onClick={() => context.countDecrement(item.id)}>-</span>
              </strong>{" "}
              {item.count}{" "}
              <strong>
                <span onClick={() => context.countIncrement(item.id)}>+</span>
              </strong>
            </p>
            <div>
              <span onClick={() => context.removeItem(item.id)}>
                Remove Item
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
