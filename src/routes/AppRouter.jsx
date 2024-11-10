import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import Beranda from "../pages/Beranda/Beranda";
import Edukasi from "../pages/Edukasi/Edukasi";
import Berita from "../pages/Berita/Berita";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import Peta from "../pages/Peta/Peta";
import TentangKami from "../pages/TentangKami/TentangKami";

const AppRouter = () => (
  <Router>
    <Routes>
      {/* Rute dengan MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/edukasi/:id?" element={<Edukasi />} />
        <Route path="/berita/:id?" element={<Berita />} />
        <Route path="/peta" element={<Peta />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
      </Route>

      {/* Rute untuk NotFound */}
      <Route path="*" element={<NotFound />} />

      {/* Rute untuk auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
);

export default AppRouter;
