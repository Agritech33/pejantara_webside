import { Helmet } from "react-helmet-async";
import Carousel from "../../components/Carousel";

const TentangKami = () => {
  return (
    <div>
      <Helmet>
        <title>Tentang Kami</title>
      </Helmet>
      <main className="w-full py-10 md:pt-[5.5rem]">
        <section className="bg-white shadow-md overflow-hidden">
          <Carousel />
          <div className="p-4 md:p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Mendukung <span className="text-secondary">Kehidupan Sehat,</span>
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Menciptakan <span className="text-secondary">Lingkungan</span> Bersih.
            </h2>
            <p className="mt-2 md:mt-4 text-gray-600 text-sm md:text-base">
              Pejantara didirikan dengan tujuan untuk membantu pemerintah mengatasi masalah overload sampah, mengembangkan Program Pengelolaan Sampah yang berbasis pemberdayaan masyarakat dan teknologi serta menjadikan Batam sebagai kota
              yang bebas sampah dan ramah lingkungan.
            </p>
          </div>
        </section>

        <div className="flex flex-col md:flex-row gap-4 py-5 px-4 md:px-0">
          <div className="flex flex-col gap-4 flex-1">
            <div className="bg-cardlayanan p-8 md:p-16 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <i className="fas fa-leaf text-xl md:text-2xl mr-2"></i>
                <h2 className="text-xl md:text-3xl font-bold"><span className="text-secondary">Visi</span> Pejantara</h2>
              </div>
              <p className="text-sm md:text-base">Membangun kesadaran lingkungan yang berdampak bagi kesejahteraan masyarakat dan kelestarian alam.</p>
            </div>
            <div className="bg-cardlayanan text-gray-800 p-8 md:p-16 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <i className="fas fa-leaf text-xl md:text-2xl text-green-900 mr-2"></i>
                <h2 className="text-xl md:text-3xl font-bold"><span className="text-secondary">Misi</span> Pejantara</h2>
              </div>
              <p className="text-sm md:text-base">
                Mendorong lahirnya regulasi dan kebijakan yang berwawasan lingkungan, melakukan inovasi tata kelola sampah yang lebih komprehensif, dan mengadakan Program Pusat Pilah Sampah Masyarakat (PPSM) di tingkat RT/RW.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img src="tentangKami1.png" alt="foto1" className="rounded-lg shadow-md w-full h-[320px] md:h-[480px] object-cover" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full rounded-lg p-6 mt-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-4">
                <img src="tentangKami2.png" alt="foto2" className="rounded-lg" />
              </div>
              <div className="md:w-1/2 p-4">
                <h1 className="text-4xl font-bold mb-4">Mengapa Harus <br/> Memilih <span className="text-secondary">Pejantara</span></h1>
                <p className="mb-4 text-2xl py-3">Pejantara dipilih sebagai platform edukasi sampah dan <br/> pencarian TPA/TPST karena memiliki keunggulan yang relevan <br/> dengan kebutuhan pengelolaan sampah di masyarakat</p>
                <ul className="list-none space-y-2 text-2xl font-semibold p-3">
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    Edukasi Yang Lengkap
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    Peta Lokasi TPA Yang Akurat
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    Akses Informasi Terpusat
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    Interaktif & Mudah Digunakan
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row mt-6">
              <div className="md:w-1/2 p-4">
                <img src="tentangKami3.png" alt="foto3" className="rounded-lg" />
              </div>
              <div className="md:w-1/2 p-4 py-7">
                <div className="bg-cardlayanan p-24 rounded-xl shadow-lg mb-4">
                  <h2 className="text-3xl font-bold mb-2 p-4"><span className="text-[#0A4933]">Tujuan</span> Pejantara</h2>
                  <p>1. Membantu pemerintah mengatasi masalah overload sampah</p>
                  <p>2. Mengembangkan Program Pengelolaan Sampah yang terintegrasi dengan baik untuk mengurangi volume sampah dan meningkatkan kualitas hidup masyarakat</p>
                  <p>3. Menjadikan Batam sebagai kota yang bebas sampah dan ramah lingkungan.</p>
                </div>
                <div className="bg-cardlayanan p-24 rounded-xl shadow-lg mt-5">
                  <h2 className="text-3xl font-bold mb-2 p-4"><span className="text-[#0A4933]">Tugas</span> Pejantara</h2>
                  <p>1. Membantu Pemerintah Pusat, Pemerintah daerah dan masyarakat dalam mengelola sampah</p>
                  <p>2. Menyediakan informasi yang akurat dan terkini mengenai lokasi TPA/TPST</p>
                  <p>3. Mengedukasi masyarakat tentang pentingnya pengelolaan sampah yang baik dan benar melalui program-program yang interaktif dan mudah diakses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TentangKami;
