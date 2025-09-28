import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const ImageUpload = () => {
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const url = URL.createObjectURL(file);
      console.log("+++++++++++++");
      console.log("IMAEG",url);

      navigate("/plantDiseaseDetection",{state: url});
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-gray-700">
        🌾 Crop Disease Detection
      </h1>

      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {/* Clickable div */}
      <div
        onClick={handleDivClick}
        className="w-102 h-56 border-2 border-dashed border-gray-400 rounded-2xl flex flex-col items-center justify-center bg-white shadow-md cursor-pointer transition-all hover:shadow-lg hover:border-green-500 hover:bg-green-50"
      >
        <span className="text-gray-600 font-medium text-lg">
          📁 Click to Select Images
        </span>
        <span className="text-gray-400 text-sm mt-2">
          (Multiple selection allowed)
        </span>
      </div>
    </div>
  );
};

export default ImageUpload;
