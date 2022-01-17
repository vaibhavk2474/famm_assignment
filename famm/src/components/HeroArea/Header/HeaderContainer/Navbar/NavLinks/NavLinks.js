import React ,{useState} from "react";
import "./NavLinks.css";
import "../Navbar.css";
import { faShoppingCart , faSearch, fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function NavLinks() {

  const [toggleDropdownMenu, setToggleDropdownMenu] = useState(false);

  const togglingDropdownMenu=()=>{

        setToggleDropdownMenu(!toggleDropdownMenu)

  }
  
  let dropMenu = null
  if (toggleDropdownMenu === true) {
    dropMenu = (
      <>
        <div style= {{height:"100vh",width:"100vw",zIndex:900,position:"absolute", left:"-26rem",top:"-24px"}} onClick={togglingDropdownMenu}></div>
        <ul class="dropdown-menu" style={{ display: "block" }}>
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

  return (
    <ul className={"navbar-nav"}>
      <li class="nav-item">
        <Link class="nav-link" to="/">
          Home <span class="sr-only">(current)</span>
        </Link>
      </li>

      <li class="nav-item dropdown" onClick={togglingDropdownMenu}>
        <Link
          class="nav-link dropdown-toggle"
          to="#"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {" "}
          <span class="nav-label">
            Pages <span class="caret"></span>
          </span>
        </Link>

       {dropMenu}

      </li>

      <li class="nav-item">
        <Link class="nav-link" to="product">
          Products
        </Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link" to="blog">
          Blog
        </Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link" to="contact">
          Contact
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="#">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </li>
      <form class="form-inline">
        <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
          {/* <i class="fa fa-search" aria-hidden="true"></i> */}
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </form>
    </ul>
  );
}

export default NavLinks;
