import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Hero from "./Pages/Hero";
import Aichat from "./Pages/Aichat";
import Analysis from "./Pages/Analysis";
import Cropmonitoring from "./Pages/Cropmonitoring";
import Support from "./Pages/Support";
import NotFound from "./Notfound";
import Broadcast from "./Pages/community/Broadcast";
import ExpertGuidance from "./Pages/community/ExpertGuidance";
import Vlog from "./Pages/community/Vlog";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/" element={<Navigate to="/Login" replace />} />
        <Route path="/aichat" element={<Aichat />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/cropmonitoring" element={<Cropmonitoring />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Broadcast" element={<Broadcast />} />
        <Route path="/ExpertGuidance" element={<ExpertGuidance />} />
        <Route path="/Vlog" element={<Vlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
