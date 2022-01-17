import React from 'react'
import WhySection from '../../components/WhySection/WhySection'
import BlogPageFooter from '../../components/Footer/ProductPageFooter/ProductPageFooter'
import InnerPageSection from '../../components/InnerPageSection/InnerPageSection'
import Header from '../../components/Header/Header'

function BlogPage() {
    return (

        <>

        <Header/>
<InnerPageSection innerTitle={"Blog List"}/>
        <WhySection/>
        <BlogPageFooter/>
        </>
    )
}

export default BlogPage;
