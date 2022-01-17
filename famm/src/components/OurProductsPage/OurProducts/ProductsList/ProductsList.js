import React from "react";
import { useLocation } from "react-router-dom";
import Modal from "../../../UI/Modal/Modal";
import Product from "./Product/Product";
import classes from './ProductsList.module.css';

function ProductsList(props) {

  const location = useLocation()
  // console.log(props.productDataList,location);
  if (props.productDataList && props.productDataList.length===0 ) {

     if ( location.pathname === '/') {
      return <p style={{textAlign:"center"}}>data is not being fetched</p>
     }
    return (
     
      <Modal show = {props.showModal}  modalClosed ={props.showModalHandler} >data is not being fetched</Modal>
    );
  }

  return (
    <div className={classes.Row}>

  {  props.productDataList.map(item=>{
      return <Product key={item.id} productDetails={item.details} id={item.id} addToCart={(event)=>{
        event.preventDefault()  
        console.log(event.target.textContent); 
        event.target.textContent ="added"

        props.addToCartHandler(item)

        setTimeout(()=>{

            event.target.textContent ="add to cart";


        },200)
      }}/>
  })}
    </div>
  );
}

export default ProductsList;
