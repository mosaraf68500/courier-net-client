import React from "react";
import Marquee from "react-fast-marquee";

import casio from "../../../assets/brands/casio.png";
import amazon from "../../../assets/brands/amazon.png";
import moonstar from "../../../assets/brands/moonstar.png";
import starplus from "../../../assets/brands/start.png";
import startpeople from "../../../assets/brands/start-people 1.png";
import randstad from "../../../assets/brands/randstad.png";

const ClientLogo = () => {
  const logos = [casio, amazon, moonstar, starplus, startpeople, randstad];

  return (
    <div className="bg-gray-100 py-6 rounded-2xl my-10">
      <h3 className="text-center font-semibold text-teal-900 text-lg mb-12">
        We've helped thousands of sales teams
      </h3>

      <Marquee speed={40} pauseOnHover={true} gradient={false}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="mx-10 flex items-center justify-center "
            style={{ width: "80px", height: "20px" }} // Fixed size container
          >
            <img
              src={logo}
              alt={`brand-${index}`}
              className="w-full h-full  object-fill "
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ClientLogo;
