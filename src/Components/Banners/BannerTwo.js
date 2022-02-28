import React from "react";
import "./Banners.css";
import BrandImage from "../../asset/images/Brand_pattern.jpg";

function BannerTwo() {
  return (
    <div
      className="banner-two-container"
      style={{
        backgroundImage:
          `linear-gradient(#00000081,#0000009b),url(${BrandImage})`,
      }}
      id="top"
    >
    </div>
  );
}

export default BannerTwo;
