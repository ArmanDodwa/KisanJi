import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../Hook/LanguageContext"; // adjust path
import { Link } from "react-router-dom";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);
  const communityRef = useRef(null);

  // Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (communityRef.current && !communityRef.current.contains(event.target)) {
        setIsCommunityOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Left Side: Logo */}
        <h1 className="text-2xl font-bold text-green-600">
          <Link to="/">{t.logo}</Link>
        </h1>

        {/* Right Side: Links + Language */}
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-8 text-gray-700 font-medium">
            <li>
              <a href="/aichat" className="hover:text-green-600 transition">
                {t.aiChat}
              </a>
            </li>
            <li>
              <a href="/analysis" className="hover:text-green-600 transition">
                {t.analysis}
              </a>
            </li>
            <li>
              <a href="/cropmonitoring" className="hover:text-green-600 transition">
                {t.cropMonitoring}
              </a>
            </li>

            {/* Community Dropdown */}
            <li className="relative" ref={communityRef}>
              <button
                onClick={() => setIsCommunityOpen((prev) => !prev)}
                className="hover:text-green-600 transition cursor-pointer"
              >
                {t.community}
              </button>

              {isCommunityOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                  <ul className="flex flex-col text-gray-700">
                    <li>
                      <a href="/Vlog" className="block px-4 py-2 hover:bg-green-100">
                        Vlog
                      </a>
                    </li>
                    <li>
                      <a href="/ExpertGuidance" className="block px-4 py-2 hover:bg-green-100">
                        Expert Guidance
                      </a>
                    </li>
                    <li>
                      <a href="/Broadcast" className="block px-4 py-2 hover:bg-green-100">
                        Broadcast
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <a href="#Support" className="hover:text-green-600 transition">
                {t.support}
              </a>
            </li>
          </ul>

          {/* Small Language Dropdown */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="border rounded px-2 py-1 text-xs focus:outline-none"
          >
            <option value="en">EN</option>
            <option value="hi">हिंदी</option>
            <option value="mr">मराठी</option>
            <option value="pa">ਪੰਜਾਬੀ</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
