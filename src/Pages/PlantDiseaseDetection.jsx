import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PlantDiseaseDetection = () => {
  const data = useLocation();
  console.log("+++++++++++++", data);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const randomDelay = Math.floor(Math.random() * (9000 - 5000 + 1)) + 5000;
    // Simulate loading time (2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, randomDelay);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Loading Window UI
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="w-16 h-16 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 font-semibold">Analyzing image and fetching data...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8 font-sans text-gray-800">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Plant Disease Detection</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
          </div>
          <div className="flex items-center">
            <span className="text-sm mr-2">Local LLM</span>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="local-toggle"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label htmlFor="local-toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Detection Results */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-start justify-between">
          <div className="flex-1 w-[50%]">
            <h2 className="text-xl font-medium mb-4">Detection Results</h2>
            <div className="space-y-2 w-[50%] border border-white p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-bold">Disease</span>
                <span className="font-semibold">Anthracnose</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-bold">Name of Crop</span>
                <span className="font-semibold">Soybean</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-bold">Confidence</span>
                <span className="font-semibold text-green-600">90.00%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-bold">Severity</span>
                <span className="font-semibold text-yellow-600 bg-yellow-100 py-1 px-3 rounded-full text-xs">MEDIUM</span>
              </div>
            </div>
          </div>
          <div className="w-64 h-64 rounded-lg overflow-hidden flex-shrink-0 relative">
            <img
              src={data.state}
              alt="Diseased plant leaf"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Environmental Analysis */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-medium mb-4">Environmental Analysis</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-gray-500 font-medium">Factor</div>
            <div className="text-gray-500 font-medium">Current Value</div>
            <div className="text-gray-500 font-medium">Optimal Range</div>
            <div className="text-gray-500 font-medium">Status</div>
            
            <span>Temperature</span>
            <span className="font-semibold">25°C</span>
            <span>20 - 28°C</span>
            <span className="text-green-600 font-semibold">OPTIMAL</span>

            <span>Humidity</span>
            <span className="font-semibold">80%</span>
            <span>50 - 70%</span>
            <span className="text-yellow-600 font-semibold">WARNING</span>
            
            <span>Rainfall</span>
            <span className="font-semibold">20 mm/week</span>
            <span>10 - 15 mm/week</span>
            <span className="text-yellow-600 font-semibold">WARNING</span>
          </div>
        </div>

        {/* Treatment Timeline */}
        <div className="bg-white p-6 rounded-lg shadow-md flex justify-around text-center">
          <div className="flex-1">
            <h3 className="text-sm text-gray-500">Time to Treat</h3>
            <p className="font-semibold text-green-600 mt-1">Immediately</p>
          </div>
          <div className="border-l border-gray-200 h-16 mx-4"></div>
          <div className="flex-1">
            <h3 className="text-sm text-gray-500">Estimated Recovery</h3>
            <p className="font-semibold mt-1">2-4 weeks with treatment</p>
          </div>
          <div className="border-l border-gray-200 h-16 mx-4"></div>
          <div className="flex-1">
            <h3 className="text-sm text-gray-500">Yield Impact</h3>
            <p className="font-semibold text-red-600 mt-1">Moderate to severe, depending on the extent of infection</p>
          </div>
        </div>

        {/* Solutions */}
        {/* ... rest of your code remains same ... */}

        {/* New Analysis Button */}
        <div className="text-center mt-8">
          <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-green-700 transition duration-300 flex items-center justify-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            New Analysis
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantDiseaseDetection;
