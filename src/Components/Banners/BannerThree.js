import React from "react";
import "./Banners.css";
import BrandImage from "../../asset/images/banner_3.jpg";

function BannerThree({title="ADVERTISING & MARKETING"}) {
  return (
    <div
      className="banner-three-container d-flex justify-content-center align-items-center"
      style={{
        backgroundImage:
          `linear-gradient(#00000022,#00000016),url(${BrandImage})`,
      }}
      id="top"

    >
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h1 className="text-light text-center display-1 text-uppercase title">{title}</h1>
                </div>
            </div>
        </div>
    </div>
  );
}

export default BannerThree;
