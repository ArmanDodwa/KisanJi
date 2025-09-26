import React, { useEffect, useRef } from "react";
import Navbar from "./NavBar";
import { gsap } from "gsap";
import farmerImg from "../assets/Picture/istockphoto-1367068216-612x612__2_-removebg-preview.png";
import { useLanguage } from "../Hook/LanguageContext"; // adjust path
import OurServices from "./OurServices";
import Connection from "./Connection";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useLanguage();

  const containerRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Text and image come in at the same time
      tl.from(".hero-left", { x: -100, opacity: 0, duration: 2 }).from(
        ".hero-right",
        { x: 100, opacity: 0, duration: 2 },
        "<"
      ); // "<" = start at same time

      // Buttons appear after text+image
      // .from(".button", { opacity: 0, duration: 1, stagger: 0.2 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-100 to-green-200"
    >
      <Navbar />

      <section className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-8 py-20 max-w-7xl mx-auto">
        {/* LEFT */}
        <div className="hero-left flex-1 text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 leading-snug">
            {t.heroTitle}
            {/* <span className="inline-block">🌾</span> */}
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
            {t.heroDescription.split("|").map((line, i) => {
              line = line.trim();

              // Check if this line starts with "*" → apply special styling
              if (line.startsWith("*")) {
                return (
                  <span
                    key={i}
                    className="block text-green-600 font-semibold mt-4"
                  >
                    {line.replace("*", "")}
                  </span>
                );
              }

              // Normal line
              return (
                <span key={i} className="block mb-2">
                  {line}
                </span>
              );
            })}
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
            {/* Button 1 */}
            <Link to="/aichat">
              <button
                ref={btn1Ref}
                className="button px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-full shadow-lg transition"
              >
                {t.getStart}
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right flex-1 flex justify-center mb-10 md:mb-0">
          <div className="relative -mt-10 overflow-hidden rounded-3xl">
            <img
              src={farmerImg}
              alt="Farmer working in field"
              className="w-full max-w-md object-cover block"
            />
            <div className="absolute inset-0 rounded-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      <div className=" py-8 rounded-t-[50%] shadow-inner" />
      {/* Other Sections */}
      <OurServices />

      <Connection />

      <Footer />
    </div>
  );
};

export default Hero;
