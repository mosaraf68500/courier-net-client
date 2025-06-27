import React from "react"; 
import image from "../../../assets/location-merchant.png"

const PrirotySection = () => {
  return (
    <div>
      <section className="bg-[#003c3c] bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat text-white rounded-2xl mb-10 p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
        {/* Background effect (optional, for wave) */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#003c3c] to-[#005050] opacity-20 pointer-events-none"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Merchant and Customer Satisfaction
            <br /> is Our First Priority
          </h2>
          <p className="text-sm text-gray-300 mb-6">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Profast courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-lime-300 cursor-pointer text-black font-semibold px-5 py-2 rounded-full hover:bg-lime-400 transition">
              Become a Merchant
            </button>
            <button className="border cursor-pointer border-lime-300 text-lime-300 font-semibold px-5 py-2 rounded-full hover:bg-lime-300 hover:text-black transition">
              Earn with Profast Courier
            </button>
          </div>
        </div>

        {/* Image or Illustration */}
        <div className="relative z-10">
          <img
            src={image}
            alt="Boxes with location pin"
            className=""
          />
        </div>
      </section>
    </div>
  );
};

export default PrirotySection;
