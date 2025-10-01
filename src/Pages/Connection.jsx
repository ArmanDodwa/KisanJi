import React from "react";
import LabPic from "../assets/Picture/image (2).png";
import Expert from "../assets/Picture/image (1).png";
import { useLanguage } from "../Hook/LanguageContext"; // ✅ import hook

const Connection = () => {
  const { t } = useLanguage(); // ✅ use translation hook

  return (
    <div className="flex h-[80%] gap-8 p-6 max-w-7xl mx-auto">
      {/* Box 1: Connect with nearest farmer lab */}
      <div className="flex-1 bg-green-100 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 hover:scale-105 transition-transform duration-300">
        <img
          src={LabPic}
          alt="Farmer Lab"
          className="w-full h-64 object-cover rounded-xl mb-4"
        />
        <h2 className="text-2xl font-bold text-green-700 mb-2">
          {t.connection.labTitle}
        </h2>
        <p className="text-gray-600 text-center">{t.connection.labDescription}</p>
      </div>

      {/* Box 2: Expert of soil */}
      <div className="flex-1 bg-green-100 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 hover:scale-105 transition-transform duration-300">
        <img
          src={Expert}
          alt="Soil Expert"
          className="w-full h-64 object-cover rounded-xl mb-4"
        />
        <h2 className="text-2xl font-bold text-green-700 mb-2">
          {t.connection.expertTitle}
        </h2>
        <p className="text-gray-600 text-center">{t.connection.expertDescription}</p>
      </div>
    </div>
  );
};

export default Connection;
