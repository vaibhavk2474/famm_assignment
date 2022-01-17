import React from 'react';
import arrivalBgURL from '../../assets/images/arrival-bg.png'
import classes from './ArrivalSection.module.css';

function ArrivalSection() {
    return (
        <section className={classes.ArrivalSection}>
        <div className={classes.Container}>
           <div className={classes.Box}>
              <div className={classes.ArrivalBgBox}>
                 <img src={arrivalBgURL} alt=""/>
              </div>
              <div className={classes.Row}>
                 <div  className={[classes.Col_md_6,classes.Ml_auto].join(" ")}>
                    <div 
                  className={[classes.HeadingContainer,classes.RemoveLineBt].join(" ")}>
                       <h2>
                          #NewArrivals
                       </h2>
                    </div>
                    <p style={{marginTop: "20px", marginBottom: "30px"}}>
                       Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
                    </p>
                    <a href="">
                    Shop Now
                    </a>
                 </div>
              </div>
           </div>
        </div>
     </section>
    )
}

export default ArrivalSection
