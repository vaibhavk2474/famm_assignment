import React from 'react'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './WhySectionList.module.css';


const text = ["Fast Delivery","Free Shiping","Best Quality"]
function WhySectionList() {

    let list = text.map((item,index)=>{
      return  (
            <div key={index} className={classes.Col_md_4}>
              <div className={classes.Box}>
                <div className={classes.ImgBox}>
                  <FontAwesomeIcon icon={faAddressCard} />
                </div>
                <div className={classes.DetailBox}>
                  <h5>{item}</h5>
                  <p>variations of passages of Lorem Ipsum available</p>
                </div>
              </div>
            </div>
          );
    })
    return (
        <div className={classes.Row}>

{
    list
}
     </div>
    )
}

export default WhySectionList
