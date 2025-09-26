import React, { useState, useEffect } from "react";
import Navbar from "./navBar";
import { Line, Bar } from "react-chartjs-2";
import { FaLeaf } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { stateData } from "../assets/data.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function AnalysisPage() {
  const [state, setState] = useState(""); // No default state
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Fetching data...");
  const [progress, setProgress] = useState(0);

  const messages = [
    "Fetching data...",
    "Processing data...",
    "Analyzing information...",
    "Loading resources...",
    "Almost done...",
    "Preparing your dashboard...",
    "Optimizing performance...",
    "Finalizing setup...",
  ];

  const handleStateChange = (newState) => {
    setState(newState);
    startLoading();
  };

  const startLoading = () => {
    setLoading(true);
    setProgress(0);
    setMessage("Fetching data...");

    const totalDuration = Math.floor(Math.random() * 2000) + 4000; // 4-6 sec

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 100 / (totalDuration / 100);
        return next >= 100 ? 100 : next;
      });
    }, 100);

    const messageInterval = setInterval(() => {
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      setMessage(randomMsg);
    }, 1200);

    const timer = setTimeout(() => {
      setLoading(false);
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    }, totalDuration);
  };

  // If no state is selected, don't show charts or loader
  const selectedData = state ? stateData[state] : null;

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8 mt-20">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          State Crop Analysis
        </h1>

        {/* State Selector */}
        <div className="mb-8">
          <select
            value={state}
            onChange={(e) => handleStateChange(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2"
          >
            <option value="" disabled>
              Select State
            </option>
            {Object.keys(stateData).map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>

        {/* Loading Box appears only if a state is selected and loading */}
        {state && loading && (
          <div className="mx-auto mb-8 p-6 bg-white border border-green-300 rounded-xl shadow-md w-[60%]">
            <div className="flex flex-col items-center mb-6">
              <FaLeaf size={40} className="text-green-600 mb-2" />
              <h1 className="text-2xl font-bold text-green-700 text-center">
                Fetching Response from API
              </h1>
            </div>
            <h2 className="text-lg font-semibold text-green-700 mb-4 text-center animate-pulse">
              {message}
            </h2>
            <div className="w-full bg-green-100 h-3 rounded-full overflow-hidden">
              <div
                className="h-3 bg-green-500 transition-all duration-200"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Show graphs and info boxes only after loading */}
        {state && !loading && selectedData && (
          <>
            {/* Graphs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Line
                  data={{
                    labels: selectedData.months,
                    datasets: selectedData.crops.map((crop, idx) => ({
                      label: crop,
                      data: selectedData.production[crop],
                      borderColor: `hsl(${idx * 60}, 70%, 50%)`,
                      backgroundColor: `hsla(${idx * 60}, 70%, 50%, 0.2)`,
                      tension: 0.3,
                    })),
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { position: "top" },
                      title: {
                        display: true,
                        text: `Crop Production Trend - ${state}`,
                        font: { size: 20 },
                      },
                    },
                  }}
                />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Bar
                  data={{
                    labels: selectedData.crops,
                    datasets: [
                      {
                        label: "Crop Prices (₹/kg)",
                        data: selectedData.crops.map(
                          (crop) => selectedData.currentMarketPrice[crop]
                        ),
                        backgroundColor: selectedData.crops.map(
                          (_, idx) => `hsl(${idx * 60}, 70%, 50%)`
                        ),
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: false },
                      title: {
                        display: true,
                        text: `Current Crop Prices - ${state}`,
                        font: { size: 20 },
                      },
                    },
                  }}
                />
              </div>
            </div>

            {/* Info Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Local Market */}
              <div className="bg-green-100 rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-green-700 mb-4">
                  Local Market Price
                </h2>
                <div className="space-y-4">
                  {selectedData.crops.map((crop) => (
                    <div
                      key={crop}
                      className="bg-white rounded-lg p-4 shadow flex justify-between items-center w-full"
                    >
                      <span className="font-semibold text-gray-800">
                        {crop}
                      </span>
                      <span className="text-gray-700">
                        ₹{selectedData.currentMarketPrice[crop]}/kg
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Alerts */}
              <div className="bg-green-100 rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-green-700 mb-4">
                  Price Alert
                </h2>
                <div className="space-y-4">
                  {selectedData.crops.map((crop) => {
                    const alert = selectedData.priceAlert[crop];
                    return (
                      <div
                        key={crop}
                        className="bg-white rounded-lg p-4 shadow flex justify-between items-center w-full"
                      >
                        <span className="font-semibold text-gray-800">
                          {crop}
                        </span>
                        <span
                          className={`font-semibold ${
                            alert.text === "Up"
                              ? "text-green-600"
                              : alert.text === "Down"
                              ? "text-red-600"
                              : "text-gray-600"
                          }`}
                        >
                          {alert.text} ({alert.percent})
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
