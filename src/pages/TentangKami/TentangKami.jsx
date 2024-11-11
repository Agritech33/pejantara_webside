import { Helmet } from "react-helmet-async";
import Carousel from "../../components/Carousel";

const TentangKami = () => {
  return (
    <div>
      <Helmet>
        <title>Tentang Kami</title>
      </Helmet>
      <main className="w-full py-10 md:py-28">
        <section className="bg-white shadow-md rounded-lg overflow-hidden">
          <Carousel />
          <div className="p-4 md:p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Mendukung <span className="text-secondary">Kehidupan Sehat,</span>
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Menciptakan <span className="text-secondary">Lingkungan</span>{" "}
              Bersih.
            </h2>
            <p className="mt-2 md:mt-4 text-gray-600 text-sm md:text-base">
              Pejantara didirikan dengan tujuan untuk membantu pemerintah
              mengatasi masalah overload sampah, mengembangkan Program
              Pengelolaan Sampah yang berbasis pemberdayaan masyarakat dan
              teknologi serta menjadikan Batam sebagai kota yang bebas sampah
              dan ramah lingkungan.
            </p>
          </div>
        </section>

        <div className="flex flex-col md:flex-row gap-4 py-5 px-4 md:px-0">
          <div className="flex flex-col gap-4 flex-1">
            <div className="bg-[#16312B] text-white p-8 md:p-16 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <i className="fas fa-leaf text-xl md:text-2xl mr-2"></i>
                <h2 className="text-xl md:text-2xl font-bold">
                  Visi Pejantara
                </h2>
              </div>
              <p className="text-sm md:text-base">
                Membangun kesadaran lingkungan yang berdampak bagi kesejahteraan
                masyarakat dan kelestarian alam.
              </p>
            </div>
            <div className="bg-cardlayanan text-gray-800 p-8 md:p-16 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <i className="fas fa-leaf text-xl md:text-2xl text-green-900 mr-2"></i>
                <h2 className="text-xl md:text-2xl font-bold">
                  Misi Pejantara
                </h2>
              </div>
              <p className="text-sm md:text-base">
                Mendorong lahirnya regulasi dan kebijakan yang berwawasan
                lingkungan, melakukan inovasi tata kelola sampah yang lebih
                komprehensif, dan mengadakan Program Pusat Pilah Sampah
                Masyarakat (PPSM) di tingkat RT/RW.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="tentangKami1.png"
              alt="A person wearing a beanie and glasses, picking up trash in a forested area"
              className="rounded-lg shadow-md w-full h-[320px] md:h-[480px] object-cover"
            />
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-start gap-6">
              <img
                src="tentangKami2.png"
                alt="A hand holding a small plant with soil"
                className="rounded-lg shadow-md w-full"
              />
              <img
                src="tentangKami3.png"
                alt="A beach with trash bins and mountains in the background"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>

            <div className="flex flex-col">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                  Mengapa Harus <br /> Memilih{" "}
                  <span className="text-secondary">Pejantara</span>
                </h1>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Pejantara dipilih sebagai platform edukasi sampah dan
                  pencarian TPA/TPS karena memiliki keunggulan yang relevan
                  dengan kebutuhan pengelolaan sampah di masyarakat.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-800">
                    <i className="fas fa-check-circle text-green-600 mr-3"></i>
                    Edukasi Yang Lengkap
                  </li>
                  <li className="flex items-center text-gray-800">
                    <i className="fas fa-check-circle text-green-600 mr-3"></i>
                    Peta Lokasi TPA Yang Akurat
                  </li>
                  <li className="flex items-center text-gray-800">
                    <i className="fas fa-check-circle text-green-600 mr-3"></i>
                    Akses Informasi Terpusat
                  </li>
                  <li className="flex items-center text-gray-800">
                    <i className="fas fa-check-circle text-green-600 mr-3"></i>
                    Interaktif & Mudah Digunakan
                  </li>
                </ul>
              </div>

              <div className="space-y-0">
                <div className="bg-cardlayanan p-8 md:p-20 rounded-t-lg shadow-md mb-2">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 flex items-center">
                    <i className="fas fa-bullseye text-green-600 mr-2"></i>
                    <span className="text-[#0A4933]">Tujuan</span> Pejantara
                  </h2>
                  <ol className="list-decimal list-inside text-gray-600 space-y-1 text-sm md:text-base">
                    <li>
                      Membantu pemerintah mengatasi masalah overload sampah.
                    </li>
                    <li>
                      Mengembangkan Program Pengelolaan Sampah yang berbasis
                      pemberdayaan masyarakat dan teknologi.
                    </li>
                    <li>
                      Menjadikan Batam sebagai kota yang bebas sampah dan ramah
                      lingkungan.
                    </li>
                  </ol>
                </div>
                <div className="bg-cardlayanan p-8 md:p-20 rounded-b-lg shadow-md">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 flex items-center">
                    <i className="fas fa-tasks text-green-600 mr-2"></i>
                    <span className="text-[#0A4933]">Tugas</span> Pejantara
                  </h2>
                  <ol className="list-decimal list-inside text-gray-600 space-y-1 text-sm md:text-base">
                    <li>
                      Membantu Pemerintah Pusat dan Daerah dalam membuat
                      kebijakan dalam bidang pembinaan, pengembangan, dan
                      pengelolaan sampah.
                    </li>
                    <li>
                      Mengkoordinasikan organisasi kemasyarakatan yang bergerak
                      di bidang lingkungan.
                    </li>
                    <li>Menyebarluaskan semangat Gerakan Pilah Sampah.</li>
                  </ol>
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
