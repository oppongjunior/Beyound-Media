import React from "react";
import { Link } from "react-router-dom";
import "./FolioCard.css";

function FolioCard({ folio = {} }) {
  const { title = "Folio Title", category = "category", photo = ["images/folio_1.jpg"] } = folio;
  return (
    <div className="item owl-carousel-item bg-primary">
      <img src={`${photo[0]}`} alt="" />
      <div className="info-box">
        <div className="carousel-info-box text-center">
          <Link to={`/category/${category}`} className="category">
            {category}
          </Link>
          <Link to={`/${title}`} className="title">
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FolioCard;
