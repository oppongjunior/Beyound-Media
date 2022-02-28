import React from "react";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";
import "./Services.css";
import { serviceData } from "./ServicesData";

function Services() {
  return (
    <div className="services-section" id="services">
      <div className="container">
        <div className="row">
          <h1 className="title">Services</h1>
          <p className="info">Our core business areas include;</p>
        </div>
        <div className="row services-container justify-content-center">
          <div className="col-md-10">
            <div className="row">
              {serviceData.map((item, index) => {
                return <ServicesCard key={index} services={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
