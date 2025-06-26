import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import b1 from "../../../assets/banner/banner1.png";
import b2 from "../../../assets/banner/banner2.png";
import b3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto" style={{ overflow: "visible", width: "100%" }}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        interval={3000}
        transitionTime={500}
      >
        <div>
          <img src={b1} alt="Banner 1" />
        </div>
        <div>
          <img src={b2} alt="Banner 2" />
        </div>
        <div>
          <img src={b3} alt="Banner 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
