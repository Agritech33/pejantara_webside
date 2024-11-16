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
import Demo from "../pages/demo/demo";
import PenggunaLayout from "../pages/pengguna/penggunaLayout";
import ProfilePage from "../pages/pengguna/Profile";
import Settings from "../pages/pengguna/Settings";

const AppRouter = () => (
  <Router>
    <Routes>
      {/* Rute dengan MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Beranda />} />
        <Route path="/edukasi/:id?" element={<Edukasi />} />
        <Route path="/berita/:id?" element={<Berita />} />
        <Route path="/peta" element={<Peta />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
      </Route>
      <Route path="/demo" element={<Demo />} />

      {/* Rute untuk NotFound */}
      <Route path="*" element={<NotFound />} />
      {/* Rute untuk Pengguna */}
      <Route element={<PenggunaLayout />}>
        <Route path="/pengguna/profile" element={<ProfilePage />} />
        <Route path="/pengguna/settings" element={<Settings />} />
      </Route>

      {/* Rute untuk auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
);

export default AppRouter;
