import React from "react";
import SponsorCard from "../../Components/SponserCard/SponsorCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Sponsor.css";
import { SponsorData } from "./SponsorData";

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
      items: 2,
    },
    600: {
      items: 3,
    },
    700: {
      items: 4,
    },
    992: {
      items: 5,
    },
  },
};

function Sponsor() {
  return (
    <div
      className="sponsor-section"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.8)),url(images/sponsor_bg.jpg)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 mb-5">
            <h1 className="text-center title text-light">WHO WE WORK WITH</h1>
          </div>
        </div>
        <OwlCarousel className="owl-theme py-5 mb-5" loop={true} {...options}>
          {SponsorData.map((item, index) => {
            return <SponsorCard key={index} sponsor={item} />;
          })}
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Sponsor;
