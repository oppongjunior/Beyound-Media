import React from "react";
import SocialCard from "../../Components/SocialCard/SocialCard";
import "./Social.css";
import { socialData } from "./SocialData";

function Social() {
  return (
    <div
      className="social-section"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.8)),url(images/sponsor_bg.jpg)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2 className="title text-uppercase text-center text-light py-4">
              Get Connected
            </h2>
            <div className="row">
              {socialData.map((item, index) => {
                return <SocialCard key={index} social={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
