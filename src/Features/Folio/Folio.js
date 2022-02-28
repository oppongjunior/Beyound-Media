import React from "react";
import FolioCard from "../../Components/FolioCard/FolioCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Folio.css";
import { foliData } from "./FolioData";

//Owl Carousel Settings
const options = {
  margin: 30,
  responsiveClass: true,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
};

function Folio() {
  return (
    <div className="folio-container py-4 mb-5" id="folio">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 className="title my-5">PORTFOLIO - Work That Excites Us</h1>
            <OwlCarousel className="owl-theme" loop={true} {...options}>
              {foliData.map((item, index) => {
                return <FolioCard key={index} folio={item} />;
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Folio;
