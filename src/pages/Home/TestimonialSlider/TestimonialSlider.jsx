import React, { useState } from "react";
import custormar from "../../../assets/customer-top.png";
import { FaUser } from "react-icons/fa";
import user from "../../../assets/team-thumb1.png";
import review from "../../../assets/reviewQuote.png";
const testimonials = [
  {
    id: 1,
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    message: "Amazing support and gentle alignment throughout the day.",
    user: user,
    review:review,
  },
  {
    id: 2,
    name: "Rosel Ahamed",
    role: "CTO",
    message: "Posture Pro changed the way I work. I feel less pain now.",
    user: user,
    review:review,
  },
  {
    id: 3,
    name: "Nasir Uddin",
    role: "CEO",
    message: "Great quality! Helps me stay aligned during long meetings.",
    user: user,
    review:review,
  },
  {
    id: 4,
    name: "Arif Rahman",
    role: "UX Specialist",
    message: "I didn’t expect such good results. My back feels great!",
    user: user,
    review:review,
  },
  {
    id: 5,
    name: "Jahanara Khatun",
    role: "HR Manager",
    message: "This product gave me better posture in just weeks!",
    user: user,
    review:review,
  },
  {
    id: 6,
    name: "Kamal Hossain",
    role: "Product Manager",
    message: "A must-have for those working at a desk all day.",
    user: user,
    review:review,
  },
  {
    id: 7,
    name: "Tania Akter",
    role: "Marketing Lead",
    message: "Super comfortable and easy to wear daily.",
    user: user,
    review:review,
  },
  {
    id: 8,
    name: "Shahriar Islam",
    role: "Software Engineer",
    message: "I use it every day. My posture improved dramatically.",
    user: user,
    review:review,
  },
  {
    id: 9,
    name: "Farzana Rahman",
    role: "Designer",
    message: "Beautiful design and very effective support system.",
    user: user,
    review:review,
  },
  {
    id: 10,
    name: "Rafiq Chowdhury",
    role: "Data Analyst",
    message: "This posture corrector is a lifesaver for my back.",
    user: user,
    review:review,
  },
];

const TestimonialSlider = () => {
  const itemsPerPage = 4;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const [pageIndex, setPageIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const start = pageIndex * itemsPerPage;
  const currentItems = testimonials.slice(start, start + itemsPerPage);

  return (
    <div className="py-10 px-4 md:px-20 text-center">
      {/* Banner Image */}
      <img
        src={custormar}
        alt="Customer Banner"
        className="mx-auto rounded-lg mb-6"
      />

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        What our customers are saying
      </h2>
      <p className="text-gray-500 mb-10 max-w-xl mx-auto text-sm">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>

      {/* Card Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentItems.map((testimonial, index) => {
          const absoluteIndex = start + index;
          const isActive = absoluteIndex === activeIndex;

          return (
            <div
              key={testimonial.id}
              onClick={() => setActiveIndex(absoluteIndex)}
              className={`p-6 rounded-lg shadow transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-white border-2 border-none scale-105 opacity-100 blur-0"
                  : "bg-gray-100 opacity-60 blur-[1px]"
              }`}
            >
              <div className="flex items-center gap-4">
                {/* Content */}
                <div className="text-left">
                    <img src={review} alt="" />
                  <p className="text-gray-700 mb-4 text-sm">
                    “{testimonial.message}”
                  </p>
                  <div className="flex justify-arround gap-4 items-center">
                    <div>
                      {/* Icon */}
                      <img
                        className="w-10 h-10"
                        src={testimonial.user}
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-800">
                        {testimonial.name}
                      </div>
                      <div className="text-[10px] font-semibold text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dot Pagination */}
      <div className="flex justify-center gap-2 mt-8 flex-wrap">
        {[...Array(totalPages)].map((_, idx) => (
          <span
            key={idx}
            onClick={() => {
              setPageIndex(idx);
              setActiveIndex(idx * itemsPerPage + 1); // 2nd card (middle-ish) active
            }}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
              pageIndex === idx ? "bg-green-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
