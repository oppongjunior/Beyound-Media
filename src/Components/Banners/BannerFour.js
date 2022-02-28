import React from "react";
import "./Banners.css";
import BrandImage from "../../asset/images/banner_3.jpg";

function BannerFour() {
  return (
    <div
      className="banner-three-container"
      style={{
        backgroundImage:
          `linear-gradient(#00000022,#00000016),url(${BrandImage})`,
      }}
      id="top"
    >
    <div className="container text-light h-100">
        <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-4">
                <div className="box text-center">
                    <div className="icon-box">
                        <i className="fas fa-user-circle fa-4x"></i>
                    </div>
                    <h1 className="title text-uppercase display-1">Root</h1>
                    <p>View all authors posts further down below.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default BannerFour;
