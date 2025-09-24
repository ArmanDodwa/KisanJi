import React from 'react'
// import Community from './community/Community'
import Community from './Community'

const Navbar= () => {
  return (
     <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-green-600">KisanJi</h1>

          {/* Links */}
          <ul className="flex space-x-8 text-gray-700 font-medium">
            <li>
              <a href="/aichat" className="hover:text-green-600 transition">
                Ai Chat
              </a>
            </li>
            <li>
              <a href="/analysis" className="hover:text-green-600 transition">
                Analysis
              </a>
            </li>
            <li>
              <a href="/cropmonitoring" className="hover:text-green-600 transition">
                Crop Monitoring
              </a>
            </li>
            <li>
              <a className="hover:text-green-600 transition">
              <Community/>
              </a>
            </li>
            <li>
              <a href="#Support" className="hover:text-green-600 transition">
                Support
              </a>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar