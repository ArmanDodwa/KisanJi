import React, { useState, useRef, useEffect } from "react";
import { FaMapMarkerAlt, FaFlask } from "react-icons/fa";
import stateDistrictData from "../assets/stateDistrictData.js"
import { useNavigate } from "react-router-dom";



const CropPlanningPage = () => {
    const navigate = useNavigate()

  const [location, setLocation] = useState({ state: "", district: "" });
  const [soilData, setSoilData] = useState({
    ph: "",
    nutrients: { nitrogen: "", phosphorus: "", potassium: "" },
  });

  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [showDistrictDropdown, setShowDistrictDropdown] = useState(false);

  const stateRef = useRef(null);
  const districtRef = useRef(null);

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (stateRef.current && !stateRef.current.contains(e.target)) {
        setShowStateDropdown(false);
      }
      if (districtRef.current && !districtRef.current.contains(e.target)) {
        setShowDistrictDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleStateSelect = (state) => {
    setLocation({ state, district: "" });
    setShowStateDropdown(false);
  };

  const handleDistrictSelect = (district) => {
    setLocation((prev) => ({ ...prev, district }));
    setShowDistrictDropdown(false);
  };

  const handleSoilDataChange = (e) => {
    const { name, value } = e.target;
    if (name === "ph") {
      setSoilData({ ...soilData, ph: value });
    } else {
      setSoilData({
        ...soilData,
        nutrients: {
          ...soilData.nutrients,
          [name]: value,
        },
      });
    }
  };

  const handleAnalyzeClick = () => {
    console.log("Analyzing data:", { location, soilData });
    // alert("Analyzing data. Recommendations coming soon!");

    const data = {
  state: location.state,
  district: location.district,
  N: soilData.nutrients.nitrogen,
  P: soilData.nutrients.phosphorus,
  K: soilData.nutrients.potassium,
};

  // Navigate to another page and send data using `state`
  navigate("/cropreport", { state: data });

  };

  const availableDistricts = stateDistrictData[location.state] || [];

  return (
    <div className="bg-gray-100 min-h-screen p-8 flex flex-col items-center">
      <header className="w-full max-w-3xl flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Crop Planning & Market Analysis
        </h1>
        <span className="text-sm text-gray-600">Kisan Mitra AI System</span>
      </header>

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl mb-6">
        <div className="mb-8">
          <h2 className="flex items-center text-xl font-bold text-gray-700 mb-6">
            <FaMapMarkerAlt className="text-green-500 mr-3 text-2xl" /> Your Land Details
          </h2>

          {/* ✅ State Dropdown */}
          <div className="mb-4 relative" ref={stateRef}>
            <label htmlFor="state" className="block text-gray-700 font-medium mb-1">
              State:
            </label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="Select State"
              value={location.state}
              readOnly
              onClick={() => {
                setShowStateDropdown(!showStateDropdown);
                setShowDistrictDropdown(false);
              }}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
            />
            {showStateDropdown && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {Object.keys(stateDistrictData).map((state) => (
                  <div
                    key={state}
                    onClick={() => handleStateSelect(state)}
                    className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                  >
                    {state}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ✅ District Dropdown */}
          <div className="mb-4 relative" ref={districtRef}>
            <label htmlFor="district" className="block text-gray-700 font-medium mb-1">
              District:
            </label>
            <input
              type="text"
              id="district"
              name="district"
              placeholder={
                location.state ? "Select District" : "Select State first"
              }
              value={location.district}
              readOnly
              onClick={() => {
                if (location.state) {
                  setShowDistrictDropdown(!showDistrictDropdown);
                  setShowStateDropdown(false);
                } else {
                  alert("Please select a state first!");
                }
              }}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
            />
            {showDistrictDropdown && availableDistricts.length > 0 && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {availableDistricts.map((district) => (
                  <div
                    key={district}
                    onClick={() => handleDistrictSelect(district)}
                    className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                  >
                    {district}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 🧪 Soil Data */}
        {/* <div>
          <h2 className="flex items-center text-xl font-bold text-gray-700 mb-6">
            <FaFlask className="text-green-500 mr-3 text-2xl" /> Soil Test Data
          </h2>
          <div className="mb-4">
            <input
              type="number"
              id="ph"
              name="ph"
              placeholder="pH (e.g., 6.8)"
              step="0.1"
              value={soilData.ph}
              onChange={handleSoilDataChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Key Nutrients (kg/ha):
            </label>
            <div className="flex gap-4">
              <input
                type="number"
                name="nitrogen"
                placeholder="N (150)"
                value={soilData.nutrients.nitrogen}
                onChange={handleSoilDataChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="number"
                name="phosphorus"
                placeholder="P (20)"
                value={soilData.nutrients.phosphorus}
                onChange={handleSoilDataChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="number"
                name="potassium"
                placeholder="K (45)"
                value={soilData.nutrients.potassium}
                onChange={handleSoilDataChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div> */}
      </div>

      {/* ✅ Analyze Button */}
      <button
        onClick={handleAnalyzeClick}
        className="w-full max-w-3xl py-4 bg-yellow-400 text-gray-800 font-bold rounded-md shadow-md hover:bg-yellow-500 transition duration-300"
      >
        Analyze & Get Recommendation
      </button>
    </div>
  );
};

export default CropPlanningPage;
