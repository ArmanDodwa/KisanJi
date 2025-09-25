import React from "react";
import { FaLeaf, FaBug, FaCloudSun, FaChartLine, FaLanguage, FaClock } from "react-icons/fa";

const services = [
  {
    title: "Crop Guidance",
    description: "Expert advice for better crop yield",
    color: "bg-red-400",
    icon: <FaLeaf size={40} />
  },
  {
    title: "Pest & Disease Control",
    description: "Keep your crops safe from threats",
    color: "bg-blue-400",
    icon: <FaBug size={40} />
  },
  {
    title: "Weather Intelligence",
    description: "Accurate weather forecasts for farming",
    color: "bg-green-400",
    icon: <FaCloudSun size={40} />
  },
  {
    title: "Market Insights",
    description: "Know the best market prices for crops",
    color: "bg-yellow-400",
    icon: <FaChartLine size={40} />
  },
  {
    title: "Multilingual Support",
    description: "Farm guidance in multiple languages",
    color: "bg-purple-400",
    icon: <FaLanguage size={40} />
  },
  {
    title: "24/7 Availability",
    description: "Assistance anytime you need",
    color: "bg-pink-400",
    icon: <FaClock size={40} />
  },
];

const OurServices = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="grid gap-10 p-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={`h-60 flex flex-col items-center justify-center text-white text-center rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out p-4 ${service.color}`}
          >
            <div className="mb-4">{service.icon}</div>
            <h1 className="text-xl font-bold mb-2">{service.title}</h1>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
