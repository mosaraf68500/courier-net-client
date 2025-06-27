import React from 'react';
import PickDropImg from '../../assets/bookingIcon.png';
import CashOnDeliveryImg from '../../assets/safe-delivery.png';
import DeliveryHubImg from '../../assets/big-deliveryman.png';
import SmeCorporateImg from '../../assets/delivery-van.png';

// Optional: Custom animation using Tailwind config can be added for more control

const howItWorksData = [
  {
    title: 'Booking Pick & Drop',
    description: 'From personal packages to business shipments — we deliver on time, every time.',
    icon: PickDropImg,
  },
  {
    title: 'Cash On Delivery',
    description: 'From personal packages to business shipments — we deliver on time, every time.',
    icon: CashOnDeliveryImg,
  },
  {
    title: 'Delivery Hub',
    description: 'From personal packages to business shipments — we deliver on time, every time.',
    icon: DeliveryHubImg,
  },
  {
    title: 'Booking SME & Corporate',
    description: 'From personal packages to business shipments — we deliver on time, every time.',
    icon: SmeCorporateImg,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-16 my-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">How it Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {howItWorksData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={item.icon}
              alt={item.title}
              className="mx-auto mb-4 h-16 w-16 object-contain animate-bounce-slow"
            />
            <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
