import { Helmet } from "react-helmet-async";
import HeroPeta from "../../components/HeroPeta";

const Peta = () => {
  return (
    <div>
      <Helmet>
        <title>Peta</title>
      </Helmet>
      <main className="bg-background">
       <HeroPeta/>
        <section className="text-center py-8 bg-gray-200">
          <h2 className="text-2xl font-bold">Eksplor Tempat Pembuangan Sampah di Kota Batam</h2>
          <h2 className="text-2xl font-bold">Kota <span className="text-[#6C8776]">Batam</span></h2>
          <div className="flex justify-center space-x-8 mt-4">
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-2xl"></i>
              <span className="ml-2">5 Tps</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-recycle text-2xl"></i>
              <span className="ml-2">3 Tps</span>
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="bg-white p-4 shadow-md">
            <img src="Peta.png" alt="Map" className="w-full h-[450px] object-cover" />
            <div className="flex justify-center mt-4">
              <input type="text" placeholder="Cari Lokasi Anda" className="border p-2 w-1/2" />
              <button className="bg-[#16312B] text-white px-4 py-2 ml-2">Search</button>
            </div>
          </div>
        </section>
        <section className="py-8">
          <h2 className="text-2xl font-bold text-center">Rekomendasi <span className="text-primary">TPS Terdekat</span></h2>
          <div className="flex justify-center space-x-4 mt-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-primary p-4 shadow-md rounded-lg">
                <img src="tpsSampah.png" alt="TPS terdekat" className="w-full h-48 object-cover shadow-2xl" />
                <p className="mt-2 text-center">TPS Terkini</p>
              </div>
            ))}
          </div>
        </section>
        <section className="py-8">
          <h2 className="text-2xl font-bold text-center">Rekomendasi <span className="text-primary">TPA Terdekat</span></h2>
          <div className="flex justify-center space-x-4 mt-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-primary p-4 shadow-md rounded-lg">
                <img src="tpsSampah.png" alt="TPA terdekat" className="w-full h-48 object-cover shadow-2xl" />
                <p className="mt-2 text-center">TPA Terkini</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Peta;
