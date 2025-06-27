import React from "react";

const faqData = [
  {
    id: 1,
    question: "What is Posture Pro and how does it work?",
    answer:
      "Posture Pro is a wearable device designed to help you maintain a healthy and upright posture throughout the day. It gently pulls your shoulders back and aligns your spine, reducing pain, improving confidence, and enhancing overall well-being. You can wear it under your clothes, and with regular use, you'll start developing a natural habit of sitting and standing straight.",
  },
  {
    id: 2,
    question: "Can I wear Posture Pro under my clothes during daily activities?",
    answer:
      "Absolutely! Posture Pro is lightweight and discreet, making it perfect for daily wear under your clothes. Whether you're at work, exercising, or relaxing at home, it won't restrict your movement or cause discomfort. The breathable materials ensure comfort even during extended periods of use.",
  },
  {
    id: 3,
    question: "Is Posture Pro suitable for children and elderly users?",
    answer:
      "Yes, Posture Pro is fully adjustable and suitable for people of all ages. For children, it encourages healthy postural habits early in life, and for elderly users, it provides added support and helps reduce spinal stress. However, we recommend consulting with a physician if you have any pre-existing spinal or back conditions.",
  },
  {
    id: 4,
    question: "How long should I wear Posture Pro each day for best results?",
    answer:
      "We recommend starting with 20 to 30 minutes per day and gradually increasing the duration as your muscles adapt. Within 2 to 3 weeks, you'll notice improved posture and less discomfort. Over time, your body will build muscle memory and maintain a better posture even without the device.",
  },
  {
    id: 5,
    question: "How do I clean and maintain the Posture Pro device?",
    answer:
      "Cleaning Posture Pro is easy. Simply hand wash it with mild soap and cold water, then let it air dry completely before using it again. Avoid using harsh chemicals or machine washing, as it may damage the elastic materials and reduce the effectiveness of the product.",
  },
];

const FrequentlyQuestion = () => {
  return (
    <div className="py-10 px-4 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-[#03373D] mb-2">
        Frequently Asked Questions (FAQ)
      </h2>
      <p className="text-gray-500 mb-10 max-w-xl mx-auto text-sm">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>

      {/* Accordions */}
      {faqData.map((item, index) => (
        <div
          key={item.id}
          className="collapse collapse-arrow border border-base-300 my-4"
        >
          <input
            type="radio"
            name="faq-accordion"
            className="peer"
            defaultChecked={index === 0}
          />
          <div className="collapse-title text-start font-semibold text-[#03373D] peer-checked:bg-[#E6F2F3] bg-white">
            {item.question}
            {/* <div className="divider"></div> */}
          </div>
          
          <div className="collapse-content text-[12px] text-start text-[#606060] peer-checked:bg-[#E6F2F3] bg-white">
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FrequentlyQuestion;
