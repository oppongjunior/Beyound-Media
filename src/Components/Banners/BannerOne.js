import React from "react";
import "./Banners.css";

function BannerOne() {
  return (
    <div
      className="banner-one-container"
      style={{
        backgroundImage:
          "linear-gradient(#0000002d,#0000003e),url(images/banner_1.jpg)",
      }}
      id="top"
    >
      <div className="text-container">
        <div className="container">
          <h1 className="text-center">
            Accelerating business and organization's success through organic
            media
          </h1>
        </div>
      </div>
      <div className="banner-overlay"></div>
    </div>
  );
}

export default BannerOne;
