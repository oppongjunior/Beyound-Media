import React from "react";
import { Link } from "react-router-dom";
import {Link as ScrollLink, animateScroll} from "react-scroll";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-section py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="box text-center d-flex flex-column align-items-center">
              <div className="icon-box mb-4" onClick={()=> animateScroll.scrollToTop()}>
                <span>
                  <i className="fas fa-angle-double-up text-secondary"></i>
                </span>
              </div>
              <div>
                <Link to="/" className="me-2 text-dark">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="/#" className="text-dark">
                  <i className="fab fa-twitter"></i>
                </Link>
                <p>BEYOND MEDIA SOLUTIONS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
