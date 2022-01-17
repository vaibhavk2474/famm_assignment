import React from 'react'
import ClientSection from '../../components/ClientSection/ClientSection'
import TestimonialPageFooter from '../../components/Footer/ProductPageFooter/ProductPageFooter'
import Header from '../../components/Header/Header'
import InnerPageSection from '../../components/InnerPageSection/InnerPageSection'

function TestimonialPage() {
    return (
        <>

        <Header/>

           <InnerPageSection innerTitle = "Testimonial" />
           <ClientSection/>
           <TestimonialPageFooter/>
            
        </>
    )
}

export default TestimonialPage
