import React from "react";
import "./ServicesCard.css";

function ServicesCard({ services = {} }) {
  const {
    subTitle = "Some subtitle",
    icon = "far fa-clock",
    info = "Beyond Media Solutions believes in creating and adopting innovative approaches so our clients can have confidence in their business decisions.",
  } = services;
  return (
    <div className="col-md-6 col-lg-4">
      <div className="service-card-box">
        <div>
          <div className="icon-box tip">
            <i className={`${icon}`}></i>
          </div>
        </div>
        <div className="box">
          <h3 className="subtitle">{subTitle}</h3>
          <p className="info">{info}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
