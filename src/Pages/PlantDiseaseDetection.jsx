import React from 'react';
import { useLocation } from 'react-router-dom';

const PlantDiseaseDetection = () => {
    const data = useLocation();
    console.log("+++++++++++++",data)
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
              src={data.state} // Placeholder image for the leaf
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

        {/* Solutions & Measures */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Chemical Solutions */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
            <h2 className="text-xl font-medium flex items-center mb-4">
              <span className="p-2 rounded-full bg-blue-100 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21H6.5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5M20 10V8a2 2 0 00-2-2h-3a2 2 0 00-2-2H8a2 2 0 00-2 2v2" />
                </svg>
              </span>
              Chemical Solutions
            </h2>
            <ul className="list-none space-y-2">
              <li className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Copper-based fungicides
              </li>
              <li className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Biofungicides (e.g., Bacillus subtilis)
              </li>
              <li className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Croprotation
              </li>
            </ul>
          </div>
          
          {/* Organic Solutions */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
            <h2 className="text-xl font-medium flex items-center mb-4">
              <span className="p-2 rounded-full bg-green-100 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.405 9.176 5 7 5a4 4 0 000 8h2.167M12 6.253C13.168 5.405 14.824 5 17 5a4 4 0 010 8h-2.167m-1.42 1.42l-3.321 3.322a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 010-1.414l3.321-3.322m4.242 4.242l-3.321-3.322a1 1 0 01-1.414 0l-1.414 1.414a1 1 0 010 1.414l3.321 3.322" />
                </svg>
              </span>
              Organic Solutions
            </h2>
            <ul className="list-none space-y-2">
              <li className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Resistant soybean varieties
              </li>
              <li className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Propersanitation practices
              </li>
              <li className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Monitoring disease progression
              </li>
            </ul>
          </div>

          {/* Preventive Measures */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
            <h2 className="text-xl font-medium flex items-center mb-4">
              <span className="p-2 rounded-full bg-purple-100 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944c-3.195 0-6.236 1.282-8.485 3.531L1 8l2.586 2.586a1 1 0 001.414 0l2.293-2.293m11.314-5.657a1 1 0 00-1.414 0L12 9.071 8.071 5.142a1 1 0 00-1.414 1.414L10.586 12l-4.949 4.95a1 1 0 001.414 1.414L12 14.929l4.95 4.95a1 1 0 001.414-1.414L13.414 12l4.95-4.95a1 1 0 000-1.414z" />
                </svg>
              </span>
              Preventive Measures
            </h2>
            <ul className="list-none space-y-2">
              <li className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Use disease-free seeds
              </li>
              <li className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Ensure good drainage
              </li>
              <li className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Avoid overhead irrigation
              </li>
              <li className="flex items-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Maintain proper plant spacing
              </li>
            </ul>
          </div>
        </div>

        {/* Real-time Monitoring */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-medium mb-4 flex justify-between items-center">
            Real-time Monitoring
            <span className="flex items-center text-green-500">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Live
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm text-gray-500">Spread Risk</h3>
              <p className="font-semibold text-red-600">medium <span className="text-gray-500 text-sm">(0.6%)</span></p>
              <p className="text-sm text-gray-400">Trend increasing</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Disease Progression</h3>
              <p className="font-semibold text-orange-500">Early stages <span className="text-gray-500 text-sm">0.1%/day</span></p>
              <p className="text-sm text-gray-400">Next check: 2024-03-15</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Environmental Conditions</h3>
              <p className="font-semibold mt-2">Temperature <span className="float-right">25°C</span></p>
              <p className="font-semibold">Humidity <span className="float-right">80%</span></p>
              <p className="font-semibold">Soil Moisture <span className="float-right">60%</span></p>
              <p className="text-xs text-gray-400 mt-2">Last updated: 9/25/2025</p>
            </div>
          </div>
        </div>

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