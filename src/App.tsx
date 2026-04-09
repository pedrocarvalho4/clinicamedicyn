import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Clinics from "./pages/Clinics";
import Doctors from "./pages/Doctors";
import Specialties from "./pages/Specialties";
import Agreements from "./pages/Agreements";
import NotFound from "./pages/NotFound";
import DoctorProfile from "./pages/DoctorProfile";
import NewsPage from "./pages/NewsPage";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-dvh bg-gradient-to-b from-emerald-50 via-white to-white text-slate-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clinicas" element={<Clinics />} />
            <Route path="/medicos" element={<Doctors />} />
            <Route path="/medicos/:id" element={<DoctorProfile />} />
            <Route path="/especialidades" element={<Specialties />} />
            <Route path="/acordos" element={<Agreements />} />
            <Route path="/noticias" element={<NewsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
