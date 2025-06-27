import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import trackingImg from "../../../assets/live-tracking.png";
import safeImg from "../../../assets/safe-delivery.png";
// import supportImg from "../../../assets/features/support.png"; // Optional: replace with actual image if needed

const features = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    img: trackingImg,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    img: safeImg,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    img: safeImg, // Optional: Replace with supportImg if available
  },
];

const FeaturesHighLights = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 8000 });
  }, []);

  return (
    <div>
      <div className="bg-gray-100 my-10 py-10 px-4 md:px-16">
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="bg-white rounded-xl shadow-md p-10 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition duration-300"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-28 h-28 object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold text-[#03373D]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[#606060] text-sm md:text-md md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesHighLights;
