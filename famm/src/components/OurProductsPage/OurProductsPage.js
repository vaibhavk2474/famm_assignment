import React from 'react'
import ProductPageFooter from '../Footer/ProductPageFooter/ProductPageFooter'
import Header from '../Header/Header'
import InnerPageSection from '../InnerPageSection/InnerPageSection'
import OurProducts from './OurProducts/OurProducts'


function OurProductsPage() {
    return (

    <>
<Header/>

    <InnerPageSection innerTitle={"Products List"}/>
       <OurProducts/>
       <ProductPageFooter/>
    </>
       
    )
}

export default OurProductsPage
