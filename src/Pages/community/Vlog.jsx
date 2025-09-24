import React from "react";

const vlogData = [
  {
    id: 1,
    title: "Organic Farming Tips",
    description: "Learn how to improve soil fertility and yield organically.",
    image: "https://via.placeholder.com/400x200.png?text=Vlog+1",
    url: "https://www.example.com/vlog1",
    tag: "Farming",
  },
  {
    id: 2,
    title: "Pest Management Techniques",
    description: "Effective ways to protect your crops from pests.",
    image: "https://via.placeholder.com/400x200.png?text=Vlog+2",
    url: "https://www.example.com/vlog2",
    tag: "Pest Control",
  },
  {
    id: 3,
    title: "Water Conservation Methods",
    description: "Save water while maximizing irrigation efficiency.",
    image: "https://via.placeholder.com/400x200.png?text=Vlog+3",
    url: "https://www.example.com/vlog3",
    tag: "Environment",
  },
];

const Vlog =()=> {
  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-green-600 mb-8 text-center">Our Vlogs</h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {vlogData.map((vlog) => (
          <a
            key={vlog.id}
            href={vlog.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <div className="relative">
                <img
                  src={vlog.image}
                  alt={vlog.title}
                  className="w-full h-52 object-cover"
                />
                <span className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {vlog.tag}
                </span>
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 hover:text-green-600 transition">
                  {vlog.title}
                </h2>
                <p className="text-gray-600 mt-2">{vlog.description}</p>
                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                  Watch Now
                </button>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Vlog;   