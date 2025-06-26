import React from "react";
import Marquee from "react-fast-marquee";

// Import your local images directly
import casio from "../../../assets/brands/casio.png";
import amazon from "../../../assets/brands/amazon.png";
import moonstar from "../../../assets/brands/moonstar.png";
import starplus from "../../../assets/brands/start.png";
import startpeople from "../../../assets/brands/start-people 1.png";
import randstad from "../../../assets/brands/randstad.png";
const ClientLogo = () => {
  return (
    <div>
      <div className="bg-gray-100 py-8 my-10">
        <h3 className="text-center font-semibold text-teal-900 text-lg mb-6">
          We've helped thousands of sales teams
        </h3>

        <Marquee speed={50} pauseOnHover={true} gradient={false}>
          <img src={casio} alt="casio" className="h-4 mx-10 object-contain" />
          <img src={amazon} alt="amazon" className="h-4 mx-10 object-contain" />
          <img
            src={moonstar}
            alt="moonstar"
            className="h-4 mx-10 object-contain"
          />
          <img
            src={starplus}
            alt="starplus"
            className="h-4 mx-10 object-contain"
          />
          <img
            src={startpeople}
            alt="startpeople"
            className="h-4 mx-10 object-contain"
          />
          <img
            src={randstad}
            alt="randstad"
            className="h-4 mx-10 object-contain"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default ClientLogo;
