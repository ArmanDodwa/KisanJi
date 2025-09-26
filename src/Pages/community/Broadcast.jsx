import React from "react";

// Helper function: get a random past date within X days
function getRandomPastDate(maxDaysAgo = 10) {
  const daysAgo = Math.floor(Math.random() * maxDaysAgo) + 1; // 1 to maxDaysAgo
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().split("T")[0]; // format YYYY-MM-DD
}

// Sample broadcast data with dynamic dates
const broadcastData = [
  {
    id: 1,
    title: "Padding Updates",
    description:
      "Notify Dates for padding ",
    date: new Date().toISOString().split("T")[0], // today's date
    isNew: true,
    url: "https://agri.punjab.gov.in/uploads/news/news_1751887164_fqpYDJXyqoFwynO2.pdf",
  },
  {
    id: 2,
    title: "Weather Alert",
    description:
      "Heavy rainfall expected in Punjab region tomorrow. Take necessary precautions for your crops.",
    date: getRandomPastDate(10), // random past date within 10 days
    isNew: false,
    url: "https://www.imd.gov.in/weather-alerts",
  },
  {
    id: 3,
    title: "Market Price Notification",
    description:
      " Mandatory display of MRP for all agricultural products in local markets",
    date: getRandomPastDate(10),
    isNew: false,
    url: "https://agri.punjab.gov.in/uploads/news/news_1751887212_BtrGdwvAI6qBMH8l.pdf",
  },
];

export default function Broadcast() {
  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-green-600 mb-8 text-center">
        Broadcast
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {broadcastData.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block bg-white rounded-xl shadow-lg overflow-hidden transform 
                        transition-all duration-300 
                        hover:scale-105 hover:shadow-2xl 
                        relative ${item.isNew ? "animate-bounce" : ""}`}
          >
            {/* Pulsing New badge */}
            {item.isNew && (
              <span className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                New
              </span>
            )}

            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h2>
                <span className="text-green-600 text-sm font-medium bg-green-100 px-2 py-1 rounded">
                  {item.date}
                </span>
              </div>

              <p className="text-gray-700 mt-2">{item.description}</p>

              <div className="flex items-center mt-4 text-green-600 font-medium">
                <span className="mr-2">🔔</span> Important
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}