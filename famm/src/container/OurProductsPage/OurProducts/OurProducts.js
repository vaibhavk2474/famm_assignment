import React, {useState, useEffect} from "react";

import ProductsList from "../../../components/Products/ProductsList/ProductsList";
import ProductsVisitBtn from "../../../components/Products/ProductsVisitBtn/ProductsVisitBtn";
import axios from 'axios';

function OurProducts() {

   const [productData, setproductData] = useState([])
   const [showModal, setShowModal] = useState(true)

   useEffect(() => {

    axios.get ("http://localhost:8000").then(response=>{
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
    <section class="product_section layout_padding">
      <div class="container">
        <div class="heading_container heading_center">
          <h2>
            Our <span>products</span>
          </h2>
        </div>

        {<ProductsList  productDataList = {productData} showModal={showModal} showModalHandler={showModalHandler}/>}

        {<ProductsVisitBtn/>}


      </div>
    </section>
  );
}

export default OurProducts;
