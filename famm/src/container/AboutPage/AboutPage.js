import React from 'react'
import WhySection from '../../components/WhySection/WhySection'
import AboutPageFooter from '../../components/Footer/ProductPageFooter/ProductPageFooter'
import InnerPageSection from '../../components/InnerPageSection/InnerPageSection'
import Header from '../../components/Header/Header'

function AboutPage() {
    return (
      <>
      <Header/>
        <InnerPageSection innerTitle="About Us"/>

        <WhySection/>
        <AboutPageFooter/>
      </>
    )
}

export default AboutPage
