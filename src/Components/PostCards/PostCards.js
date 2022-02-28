import React from "react";
import "./PostCards.css";
import { Link } from "react-router-dom";
function PostCards({ card = {} }) {
  const {
    title = "Some Title",
    category = "Post category",
    photo = [],
    date = "20/nov/2020",
  } = card;

  const day = new Date(date).getDate();
  const month = new Date(date).toLocaleString("en-US", { month: "short" });
  const year = new Date(date).getFullYear();

  return (
    <div className="col-md-6 col-lg-4 my-2">
      <div className="post-box">
        <div className="box-header">
          <i className="far fa-folder"></i>
          <Link to={`/category/${category}`} className="ms-3 text-uppercase category">{category}</Link>
        </div>
        <div className="box-image-box">
          <Link to={`/${title}`}>
            <img src={photo[0]} alt="imag" />
          </Link>
          <div className="date-container">
            <div className="day">{day}</div>
            <div className="date-month-year">
              {month} {year}
            </div>
          </div>
        </div>
        <div className="title-box">
          <Link to={`/${title}`} className="title">
            <p>{title}</p>
          </Link>
        </div>
        <div className="box-footer">
          <i className="far fa-user"></i>
          <Link to="/author/root" className="ms-3 text-muted text-decoration-none">
            Root
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCards;
