import React from "react";
import {
  FaLeaf,
  FaBug,
  FaCloudSun,
  FaChartLine,
  FaLanguage,
  FaClock,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../Hook/LanguageContext";

const icons = [
  <FaLeaf size={40} />,
  <FaBug size={40} />,
  <FaCloudSun size={40} />,
  <FaChartLine size={40} />,
  <FaLanguage size={40} />,
  <FaClock size={40} />,
];

const colors = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-purple-400",
  "bg-pink-400",
];

const paths = [
  "/cropGuidance",
  "/imageUpload",
  "/cropGuidance",
  "/Market",
  "/cropGuidance",
  "/cropGuidance",
];

const OurServices = () => {
  const navigate = useNavigate();
  const { t } = useLanguage(); // get current translations

  const handleClick = (path) => {
    console.log("Navigating to:", path);
    navigate(path);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-4">
        {t.servicesTitle}
      </h1>
      <p className="text-gray-600 mb-10 text-center w-3/4">
        {t.servicesDescription}
      </p>

      <div className="grid gap-10 p-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {t.services.map((service, index) => (
          <div
            key={index}
            onClick={() => handleClick(paths[index])}
            className={`cursor-pointer h-60 flex flex-col items-center justify-center text-white text-center rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out p-4 ${colors[index]}`}
          >
            <div className="mb-4">{icons[index]}</div>
            <h1 className="text-xl font-bold mb-2">{service.title}</h1>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
