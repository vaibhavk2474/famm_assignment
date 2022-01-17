
import React from 'react';
import classes from './WhySection.module.css';
import WhySectionList from './WhySectionList/WhySectionList';

function WhySection() {
    return (
        <section className={[classes.WhySection,classes.LayoutPadding].join(" ")}>
           <div className={classes.Container}>
              <div className={[classes.HeadingContainer, classes.HeadingCenter].join(" ")}>
                 <h2>
                    Why Shop With Us
                 </h2>
              </div>

<WhySectionList/>
           </div>
        </section>
        
    )
}

export default WhySection
