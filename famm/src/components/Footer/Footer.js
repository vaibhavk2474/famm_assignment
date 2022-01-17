import React from "react";
import logo from "../../assets/images/logo.png";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer style={{ display: "block" }}>
        <div className={classes.Container}>
          <div className={classes.Row}>
            <div className={classes.Col_md_4}>
              <div className={classes.Full}>
                <div className={classes.LogoFooter}>
                  <a href="#">
                    <img width="210" src={logo} alt="#" />
                  </a>
                </div>
                <div className={classes.Information_f}>
                  <p>
                    <strong>ADDRESS:</strong> 28 White tower, Street Name New
                    York City, USA
                  </p>
                  <p>
                    <strong>TELEPHONE:</strong> +91 987 654 3210
                  </p>
                  <p>
                    <strong>EMAIL:</strong> yourmain@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.Col_md_8}>
              <div className={classes.Row}>
                <div className={classes.Col_md_7}>
                  <div className={classes.Row}>
                    <div className={classes.Col_md_6}>
                      <div className={classes.WidgetMenu}>
                        <h3>Menu</h3>
                        <ul>
                          <li>
                            <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="#">About</a>
                          </li>
                          <li>
                            <a href="#">Services</a>
                          </li>
                          <li>
                            <a href="#">Testimonial</a>
                          </li>
                          <li>
                            <a href="#">Blog</a>
                          </li>
                          <li>
                            <a href="#">Contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className={classes.Col_md_6}>
                      <div className={classes.WidgetMenu}>
                        <h3>Account</h3>
                        <ul>
                          <li>
                            <a href="#">Account</a>
                          </li>
                          <li>
                            <a href="#">Checkout</a>
                          </li>
                          <li>
                            <a href="#">Login</a>
                          </li>
                          <li>
                            <a href="#">Register</a>
                          </li>
                          <li>
                            <a href="#">Shopping</a>
                          </li>
                          <li>
                            <a href="#">Widget</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.Col_md_5}>
                  <div className={classes.WidgetMenu}>
                    <h3>Newsletter</h3>
                    <div className={classes.Information_f}>
                      <p>
                        Subscribe by our newsletter and get update protidin.
                      </p>
                    </div>
                    <div className={classes.FormSub}>
                      <form>
                        <fieldset>
                          <div className={classes.field}>
                            <input
                              type="email"
                              placeholder="Enter Your Mail"
                              name="email"
                            />
                            <input type="submit" value="Subscribe" />
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className={classes.Cpy_}>
        <p>
          © 2021 All Rights Reserved By{" "}
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </div>
    </>
  );
}

export default Footer;
