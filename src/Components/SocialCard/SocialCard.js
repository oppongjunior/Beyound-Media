import React from "react";
import { Link } from "react-router-dom";
import "./SocialCard.css";

function SocialCard({social = {}}) {
    const {name="Youtube", title="Some Title", icon="fab fa-facebook", color="#fff"} = social
  return (
    <div className="col-md-3">
      <div className="social-box">
        <div className="icon-box">
          <Link to="/#">
            <i className={`${icon}`}></i>
          </Link>
        </div>
        <h3 className="title">
          <Link to="/#"  style={{ color:`${color}` }}>{name}</Link>
        </h3>
        <h3 className="subtitle">
          <Link to="/#">{title}</Link>
        </h3>
      </div>
    </div>
  );
}

export default SocialCard;
