import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function AnalysisPage() {
  // Hardcoded prices (example over 5 months)
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Rice Price (₹/kg)",
        data: [40, 42, 41, 43, 45],
        borderColor: "rgba(34,197,94,1)", // Green
        backgroundColor: "rgba(34,197,94,0.2)",
        tension: 0.3,
      },
      {
        label: "Sugarcane Price (₹/kg)",
        data: [25, 26, 27, 28, 27],
        borderColor: "rgba(245,158,11,1)", // Orange
        backgroundColor: "rgba(245,158,11,0.2)",
        tension: 0.3,
      },
      {
        label: "Wheat Price (₹/kg)",
        data: [30, 31, 30, 32, 33],
        borderColor: "rgba(59,130,246,1)", // Blue
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.3,
      },
      {
        label: "Corn Price (₹/kg)",
        data: [20, 21, 22, 23, 22],
        borderColor: "rgba(236,72,153,1)", // Pink
        backgroundColor: "rgba(236,72,153,0.2)",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Commodity Price Analysis",
        font: { size: 20 },
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-green-700 mb-8">
        Commodity Price Analysis
      </h1>
      <div className="w-full max-w-4xl bg-white p-6 rounded-xl shadow-lg">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
