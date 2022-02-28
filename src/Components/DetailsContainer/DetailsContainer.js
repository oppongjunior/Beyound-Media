import React from "react";
import "./DetailsContainer.css";
import { Link } from "react-router-dom";

function DetailsContainer({ data }) {
  const { date = "", category = "", title = "", photo = [] } = data;
  const day = new Date(date).getDate();
  const month = new Date(date).toLocaleString("en-US", { month: "short" });
  const year = new Date(date).getFullYear();

  console.log(photo);

  return (
    <div className="details-container py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-11 col-lg-8">
            <div className="row">
              <div className="col-md-2 text-end">
                <div className="date-container">
                  <div className="day">{day}</div>
                  <div className="date-month-year">
                    {month} {year}
                  </div>
                </div>
                <div className="box-footer">
                  <i className="far fa-user"></i>
                  <Link
                    to="/author/root"
                    className="ms-3 text-muted text-decoration-none"
                  >
                    Root
                  </Link>
                </div>
                <div className="box-header">
                  <i className="far fa-folder"></i>
                  <Link
                    to={`/category/${category}`}
                    className="ms-3 text-uppercase category"
                  >
                    {category}
                  </Link>
                </div>
              </div>
              <div className="col-md-10 py-2">
                <div>
                  <h1 className="title">{title}</h1>
                  <div className="images-box">
                    {photo.map((item, index) => {
                      return (
                        <img
                          src={item}
                          key={index}
                          alt=""
                          className="w-100 my-2 details-image"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsContainer;
