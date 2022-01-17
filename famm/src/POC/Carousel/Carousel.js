import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import classes from './Carousel.module.css';

function DemoCarousel() {

    let sectionNumber=1;
   const  onPreviousClickHandler=()=>{

    if (sectionNumber<2) {

        return;
        
    }

    let sec = sectionNumber-2//2 1

    // document.querySelector(`.${classes.Slider}`).classList.add(classes.animation)
    document.querySelector(`.${classes.Slider}`).style.transform=`translate(-${sec * 25}%)`
    document.querySelector(`.${classes.Slider}`).style.transition="all 0.3s"


    sectionNumber--
    console.log("clicked",sectionNumber);

  
}
   const  onClickHandler=()=>{


        if (sectionNumber>3) {

            return;
            
        }
        // document.querySelector(`.${classes.Slider}`).classList.add(classes.animation)
        document.querySelector(`.${classes.Slider}`).style.transform=`translate(-${sectionNumber * 25}%)`
        document.querySelector(`.${classes.Slider}`).style.transition="all 0.3s"

        sectionNumber++

    console.log("clicked",sectionNumber);

    }


    
    return (
        <div className={classes.Container}>
        <div className={classes.Carousel}>
          <div className={classes.Slider} >
            <section>Content for panel 1</section>
            <section>Content for panel 2</section>
            <section>Content for panel 3</section>
            <section>Content for panel 4</section>
          </div>
          <div className={classes.Control}>
            <span className={[classes.Arrow,classes.Left].join(" ")} onClick={onPreviousClickHandler}>
              <i class="material-icons" >
             <FontAwesomeIcon icon={faArrowLeft}/>
              </i>
            </span>
            <span className={[classes.Arrow,classes.Right].join(" ")} onClick={onClickHandler}>
              <i class="material-icons">
              <FontAwesomeIcon icon={faArrowRight}/>

              </i>
            </span>
            <ul>
              <li  className={classes.Selected}></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default DemoCarousel
