import React from 'react'
import Cart from '../../components/Cart/Cart'
import CartSectionPageFooter from '../../components/Footer/ProductPageFooter/ProductPageFooter'
import Header from '../../components/Header/Header'
import InnerPageSection from '../../components/InnerPageSection/InnerPageSection'

function CartSectionPage() {
    return (
        <>
        <Header/>
        <InnerPageSection innerTitle={"Cart Section"}/>

<Cart/>
        

        <CartSectionPageFooter/>

            
        </>
    )
}

export default CartSectionPage
