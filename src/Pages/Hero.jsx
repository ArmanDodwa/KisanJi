import React from "react";
import Navbar from "./navBar";
import { useLanguage } from "../Hook/LanguageContext"; // adjust path
import OurServices from "./OurServices";
import Connection from "./Connection";
import Footer from "./Footer";
const Hero = () => {
  const { t } = useLanguage();

  console.log(t);
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6">
          {/* Left Part */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-extrabold text-green-700 mb-6">
              {t.heroTitle}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.heroDescription}
            </p>
          </div>

          {/* Right Part (Image) */}
          <div className="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1606112219348-204d7d8b94ee"
              alt="Farmer working in field"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <OurServices />

      <Connection />

      <Footer />
    </div>
  );
};

export default Hero;
