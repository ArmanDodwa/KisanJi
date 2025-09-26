import React, { useState } from "react";
import Navbar from "./navBar";
import { Line, Bar } from "react-chartjs-2";
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
  const [state, setState] = useState("Madhya Pradesh");
  const selectedData = stateData[state];

  // Production Line Chart
  const productionData = {
    labels: selectedData.months,
    datasets: selectedData.crops.map((crop, idx) => ({
      label: crop,
      data: selectedData.production[crop],
      borderColor: `hsl(${idx * 60}, 70%, 50%)`,
      backgroundColor: `hsla(${idx * 60}, 70%, 50%, 0.2)`,
      tension: 0.3,
    })),
  };
  const productionOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: `Crop Production Trend - ${state}`,
        font: { size: 20 },
      },
    },
  };

  // Price Bar Chart
  const priceData = {
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
  };
  const priceOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: `Current Crop Prices - ${state}`,
        font: { size: 20 },
      },
    },
  };

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
            onChange={(e) => setState(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2"
          >
            {Object.keys(stateData).map((st) => (
              <option key={st}>{st}</option>
            ))}
          </select>
        </div>

        {/* Graphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Line data={productionData} options={productionOptions} />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Bar data={priceData} options={priceOptions} />
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
                  <span className="font-semibold text-gray-800">{crop}</span>
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
                    <span className="font-semibold text-gray-800">{crop}</span>
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
      </div>
    </div>
  );
}
