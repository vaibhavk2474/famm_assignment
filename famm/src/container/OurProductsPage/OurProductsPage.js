import React from 'react'
import ProductPageFooter from '../../components/Footer/ProductPageFooter/ProductPageFooter'
import InnerPageSection from '../../components/InnerPageSection/InnerPageSection'
import OurProducts from './OurProducts/OurProducts'

function OurProductsPage() {
    return (

    <>

    <InnerPageSection innerTitle={"Products List"}/>
       <OurProducts/>
       <ProductPageFooter/>
    </>
       
    )
}

export default OurProductsPage
