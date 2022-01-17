import React, { useEffect,useRef } from "react";
import classes from "./SliderCarousel.module.css";

function SliderCarousel() {

  const ref_Slider = useRef();
  const ref_ul = useRef();
  let sectionNumber = 1;


  const onClickHandler = (event) => {
    
    event.preventDefault();

    // console.log(ref_Slider.current);
    let id = event.target.id;
    // console.log(id);

      sectionNumber = id;

    let allList = ref_ul.current.children

    // console.log(ref_ul.current.children);
    // document.querySelector(
    //   `.${classes.Slider}`
    // ).style.transform = `translate(-${(id - 1) * 25}%)`;

    ref_Slider.current.style.transform=`translate(-${(id - 1) * 25}%)`;
    ref_Slider.current.style.transition = "all 0.3s";
    // allList.forEach((li) => {
      
    //   li.classList.remove(classes.Clicked)
      
    // });

    for (let i = 0; i < allList.length; i++) {
      const element = allList[i];
      // console.log(element);

      element.classList.remove(classes.Clicked)
      
    }
    event.target.classList.add(classes.Clicked)



  };

  const autoPlayHandler = () => {
    let allList = ref_ul.current.children


    ref_Slider.current.style.transform=`translate(-${(sectionNumber) * 25}%)`;
    ref_Slider.current.style.transition = "all 0.3s";
    // allList.forEach((li) => {
      
    //   li.classList.remove(classes.Clicked)
      
    // });
    for (let i = 0; i < allList.length; i++) {
      const element = allList[i];
      // console.log(element);

      element.classList.remove(classes.Clicked)
      
    }
   allList[sectionNumber].classList.add(classes.Clicked)

    sectionNumber++;
  };

  useEffect(() => {
    

  let interval =  setInterval(()=>{
    // console.log(sectionNumber);

    if (sectionNumber>3) {
        sectionNumber=0
    }
      autoPlayHandler();
  },5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={classes.MainContainer}>
      <div className={classes.Carousel}>
        <div
        ref={ref_Slider}
        className={classes.Slider}>
         <section>
            <div className={classes.DetailsBox}>
              <h1>
                <span>Sale 20% Off</span>
                <br />
                On Everything
              </h1>
              <p>
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque
                magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                suscipit fugiat molestias, veniam, vel architecto veritatis
                delectus repellat modi impedit sequi.
              </p>
              <div className={classes.BtnBox}>
                <a href="" className={classes.Btn1}>
                  Shop Now
                </a>
              </div>
            </div>
          </section>

          <section>
            <div className={classes.DetailsBox}>
              <h1>
                <span>Sale 20% Off</span>
                <br />
                On Everything
              </h1>
              <p>
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque
                magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                suscipit fugiat molestias, veniam, vel architecto veritatis
                delectus repellat modi impedit sequi.
              </p>
              <div className={classes.BtnBox}>
                <a href="" className={classes.Btn1}>
                  Shop Now
                </a>
              </div>
            </div>
          </section>

          <section>
            <div className={classes.DetailsBox}>
              <h1>
                <span>Sale 20% Off</span>
                <br />
                On Everything
              </h1>
              <p>
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque
                magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                suscipit fugiat molestias, veniam, vel architecto veritatis
                delectus repellat modi impedit sequi.
              </p>
              <div className={classes.BtnBox}>
                <a href="" className={classes.Btn1}>
                  Shop Now
                </a>
              </div>
            </div>
          </section>

          <section>
            <div className={classes.DetailsBox}>
              <h1>
                <span>Sale 20% Off</span>
                <br />
                On Everything
              </h1>
              <p>
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque
                magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                suscipit fugiat molestias, veniam, vel architecto veritatis
                delectus repellat modi impedit sequi.
              </p>
              <div className={classes.BtnBox}>
                <a href="" className={classes.Btn1}>
                  Shop Now
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className={classes.Controls}>
          <ul   ref={ref_ul} className={classes.List}>
            <li 
               
                id="1" className={[classes.listItem,classes.Clicked].join(" ")} onClick={onClickHandler}></li>
            <li
             id="2"className={classes.listItem}  onClick={onClickHandler}></li>
            <li 
             id="3" className={classes.listItem}  onClick={onClickHandler}></li>
            <li 
             id="4" className={classes.listItem}  onClick={onClickHandler}></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SliderCarousel;
