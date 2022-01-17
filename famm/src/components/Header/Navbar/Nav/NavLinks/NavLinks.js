import React, { useState, useContext } from "react";
import "./NavLinks.module.css";
import {
  faShoppingCart,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import classes from "./NavLinks.module.css";
import Context from "../../../../../Context/Context";

const text = ["Home", "Pages", "Products", "Blog", "Contact", "cart"];
function NavLinks() {
  const [toggleDropdownMenu, setToggleDropdownMenu] = useState(false);

  const context = useContext(Context);

  const togglingDropdownMenu = () => {
    setToggleDropdownMenu(!toggleDropdownMenu);
  };

  let dropMenu = null;
  if (toggleDropdownMenu === true) {
    dropMenu = (
      <>
        <div
          style={{
            height: "100vh",
            width: "100vw",
            zIndex: 900,
            position: "absolute",
            left: "-30rem",
            top: "-28px",
          }}
          onClick={togglingDropdownMenu}
        ></div>
        <ul className={classes.DropdownMenu} style={{ display: "block" }}>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="testimonial">Testimonial</Link>
          </li>
        </ul>
      </>
    );
  }

  let list = text.map((item, index) => {
    if (index === 1) {
      return (
        <li
          key={index}
          className={[classes.NavItem, classes.Dropdown].join(" ")}
          onClick={togglingDropdownMenu}
        >
          <Link
            className={[classes.NavLink, classes.DropdownToggle].join(" ")}
            to="/"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {" "}
            <span className="nav-label">
              {item} <span className="caret"></span>
            </span>
          </Link>

          {dropMenu}
        </li>
      );
    }

    if (index === 5) {
      return (
        <li
          key={index}
          className={[classes.NavItem, index === 0 ? classes.active : ""].join(
            " "
          )}
        >
          <Link
            className={[classes.NavLink, classes.CartTotalItemsContainer].join(
              " "
            )}
            to={index !== 0 ? "/" + item : "/"}
          >
            {index !== 5 ? item : <FontAwesomeIcon icon={faShoppingCart} />}

            {context.totalCountItems > 0 ? (
              <span className={classes.CartTotalItemsContainer}>
                {context.totalCountItems}
              </span>
            ) : null}
          </Link>
        </li>
      );
    }
    return (
      <li
        key={index}
        className={[classes.NavItem, index === 0 ? classes.active : ""].join(
          " "
        )}
      >
        <Link className={classes.NavLink} to={index !== 0 ? "/" + item : "/"}>
          {index !== 5 ? item : <FontAwesomeIcon icon={faShoppingCart} />}
        </Link>
      </li>
    );
  });

  return (
    <ul className={classes.NavbarNav}>
      {list}

      <form className={classes.FormInline}>
        <button
          className={[classes.Btn, classes.Nav_searchBtn].join(" ")}
          type="submit"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </ul>
  );
}

export default NavLinks;
