import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Hero from "./Pages/Hero"
import Aichat from "./Pages/Aichat"
import Analysis from "./Pages/Analysis"
import Cropmonitoring from "./Pages/Cropmonitoring"
import Community from "./Pages/Community"
import Support from "./Pages/Support"
import NotFound from "./Notfound"

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Hero/>} />
        <Route path="/" element={<Navigate to="/Login" replace />} />
        <Route path="/Hero" element={<Hero/>} />
        <Route path="/aichat" element={<Aichat/>} />
        <Route path="/analysis" element={<Analysis/>} />
        <Route path="/cropmonitoring" element={<Cropmonitoring/>} />
        <Route path="/community" element={<Community/>} />
        <Route path="/Support" element={<Support/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
