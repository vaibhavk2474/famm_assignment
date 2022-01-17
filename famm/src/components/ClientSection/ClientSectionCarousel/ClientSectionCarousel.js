import React, { useEffect,useRef } from "react";
import { faArrowLeft, faArrowRight, faLongArrowAltLeft, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ClientSectionCarousel.module.css";
import clientImg from './../../../assets/images/client.jpg';

function ClientSectionCarousel() {

  const ref_slider = useRef(null)
  let sectionNumber = 1;
  const onPreviousClickHandler = () => {
    if (sectionNumber < 2) {
      return;
    }

    let sec = sectionNumber - 2; //2 1

    // document.querySelector(`.${classes.Slider}`).classList.add(classes.animation)
  ref_slider.current.style.transform = `translate(-${sec * 25}%)`;
  ref_slider.current.style.transition = "all 0.3s";

    sectionNumber--;
    // console.log("clicked", sectionNumber);
  };
  const onClickHandler = () => {
    if (sectionNumber > 3) {
      return;
    }
    // document.querySelector(`.${classes.Slider}`).classList.add(classes.animation)
    ref_slider.current.style.transform = `translate(-${sectionNumber * 25}%)`;
    ref_slider.current.style.transition = "all 0.3s";

    sectionNumber++;

    // console.log("clicked", sectionNumber);
  };





  useEffect(() => {
    let interval = setInterval(()=>{
          // console.log(sectionNumber);
              if (sectionNumber==4) {
    
            sectionNumber=0
              
          }
          onClickHandler();
    

      },5000)
      return () => {
          clearInterval(interval)
      }
  }, [])

  return (
    <div className={classes.Container}>
      <div className={classes.Carousel}>
        <div
        ref={ref_slider} className={classes.Slider}>
          <section>
          <div className={classes.ImgContainer}>
              <div className={classes.ImgBox}>
                <div className={classes.ImgBoxInner}>
                  <img src={clientImg} alt="" />
                </div>
              </div>
            </div>

            <div className={classes.DetailsBox}>
              <h5>Anna Trevor</h5>
              <h6>Customer</h6>
              <p>
                Dignissimos reprehenderit repellendus nobis error quibusdam?
                Atque animi sint unde quis reprehenderit, et, perspiciatis,
                debitis totam est deserunt eius officiis ipsum ducimus ad labore
                modi voluptatibus accusantium sapiente nam! Quaerat.
              </p>
            </div>
          </section>
          <section>
          <div className={classes.ImgContainer}>
              <div className={classes.ImgBox}>
                <div className={classes.ImgBoxInner}>
                  <img src={clientImg} alt="" />
                </div>
              </div>
            </div>

            <div className={classes.DetailsBox}>
              <h5>Anna Trevor 2</h5>
              <h6>Customer</h6>
              <p>
                Dignissimos reprehenderit repellendus nobis error quibusdam?
                Atque animi sint unde quis reprehenderit, et, perspiciatis,
                debitis totam est deserunt eius officiis ipsum ducimus ad labore
                modi voluptatibus accusantium sapiente nam! Quaerat.
              </p>
            </div>
          </section>
          <section>
          <div className={classes.ImgContainer}>
              <div className={classes.ImgBox}>
                <div className={classes.ImgBoxInner}>
                  <img src={clientImg} alt="" />
                </div>
              </div>
            </div>

            <div className={classes.DetailsBox}>
              <h5>Anna Trevor 3</h5>
              <h6>Customer</h6>
              <p>
                Dignissimos reprehenderit repellendus nobis error quibusdam?
                Atque animi sint unde quis reprehenderit, et, perspiciatis,
                debitis totam est deserunt eius officiis ipsum ducimus ad labore
                modi voluptatibus accusantium sapiente nam! Quaerat.
              </p>
            </div>
          </section>
          <section>
          <div className={classes.ImgContainer}>
              <div className={classes.ImgBox}>
                <div className={classes.ImgBoxInner}>
                  <img src={clientImg} alt="" />
                </div>
              </div>
            </div>

            <div className={classes.DetailsBox}>
              <h5>Anna Trevor 4</h5>
              <h6>Customer</h6>
              <p>
                Dignissimos reprehenderit repellendus nobis error quibusdam?
                Atque animi sint unde quis reprehenderit, et, perspiciatis,
                debitis totam est deserunt eius officiis ipsum ducimus ad labore
                modi voluptatibus accusantium sapiente nam! Quaerat.
              </p>
            </div>
          </section>

        </div>
        <div className={classes.Controls}>
          <span
            className={[classes.Arrow, classes.Left].join(" ")}
            onClick={onPreviousClickHandler}
          >
           
              <FontAwesomeIcon style={{width:"1rem", height:"1rem", color:"#eee"}} icon={faLongArrowAltLeft} />
      
          </span>
          <span
            className={[classes.Arrow, classes.Right].join(" ")}
            onClick={onClickHandler}
          >
     
              <FontAwesomeIcon style={{width:"1rem", height:"1rem", color:"#eee"}}  icon={faLongArrowAltRight} />
    
          </span>

        </div>
      </div>
    </div>
  );
}

export default ClientSectionCarousel;
