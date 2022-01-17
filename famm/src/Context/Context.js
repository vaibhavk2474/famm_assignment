import react from 'react';

const Context =  react.createContext({
    cartItems:[],
    totalCountItems:0,
    addToCartHandler:(id)=>{},
    removeItem:()=>{},
    countIncrement:()=>{},
    countDecrement:()=>{},
  });
  
 
  
  
  
export default Context
