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
      if (
        communityRef.current &&
        !communityRef.current.contains(event.target)
      ) {
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
        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-600">
          <Link
            to="/"
            className="hover:border-b-2 border-green-600 transition pb-1"
          >
            {t.logo}
          </Link>
        </h1>

        {/* Links + Language */}
        <div className="flex items-center space-x-6">
          <ul
            className={`flex space-x-4 md:space-x-8 text-gray-700 ${
              lang === "hi" ? "font-bold" : "font-medium"
            }`}
          >
            {/* Normal Links */}
            {["aiChat", "analysis", "cropMonitoring"].map((link, idx) => (
              <li key={idx}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="px-3 py-2 rounded-md hover:border hover:border-green-600 transition text-sm md:text-base"
                >
                  {t[link]}
                </a>
              </li>
            ))}

            {/* Community Dropdown */}
            <li className="relative -mt-2" ref={communityRef}>
              <button
                onClick={() => setIsCommunityOpen((prev) => !prev)}
                className="px-3 py-2 rounded-md hover:border hover:border-green-400 transition text-sm md:text-base"
              >
                {t.community}
              </button>

              {isCommunityOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                  <ul className="flex flex-col text-gray-700">
                    {Object.entries(t.communityMenu).map(([key, value]) => (
                      <li key={key}>
                        <a
                          href={`/${key}`}
                          className="block px-4 py-2 hover:bg-green-100 hover:border-l-4 border-green-600 transition"
                        >
                          {value}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            <li>
              <a
                href="/Support"
                className="px-3 py-2 rounded-md hover:border hover:border-green-600 transition text-sm md:text-base"
              >
                {t.support}
              </a>
            </li>
          </ul>

          {/* Language Selector */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="border rounded px-2 py-1 text-xs md:text-sm focus:outline-none hover:border-green-600 transition"
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
