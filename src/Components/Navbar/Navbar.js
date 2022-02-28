import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LogoImage from "../../asset/images/beyond_logo-official-2.jpg";
import {Link as ScrollLink} from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm py-3 sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/" >
         <img src={LogoImage} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="folio" smooth={true}>
                Folio
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="services"
                smooth={true}
              >
                Services
              </ScrollLink>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/company"
              >
                Company
              </Link>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                aria-current="page"
                to="contact"
              >
                Contact
              </ScrollLink>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/call"
              >
              <i className="fas fa-phone"></i>
                +19522886574
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
