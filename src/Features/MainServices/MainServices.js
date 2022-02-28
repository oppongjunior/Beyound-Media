import React from "react";
import FlipCard from "../../Components/FlipCards/FlipCard";
import { mainServiceData } from "./MainServiceData";
import "./MainServices.css";

function MainServices() {
  return (
    <div>
      <div className="container">
        <div className="row flip-container justify-content-center">
          <div className="col-md-10">
            <div className="row">
              {mainServiceData.map((item, index) => {
                return <FlipCard key={index} MainServiceItem={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainServices;
