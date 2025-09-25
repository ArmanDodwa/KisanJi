import React from "react";

const Connection = () => {
  return (
    <div className="flex h-[80%] gap-8 p-6 max-w-7xl mx-auto">
      {/* Box 1: Connect with nearest farmer lab */}
      <div className="flex-1 bg-green-100 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 hover:scale-105 transition-transform duration-300">
        <img
          src="https://images.unsplash.com/photo-1581090700227-9f4ed2d6b08c?auto=format&fit=crop&w=500&q=60"
          alt="Farmer Lab"
          className="w-full h-64 object-cover rounded-xl mb-4"
        />
        <h2 className="text-2xl font-bold text-green-700 mb-2">
          Connect to Nearest Farmer Lab
        </h2>
        <p className="text-gray-600 text-center">
          Get your soil tested quickly by the nearest lab and improve your crop yield.
        </p>
      </div>

      {/* Box 2: Expert of soil */}
      <div className="flex-1 bg-green-100 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 hover:scale-105 transition-transform duration-300">
        <img
          src="https://images.unsplash.com/photo-1573497019412-94f0d01a263c?auto=format&fit=crop&w=500&q=60"
          alt="Soil Expert"
          className="w-full h-64 object-cover rounded-xl mb-4"
        />
        <h2 className="text-2xl font-bold text-green-700 mb-2">
          Soil Expert Guidance
        </h2>
        <p className="text-gray-600 text-center">
          Get advice from soil experts to improve your soil health and crop production.
        </p>
      </div>
    </div>
  );
};

export default Connection;
