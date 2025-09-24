import React from "react";
import Navbar from "./navBar";
const Hero = () => {
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
              Welcome to KisanJi
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Smart Crop Advice, Right in Your Hands Empowering small farmers
              with real-time, voice-driven, and multilingual crop
              guidance—accessible anytime, even offline. Trusted by farmers.
              Powered by AI. Connected through WhatsApp.
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

      {/* Other Sections (same style) */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-white">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-green-700 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Explore solutions for modern agriculture, support, and
            sustainability.
          </p>
        </div>
      </section>

      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-white">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-green-700 mb-4">
            Get Connected
          </h2>
          <p className="text-lg text-gray-600">
            Contact us for partnerships, queries, or farmer support programs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
