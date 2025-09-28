import React, { useState, useEffect } from 'react';
import { useLocation  } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
  ArcElement,
} from 'chart.js';
import { Line, Radar, Pie } from 'react-chartjs-2';
// import './ChartStyles.css'; // Import the custom CSS file

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
  ArcElement
);

const sampleData = {
  states: ['Madhya Pradesh', 'Maharashtra', 'Punjab', 'Uttar Pradesh'],
  districts: {
    'Madhya Pradesh': ['Indore', 'Bhopal', 'Ujjain'],
    'Maharashtra': ['Pune', 'Nashik', 'Nagpur'],
    'Punjab': ['Ludhiana', 'Amritsar', 'Jalandhar'],
    'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra'],
  },
  reports: {
    'Indore': {
      topCrop: {
        name: 'Soybean',
        profit: 45000,
        yield: 18,
        marketRisk: 'Low',
        roi: 195,
      },
      soil: {
        ph: 6.5,
        nitrogen: 120, // kg/ha
        phosphorus: 25, // kg/ha
        potassium: 280, // kg/ha
      },
      market: {
        priceTrend: [
          { month: 'Apr', price: 4500 },
          { month: 'May', price: 4650 },
          { month: 'Jun', price: 4700 },
          { month: 'Jul', price: 4550 },
          { month: 'Aug', price: 4800 },
          { month: 'Sep', price: 4950 },
        ],
        pastYield: 15,
        regionalYield: 17,
        profitMargin: 2500,
      },
      demand: {
        local: 0.75,
        national: 0.15,
        export: 0.10,
      },
    },
    'Ludhiana': {
      topCrop: {
        name: 'Wheat',
        profit: 38000,
        yield: 50,
        marketRisk: 'Medium',
        roi: 170,
      },
      soil: {
        ph: 7.2,
        nitrogen: 150,
        phosphorus: 30,
        potassium: 220,
      },
      market: {
        priceTrend: [
          { month: 'Mar', price: 2100 },
          { month: 'Apr', price: 2250 },
          { month: 'May', price: 2300 },
          { month: 'Jun', price: 2150 },
          { month: 'Jul', price: 2200 },
          { month: 'Aug', price: 2350 },
        ],
        pastYield: 48,
        regionalYield: 52,
        profitMargin: 1900,
      },
      demand: {
        local: 0.80,
        national: 0.20,
        export: 0.00,
      },
    },
  },
};

const CropReport = () => {
  const data  = useLocation ();

  const { state, district, N, P, K } = location.state || {};


  const [selectedState, setSelectedState] = useState('Madhya Pradesh');
  const [selectedDistrict, setSelectedDistrict] = useState('Indore');
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetchReport();
  }, [selectedDistrict]);

  const fetchReport = () => {
    setLoading(true);
    setTimeout(() => {
      const data = sampleData.reports[selectedDistrict] || sampleData.reports['Indore'];
      setReport(data);
      setLoading(false);
    }, 1000);
  };

  const handleStateChange = (e) => {
    const value = e.target.value;
    setSelectedState(value);
    setSelectedDistrict(sampleData.districts[value][0]);
  };

  const TopRecommendation = () => {
    if (!report) return null;
    const { topCrop } = report;
    return (
      <div className="bg-green-50 rounded-lg p-6 shadow-md border border-green-200">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold text-green-800">TOP CROP RECOMMENDATION</h4>
          <span className="bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-full">Kharif Season</span>
        </div>
        <div className="grid md:grid-cols-4 gap-4 items-center">
          <div className="col-span-1">
            <h2 className="text-4xl font-bold text-green-700">{topCrop.name}</h2>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-gray-500">Expected Profit</p>
            <p className="text-2xl font-bold text-gray-800">₹{topCrop.profit}<span className="text-base font-normal"> / Acre</span></p>
            <p className="text-xs text-gray-400">ROI: {topCrop.roi}% (High)</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-gray-500">Projected Yield</p>
            <p className="text-2xl font-bold text-gray-800">{topCrop.yield}<span className="text-base font-normal"> qtl/acre</span></p>
            <p className="text-xs text-gray-400">{((topCrop.yield / report.market.regionalYield) * 100 - 100).toFixed(0)}% above Regional Avg.</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-gray-500">Market Risk</p>
            <p className="text-2xl font-bold text-orange-500">{topCrop.marketRisk}</p>
            <p className="text-xs text-gray-400">Stable demand for feed.</p>
          </div>
        </div>
      </div>
    );
  };

  const SoilInsights = () => {
    if (!report) return null;
    const { soil } = report;

    const radarData = {
      labels: ['Nitrogen (N)', 'Phosphorus (P)', 'Potassium (K)'],
      datasets: [
        {
          label: 'Your Soil Nutrients (kg/ha)',
          data: [soil.nitrogen, soil.phosphorus, soil.potassium],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    };

    const radarOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: {
            display: false,
          },
          suggestedMin: 0,
          suggestedMax: 300,
          pointLabels: {
            font: {
              size: 14,
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.r !== null) {
                label += context.parsed.r + ' kg/ha';
              }
              return label;
            },
          },
        },
      },
    };

    return (
      <div className="bg-white rounded-lg p-6 shadow-md mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Detailed Analysis & Soil Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Select State</label>
            <select value={selectedState} onChange={handleStateChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
              {sampleData.states.map(state => <option key={state} value={state}>{state}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Select District</label>
            <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
              {sampleData.districts[selectedState].map(district => <option key={district} value={district}>{district}</option>)}
            </select>
          </div>
        </div>
        <hr className="my-6" />
        <h4 className="text-md font-semibold text-gray-600 mb-2">Soil Compatibility & Deficiency</h4>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 p-4" role="alert">
          <p className="font-bold">Soil & Crop Compatibility</p>
          <p className="mt-2 text-sm">
            This soil has good compatibility with the selected crop. However, based on the <strong className="font-semibold">soil analysis</strong>, it shows some deficiencies.
          </p>
          <p className="mt-4 text-sm font-semibold">Nutrient Levels (N, P, K):</p>
          <div className="h-64">
            <Radar data={radarData} options={radarOptions} />
          </div>
          <p className="mt-2 text-sm">
            <strong className="font-semibold">Action Plan:</strong> A basal application of 100 kg Urea (for Nitrogen) and 25 kg SSP (for Phosphorus) is recommended to optimize yield.
          </p>
        </div>
      </div>
    );
  };

  const MarketAnalysis = () => {
    if (!report) return null;
    const { market, demand } = report;

    const lineData = {
      labels: market.priceTrend.map(item => item.month),
      datasets: [
        {
          label: 'Price (₹/qtl)',
          data: market.priceTrend.map(item => item.price),
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          tension: 0.4,
        },
      ],
    };

    const lineOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Local Mandi Price Trend (Last 6 Months)',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: 'Price (₹/qtl)',
          },
        },
      },
    };

    const pieData = {
      labels: Object.keys(demand).map(key => key.charAt(0).toUpperCase() + key.slice(1)),
      datasets: [
        {
          data: Object.values(demand),
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    const pieOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Market Demand Breakdown',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
      },
    };

    return (
      <div className="bg-white rounded-lg p-6 shadow-md mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Market & Profitability Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="h-64">
              <Line data={lineData} options={lineOptions} />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              <span className="font-semibold text-gray-700">Average Mandi Price: </span>₹{market.priceTrend.reduce((sum, item) => sum + item.price, 0) / market.priceTrend.length}/qtl
              <span className="text-xs text-gray-400"> (Source: e-NAM)</span>
            </p>
          </div>
          <div className="col-span-1">
            <div className="h-64">
              <Pie data={pieData} options={pieOptions} />
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500"><span className="font-semibold text-gray-700">Projected Profit:</span> ₹{report.topCrop.profit}/acre</p>
              <p className="text-sm text-gray-500"><span className="font-semibold text-gray-700">Expected Yield:</span> {report.topCrop.yield} qtl/acre</p>
              <p className="text-sm text-gray-500"><span className="font-semibold text-gray-700">Profit Margin:</span> ₹{market.profitMargin}/qtl</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <svg className="animate-spin h-10 w-10 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="mt-4 text-gray-500">Generating Report...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Crop Planning & Market Analysis</h1>
          <span className="text-sm text-gray-500">Kisan Mitra AI System</span>
        </div>
        <TopRecommendation />
        <SoilInsights />
        <MarketAnalysis />
        <div className="mt-8 flex justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Generate Personalized 7-Day Action Plan 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropReport;