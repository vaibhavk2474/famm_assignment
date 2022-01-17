import { faEnvelope, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter,faLinkedinIn, faInstagram, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from './ProductPageFooter.module.css';

function ProductPageFooter() {
  return (
    <footer className={classes.FooterSection}>
      <div className={classes.Container}>
        <div className={classes.Row}>
          <div className={[classes.Col_md_4, classes.FooterCol].join(" ")}>
            <div className={classes.FooterContact}>
              <h4>Reach at..</h4>
              <div className={classes.ContactLinkBox}>
                <a href="">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>

                  <FontAwesomeIcon icon={faMapMarker} />
                  <span>Location</span>
                </a>
                <a href="">
                  {/* <i className="fa fa-phone" aria-hidden="true"></i> */}
                  <FontAwesomeIcon icon={faPhone} />

                  <span>Call +01 1234567890</span>
                </a>
                <a href="">
                  {/* <i className="fa fa-envelope" aria-hidden="true"></i> */}

                  <FontAwesomeIcon icon={faEnvelope} />

                  <span>demo@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className={[classes.Col_md_4, classes.FooterCol].join(" ")}>
            <div className={classes.FooterDetails}>
              <a href="index.html" className={classes.FooterLogo}>
                Famms
              </a>
              <p>
                Necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with
              </p>
              <div className={classes.FooterSocial}>
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="">
                  {/* <i className="fa fa-twitter" aria-hidden="true">

                  </i> */}
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="">
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                  <FontAwesomeIcon icon={faPinterestP} />
                </a>
              </div>
            </div>
          </div>
          <div className={[classes.Col_md_4, classes.FooterCol].join(" ")}>
            <div className={classes.MapContainer}>
              <div className={classes.Map}>
                <div className={classes.GoogleMap}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.FooterInfo}>
          <div className={[classes.Col_lg_7, classes.Mx_auto, classes.Px_0].join(" ")}>
            <p>
              &copy; <span id="displayYear"></span> All Rights Reserved By
              <a href="#">Free Html Templates</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ProductPageFooter;
