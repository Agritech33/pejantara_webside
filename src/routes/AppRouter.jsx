import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Settings from "../pages/pengguna/Settings";
import KegiatanPage from "../pages/pengguna/Kegiatan";
import LaporanPage from "../pages/pengguna/Laporan";
import PointsPage from "../pages/pengguna/Points";
import AdminLayout from "../pages/admin/AdminLayout";
import AdminPage from "../pages/admin/Admin";
import AdminPenggunaPage from "../pages/admin/pengguna/Pengguna";
import AdminStatistikPage from "../pages/admin/statistik/Statistik";
import AdminDataPejantaraPage from "../pages/admin/data pejantara/DataPejantara";
import AdminAkunPage from "../pages/admin/akun/Akun";
import AdminPengaturanPage from "../pages/admin/pengaturan/Pengaturan";

const AppRouter = () => (
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <Routes>
      {/* Main Layout Routes */}
      <Route element={<MainLayout />}>
        <Route index element={<Beranda />} />
        <Route path="edukasi/:id?" element={<Edukasi />} />
        <Route path="berita/:id?" element={<Berita />} />
        <Route path="peta" element={<Peta />} />
        <Route path="tentang-kami" element={<TentangKami />} />

        {/* Pengguna Layout Routes */}
        <Route path="pengguna" element={<PenggunaLayout />}>
          <Route path="settings" element={<Settings />} />
          <Route path="points" element={<PointsPage />} />
          <Route path="laporan" element={<LaporanPage />} />
          <Route path="kegiatan" element={<KegiatanPage />} />
        </Route>
      </Route>

      {/* admin layout routes */}
      <Route element={<AdminLayout />}>
        <Route path="admin/beranda" element={<AdminPage />} />
        <Route path="admin/statistik" element={<AdminStatistikPage />} />
        <Route
          path="admin/data pejantara"
          element={<AdminDataPejantaraPage />}
        />
        <Route path="admin/pengguna" element={<AdminPenggunaPage />} />
        <Route path="admin/akun" element={<AdminAkunPage />} />
        <Route path="admin/pengaturan" element={<AdminPengaturanPage />} />
      </Route>

      {/* Demo Route */}
      <Route path="demo" element={<Demo />} />

      {/* Authentication Routes */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      {/* Not Found Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
