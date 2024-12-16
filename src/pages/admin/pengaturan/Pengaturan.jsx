import { useState } from "react";

const AdminPengaturanPage = () => {
  const [activeTab, setActiveTab] = useState("editProfile");

  const renderContent = () => {
    if (activeTab === "editProfile") {
      return (
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="https://placehold.co/100x100"
              alt="Profile picture"
              className="w-24 h-24 rounded-full mb-4"
            />
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-gray-500">Nama</span>
              <input
                type="text"
                value="Alex Saiful"
                className="bg-[#d3d3b8] p-2 rounded-md w-full mb-4"
                readOnly
              />
            </div>
            <div>
              <span className="text-sm text-gray-500">Telepon</span>
              <input
                type="text"
                value="0811293712204"
                className="bg-[#d3d3b8] p-2 rounded-md w-full"
                readOnly
              />
            </div>
            <div>
              <span className="text-sm text-gray-500">Email</span>
              <input
                type="text"
                value="saifulalex@gmail.com"
                className="bg-[#d3d3b8] p-2 rounded-md w-full"
                readOnly
              />
            </div>
            <div>
              <span className="text-sm text-gray-500">Kata Sandi</span>
              <input
                type="password"
                value="********"
                className="bg-[#d3d3b8] p-2 rounded-md w-full"
                readOnly
              />
            </div>
            <div>
              <span className="text-sm text-gray-500">Tanggal Lahir</span>
              <input
                type="text"
                value="14 Oktober 1992"
                className="bg-[#d3d3b8] p-2 rounded-md w-full"
                readOnly
              />
            </div>
            <div>
              <span className="text-sm text-gray-500">Status</span>
              <input
                type="text"
                value="Admin 1"
                className="bg-[#d3d3b8] p-2 rounded-md w-full"
                readOnly
              />
            </div>
            <div>
              <span className="text-sm text-gray-500">Alamat</span>
              <input
                type="text"
                value="Nongsa Digital Park"
                className="bg-[#d3d3b8] p-2 rounded-md w-full"
                readOnly
              />
            </div>
            <div>
              <span className="text-sm text-gray-500">Kota</span>
              <input
                type="text"
                value="Batam"
                className="bg-[#d3d3b8] p-2 rounded-md w-full"
                readOnly
              />
            </div>
            <div>
              <span className="text-sm text-gray-500">Kode Pos</span>
              <input
                type="text"
                value="29465"
                className="bg-[#d3d3b8] p-2 rounded-md w-full"
                readOnly
              />
            </div>
            <div>
              <span className="text-sm text-gray-500">Negara</span>
              <input
                type="text"
                value="Indonesia"
                className="bg-[#d3d3b8] p-2 rounded-md w-full"
                readOnly
              />
            </div>
            <div className="flex justify-end items-end">
              <div className="flex justify-end mt-6">
                <button className="bg-secondary text-white px-6 py-2 rounded-md">
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === "security") {
      return (
        <div className="">
          <h1>Auntentikasi dua faktor</h1>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-[#1a3b32] cursor-pointer"
              ></label>
            </div>
            <span className="text-sm">
              Mengaktifkan atau menonaktifkan otentikasi dua faktor
            </span>
          </div>
          <h2 className="text-xl font-bold mb-4">Ubah Kata Sandi</h2>
          <div className="mt-4">
            <label className="block text-sm text-gray-500">
              Kata sandi saat ini
            </label>
            <input
              type="password"
              placeholder="Masukkan kata sandi baru"
              className="bg-[#d3d3b8] p-2 rounded-md w-80 mt-2"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm text-gray-500">
              Kata sandi baru
            </label>
            <input
              type="password"
              placeholder="Konfirmasi kata sandi baru"
              className="bg-[#d3d3b8] p-2 rounded-md w-80 mt-2"
            />
          </div>
          <button className="bg-secondary text-white px-6 py-2 rounded-md mt-4">
            Simpan
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      <h1>pengaturan page</h1>
    </div>
  );
};

export default AdminPengaturanPage;
