import React, {useState, useEffect,useContext} from "react";
import classes from './OurProducts.module.css';
import ProductsList from "./ProductsList/ProductsList";
import axios from "axios";
import Context from "../../../Context/Context";



function OurProducts() {

   const [productData, setproductData] = useState([])
   const [showModal, setShowModal] = useState(true)

   const context = useContext(Context)

  //  console.log(context);

   useEffect(() => {

    axios.get ("http://localhost:8000/products").then(response=>{
         console.log(response.data);
         setproductData(response.data)
      }).catch(error=>{
         console.log(error);
      })
      
      
   }, [])





   const showModalHandler=()=>{
      setShowModal(false)
   }
  return (
    <section
      className={[classes.ProductSection, classes.LayoutPadding].join(" ")}
    >
      <div className={classes.Container}>
        <div
          className={[classes.HeadingContainer, classes.HeadingCenter].join(
            " "
          )}
        >
          <h2>
            Our <span>products</span>
          </h2>
        </div>

        <ProductsList   productDataList = {productData} addToCartHandler={context.addToCartHandler} showModal={showModal} showModalHandler={showModalHandler}/>

      </div>


    </section>
  );
}

export default OurProducts;
