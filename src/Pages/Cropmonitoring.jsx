import React, { useState } from "react";

const CropMonitoring = () => {
  // Step control
  const [step, setStep] = useState("form"); // "form" | "loading" | "result"

  // Inputs
  const [fertilizerCost, setFertilizerCost] = useState("");
  const [electricityCost, setElectricityCost] = useState("");
  const [otherCost, setOtherCost] = useState("");

  // Result data
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional validation
    if (!fertilizerCost && !electricityCost && !otherCost) {
      alert("Please fill at least one cost field");
      return;
    }

    setStep("loading");

    // Simulate 2 seconds loading
    setTimeout(() => {
      const fert = parseFloat(fertilizerCost) || 0;
      const elec = parseFloat(electricityCost) || 0;
      const other = parseFloat(otherCost) || 0;
      const total = fert + elec + other;

      // Example crop data
      const cropData = {
        fieldName: "Field A",
        cropName: "Wheat",
        soilMoisture: 48,
        temperature: 30,
        humidity: 58,
        healthStatus: "Healthy 🌿",
      };

      setResult({ cropData, total });
      setStep("result");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        🌾 Crop Monitoring System
      </h1>

      {/* Step 1: Input Form */}
      {step === "form" && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
        >
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Fertilizer Cost (₹):
            </label>
            <input
              type="number"
              placeholder="e.g. 1500"
              className="border rounded-md px-3 py-2 w-full"
              value={fertilizerCost}
              onChange={(e) => setFertilizerCost(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Electricity Cost (₹):
            </label>
            <input
              type="number"
              placeholder="e.g. 800"
              className="border rounded-md px-3 py-2 w-full"
              value={electricityCost}
              onChange={(e) => setElectricityCost(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Other Cost (₹):
            </label>
            <input
              type="number"
              placeholder="e.g. 500"
              className="border rounded-md px-3 py-2 w-full"
              value={otherCost}
              onChange={(e) => setOtherCost(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      )}

      {/* Step 2: Loading */}
      {step === "loading" && (
        <div className="flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-green-600 mb-4"></div>
          <p className="text-lg font-medium text-gray-700">
            Fetching crop data...
          </p>
        </div>
      )}

      {/* Step 3: Result */}
      {step === "result" && result && (
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md space-y-4">
          <h2 className="text-xl font-bold text-green-700 mb-2">
            ✅ Monitoring Result
          </h2>
          <p>
            <span className="font-semibold">Field:</span>{" "}
            {result.cropData.fieldName}
          </p>
          <p>
            <span className="font-semibold">Crop:</span>{" "}
            {result.cropData.cropName}
          </p>
          <p>
            <span className="font-semibold">Soil Moisture:</span>{" "}
            {result.cropData.soilMoisture}%
          </p>
          <p>
            <span className="font-semibold">Temperature:</span>{" "}
            {result.cropData.temperature}°C
          </p>
          <p>
            <span className="font-semibold">Humidity:</span>{" "}
            {result.cropData.humidity}%
          </p>
          <p>
            <span className="font-semibold">Health Status:</span>{" "}
            {result.cropData.healthStatus}
          </p>

          <hr />

          <p>
            <span className="font-semibold">Total Cost:</span>{" "}
            <span className="text-green-600 font-bold">₹{result.total}</span>
          </p>

          <button
            onClick={() => {
              setStep("form");
              setFertilizerCost("");
              setElectricityCost("");
              setOtherCost("");
            }}
            className="mt-4 w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300"
          >
            🔄 Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default CropMonitoring;
