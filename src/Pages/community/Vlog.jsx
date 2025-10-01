import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../NavBar";

const vlogData = {
  english: [
    {
     id: 1,
      title: "How to Start a Permaculture Farm",
      description: "Learn how to start a permaculture farm using environmentally-friendly practices.",
      image: "https://modernfarmer.com/wp-content/uploads/2025/09/Saline-agriculture-1200x675.webp", // verified
      url: "https://modernfarmer.com/2025/07/start-permaculture-farm/",
      tag: "Farming"
    },
    {
      id: 2,
      title: "11 Flowers You Should Plant Along Your Vegetable Garden",
      description: "Enhance your vegetable garden by planting flowers that attract beneficial insects.",
      image: "https://modernfarmer.com/wp-content/uploads/2025/06/vegetable-garden-flowers-1200x675.webp",
      url: "https://modernfarmer.com/2025/06/vegetable-garden-flowers/",
      tag: "Gardening",
    },
    {
      id: 3,
      title: "Growing and Grinding Your Own Wheat: A Beginner’s Guide",
      description: "Step-by-step guide to growing and processing wheat for home use.",
      image: "https://modernfarmer.com/wp-content/uploads/2025/07/grow-grind-wheat-1200x675.webp",
      url: "https://modernfarmer.com/2025/07/grow-grind-wheat/",
      tag: "Crops",
    },
    {
      id: 4,
      title: "How to Dry Farm Tomatoes for Improved Taste",
      description: "Learn techniques for dry farming tomatoes to boost flavor and yield.",
      image: "https://modernfarmer.com/wp-content/uploads/2025/08/dry-farm-tomatoes.jpg",
      url: "https://modernfarmer.com/2025/06/dry-farm-tomatoes/",
      tag: "Farming",
    },
    {
      id: 5,
      title: "Saline Agriculture: A Promising Approach",
      description: "Explore methods to grow crops in saline soils and maintain high yields.",
      image: "https://modernfarmer.com/wp-content/uploads/2025/09/saline-agriculture.jpg",
      url: "https://modernfarmer.com/2025/09/saline-agriculture/",
      tag: "Agriculture",
    }
  ],
  hindi: [
    {
      id: 1,
      title: "जैविक खेती की शुरुआत कैसे करें",
      description: "पर्यावरण-अनुकूल तरीकों का उपयोग करके जैविक खेती शुरू करने के तरीके सीखें।",
      image: "https://modernfarmer.com/wp-content/uploads/2025/09/Saline-agriculture-1200x675.webp",
      url: "https://modernfarmer.com/2025/07/start-permaculture-farm/",
      tag: "खेती",
    },
    {
      id: 2,
      title: "सब्ज़ियों के बगीचे में कौन-कौन से फूल लगाएँ",
      description: "अपने बगीचे में ऐसे फूल लगाएँ जो लाभकारी कीटों को आकर्षित करें।",
      image: "https://modernfarmer.com/wp-content/uploads/2025/06/vegetable-garden-flowers-1200x675.webp",
      url: "https://modernfarmer.com/2025/06/vegetable-garden-flowers/",
      tag: "बागवानी",
    },
    {
      id: 3,
      title: "गेहूं उगाना और पीसना: शुरुआती के लिए मार्गदर्शिका",
      description: "घर पर उपयोग के लिए गेहूं उगाने और प्रक्रिया करने के चरण-दर-चरण निर्देश।",
      image: "https://modernfarmer.com/wp-content/uploads/2025/07/grow-grind-wheat-1200x675.webp",
      url: "https://modernfarmer.com/2025/07/grow-grind-wheat/",
      tag: "फसल",
    },
    {
      id: 4,
      title: "स्वाद बढ़ाने के लिए टमाटर की ड्राई फार्मिंग",
      description: "ड्राई फार्मिंग तकनीक सीखें जो टमाटर के स्वाद और पैदावार को बढ़ाती हैं।",
      image: "https://modernfarmer.com/wp-content/uploads/2025/08/dry-farm-tomatoes.jpg",
      url: "https://modernfarmer.com/2025/06/dry-farm-tomatoes/",
      tag: "खेती",
    },
    {
      id: 5,
      title: "सालाइन कृषि: एक आशाजनक दृष्टिकोण",
      description: "खारे मिट्टी में फसल उगाने और उच्च पैदावार बनाए रखने के तरीके सीखें।",
      image: "https://modernfarmer.com/wp-content/uploads/2025/09/saline-agriculture.jpg",
      url: "https://modernfarmer.com/2025/09/saline-agriculture/",
      tag: "कृषि",
    }
  ]
};



export default function Vlog() {
  const [language, setLanguage] = useState("english");
  const [menuOpen, setMenuOpen] = useState(false);

  const languages = Object.keys(vlogData);

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      {/* Language Button */}
      <Navbar/>
      <div className="relative mb-6 mt-20">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-green-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-700 transition font-medium flex items-center justify-between w-40"
        >
          {language.charAt(0).toUpperCase() + language.slice(1)}
          <motion.span
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="ml-2 inline-block"
          >
            ▼
          </motion.span>
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute mt-2 w-48 bg-white shadow-lg rounded-md z-50 border border-green-200"
            >
              {languages.map((lang) => (
                <div
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setMenuOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-green-100 cursor-pointer transition font-medium"
                >
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-green-600 mb-8 text-center">
        {language === "english" ? "Our Blogs" : "हमारे व्लॉग"}
      </h1>

      {/* Vlog Cards */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="wait">
          {vlogData[language].map((vlog) => (
            <motion.a
              key={vlog.id}
              href={vlog.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.2)" }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 border border-green-100"
              >
                <div className="relative">
                  <img src={vlog.image} alt={vlog.title} className="w-full h-52 object-cover" />
                  <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
                    {vlog.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 hover:text-green-600 transition">
                    {vlog.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{vlog.description}</p>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="mt-5 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition font-medium"
                  >
                    {language === "english" ? "▶ Read Now" : "▶ पढ़ें"}
                  </motion.button>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}