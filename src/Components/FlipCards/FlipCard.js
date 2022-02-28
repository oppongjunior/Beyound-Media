import React from "react";
import "./FlipCard.css";
import { Link as ScrollLink } from "react-scroll";

function FlipCard({ MainServiceItem = {} }) {
  const {
    photo = "images/MainService_1.jpg",
    title = "Some Title For the Card",
    info = "We deliver marketing and advertising campaigns including social media management for our clients to ensure their business success",
    buttonText = "Learn More",
  } = MainServiceItem;

  return (
    <div className="col-md-6 col-lg-4 my-5">
      <div class="card-wrapper flip-right">
        <div class="card">
          {/* card front */}
          <div class="front" style={{ backgroundImage: `url('${photo}')` }}>
            <h3 className="title">{title}</h3>
          </div>
          {/* Card back */}
          <div class="back">
            <h3 className="title">{title}</h3>
            <p className="info">{info}</p>
            <div>
              <ScrollLink className="" to="services" smooth={true}>
                <button className="btn btn-dark flip-btn">{buttonText}</button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
