import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Hero from "./Pages/Hero";
import Aichat from "./Pages/AiChat ";
import Market from "./Pages/Market";
import Cropmonitoring from "./Pages/Cropmonitoring";
import Support from "./Pages/Support";
import NotFound from "./Notfound";
import Broadcast from "./Pages/community/Broadcast";
import ExpertGuidance from "./Pages/community/ExpertGuidance";
import Vlog from "./Pages/community/Vlog";
import CropPlanning from "./Pages/cropPlanning";
import CropReport from "./Pages/cropReport"
import PlantDiseaseDetection from "./Pages/PlantDiseaseDetection";
import ImageUpload from "./Pages/ImageUpload";
import MarketAnalysis from "./Pages/MarketInsights";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/" element={<Navigate to="/Login" replace />} />
        <Route path="/aichat" element={<Aichat />} />
        <Route path="/plantDiseaseDetection" element={<PlantDiseaseDetection />} />
        <Route path="/imageUpload" element={<ImageUpload />} />
        <Route path="/Market" element={<Market />} />
        {/* <Route path="/Market" element={<MarketAnalysis />} /> */}
        <Route path="/analysis" element={<CropPlanning />} />
        {/* <Route path="/analysis" element={<CropReport />} /> */}
        <Route path="/cropreport" element={<CropReport />} />
        <Route path="/cropmonitoring" element={<Cropmonitoring />} />
        <Route path="/support" element={<Support />} />
        <Route path="/Broadcast" element={<Broadcast />} />
        <Route path="/ExpertGuidance" element={<ExpertGuidance />} />
        <Route path="/Vlog" element={<Vlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
