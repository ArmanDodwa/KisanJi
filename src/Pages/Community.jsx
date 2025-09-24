import { useState, useRef, useEffect } from "react";

const Community = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="hover:text-green-600 transition"
      >
        Community
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200">
          <ul className="flex flex-col text-gray-700">
            <li>
              <a
                href="/Vlog"
                className="block px-4 py-2 hover:bg-green-100"
              >
                Vlog
              </a>
            </li>
            <li>
              <a
                href="/ExpertGuidance"
                className="block px-4 py-2 hover:bg-green-100"
              >
                ExpertGuidance
              </a>
            </li>
            <li>
              <a
                href="/Broadcast"
                className="block px-4 py-2 hover:bg-green-100"
              >
                Broadcast
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Community;
