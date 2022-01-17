import React from 'react'
import classes from './ContactUsFormSection.module.css';

function ContactUsFormSection() {
    return (
        <section className={[classes.WhySection,classes.LayoutPadding].join(" ")}>
        <div className={classes.Container}>
        
           <div className={classes.Row}>
              <div className={[classes.Col_lg_8,classes.Offset_lg_2].join(" ")}>
                 <div className={classes.Full}>
                    <form action="index.html">
                       <fieldset>
                          <input type="text" placeholder="Enter your full name" name="name" required />
                          <input type="email" placeholder="Enter your email address" name="email" required />
                          <input type="text" placeholder="Enter subject" name="subject" required />
                          <textarea placeholder="Enter your message" required></textarea>
                          <input type="submit" value="Submit" />
                       </fieldset>
                    </form>
                 </div>
              </div>
           </div>
        </div>
     </section>
    )
}

export default ContactUsFormSection
