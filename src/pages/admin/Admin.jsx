const AdminPage = () => {
  return (
    <div>
      <div className="p-6 bg-white">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-accent0">Beranda</h1>
          <div className="flex items-center space-x-4">
            <i className="fas fa-bell text-xl"></i>
            <div className="flex items-center space-x-2">
              <img
                src="https://placehold.co/40x40"
                alt="User profile"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-lg font-semibold">Alex saiful</span>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#EAE7DD] shadow-lg p-4 rounded-lg flex items-center space-x-4">
            <i className="fas fa-trash-alt text-2xl"></i>
            <div>
              <p className="text-2xl font-bold">1200</p>
              <p>Total Sampah /ton</p>
            </div>
          </div>
          <div className="bg-[#EAE7DD] shadow-lg p-4 rounded-lg flex items-center space-x-4">
            <i className="fas fa-recycle text-2xl"></i>
            <div>
              <p className="text-2xl font-bold">45</p>
              <p>Total TPA</p>
            </div>
          </div>
          <div className="bg-[#EAE7DD] shadow-lg p-4 rounded-lg flex items-center space-x-4">
            <i className="fas fa-users text-2xl"></i>
            <div>
              <p className="text-2xl font-bold">120</p>
              <p>Pengguna Website</p>
            </div>
          </div>
          <div className="bg-[#EAE7DD] shadow-lg p-4 rounded-lg flex items-center space-x-4">
            <i className="fas fa-mobile-alt text-2xl"></i>
            <div>
              <p className="text-2xl font-bold">40</p>
              <p>Pengguna Mobile</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#EAE7DD] shadow-lg p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Pengunjung Aktif</h2>
              <button className="bg-secondary text-white px-2 py-1 rounded">
                Jan24 - May24
              </button>
            </div>
            <div className="h-96 rounded-lg p-4">
              <img
                src="../AdminBeranda1.png"
                alt="Bar chart showing active visitors"
              />
            </div>
            <div className="flex justify-between mt-4">
              <button className="bg-secondary text-white px-4 py-2 rounded">
                Pengunjung Website
              </button>
              <button className="bg-secondary text-white px-4 py-2 rounded">
                Pengunjung Mobile
              </button>
            </div>
          </div>
          <div className="bg-[#EAE7DD] shadow-lg p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Kapasitas TPA</h2>
              <button className="bg-secondary text-white px-2 py-1 rounded">
                Minggu Ini
              </button>
            </div>
            <div className="h-96 rounded-lg p-4 flex justify-center items-center">
              <img
                src="../AdminBeranda2.png"
                alt="Pie chart showing TPA capacity"
              />
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
                <span>TPA Tersedia: 45%</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-teal-900 rounded-full"></div>
                <span>TPA Penuh: 55%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#EAE7DD] shadow-lg p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Detail Pengguna</h2>
            <button className="bg-secondary text-white px-2 py-1 rounded">
              Oktober
            </button>
          </div>
          <table className="w-full rounded-lg">
            <thead>
              <tr className="bg-bgBtn text-white rounded-xl">
                <th className="p-2 text-left">Nama Akun</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-left">Tanggal - Waktu</th>
                <th className="p-2 text-left">Lokasi</th>
                <th className="p-2 text-left">Usia</th>
                <th className="p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 flex items-center space-x-2">
                  <img
                    src="https://placehold.co/40x40"
                    alt="User profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>Farhat Abbis</span>
                </td>
                <td className="p-2">farhatbenar@gmail.com</td>
                <td className="p-2">02.11.2024 - 12.53 PM</td>
                <td className="p-2">Kota Batam</td>
                <td className="p-2">47 Tahun</td>
                <td className="p-2">
                  <span className="bg-bgBtn text-white px-2 py-1 rounded">
                    Member
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-2 flex items-center space-x-2">
                  <img
                    src="https://placehold.co/40x40"
                    alt="User profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>Agus Salim</span>
                </td>
                <td className="p-2">aguskuat@gmail.com</td>
                <td className="p-2">29.10.2024 - 14.45 PM</td>
                <td className="p-2">Kota Batam</td>
                <td className="p-2">30 Tahun</td>
                <td className="p-2">
                  <span className="bg-bgBtn text-white px-2 py-1 rounded">
                    Member
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
