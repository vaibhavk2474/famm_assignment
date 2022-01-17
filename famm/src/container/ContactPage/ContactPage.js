import React from 'react'
import ArrivalSection from '../../components/ArrivalSection/ArrivalSection'
import ContactUsFormSection from '../../components/ContactUsFormSection/ContactUsFormSection'
import ContactPageFooter from '../../components/Footer/ProductPageFooter/ProductPageFooter'
import Header from '../../components/Header/Header'
import InnerPageSection from '../../components/InnerPageSection/InnerPageSection'

function ContactPage() {
    return (
        <div>

<Header/>
        <InnerPageSection innerTitle={"Contact Us"}/>
        <ContactUsFormSection/>
            <ArrivalSection/>
            <ContactPageFooter/>
            
        </div>
    )
}

export default ContactPage
