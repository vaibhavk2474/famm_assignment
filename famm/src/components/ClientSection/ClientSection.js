import React from "react";
import classes from "./ClientSection.module.css";
import ClientSectionCarousel from "./ClientSectionCarousel/ClientSectionCarousel";

function ClientSection() {
  return (
    <section
      className={[classes.ClientSection, classes.LayoutPadding].join(" ")}
    >
      <div className={classes.Container}>
        <div
          className={[classes.HeadingContainer, classes.HeadingCenter].join(
            " "
          )}
        >
          <h2>Customer's Testimonial</h2>
        </div>


<ClientSectionCarousel/>
{/* <ClientSectionCarousel_01/> */}

      </div>


    </section>
  );
}

export default ClientSection;
