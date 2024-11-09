import { Helmet } from "react-helmet-async";
import HeroEdukasi from "../../components/HeroEdukasi";
import FeetBackLayout from "../../LayoutComponents/FeetBackLayout";
const Edukasi = () => {
  return (
    <div>
      <Helmet>
        <title>Edukasi Page</title>
      </Helmet>
      <HeroEdukasi />
      <div className="w-full flex items-end">
        <div className="section-2 w-full pb-20 bg-accent items-center flex flex-col">
          <div className="container-title w-full h-1/5 flex justify-center absolute">
            <div className="title bg-secondary lg:w-1/2 w-4/5 h-full translate-y-[-20%] rounded-md"></div>
          </div>
          <div className="card-container flex flex-col lg:flex-row justify-center items-center w-full md:w-11/12 lg:w-3/4 gap-5 mt-48">
            <div className="second-card-container-1 p-5 xl:p-10 space-y-5 xl:space-y-10 rounded-xl bg-slate-500 w-full">
              <div className="card-1 w-full h-48 md:h-64 relative bg-red-500 rounded-lg flex justify-center items-center">
                <div className="title absolute bottom-0">
                  <div className="title-container flex flex-col items-center mb-5">
                    <h3>cara mendaur ulang sampah</h3>
                    <button className="py-2 px-4 bg-slate-600 rounded-full">
                      baca selengkap nya
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-2 w-full h-48 md:h-64 relative bg-red-500 rounded-lg flex justify-center items-center">
                <div className="title absolute bottom-0">
                  <div className="title-container flex flex-col items-center mb-5">
                    <h3>cara mendaur ulang sampah</h3>
                    <button className="py-2 px-4 bg-slate-600 rounded-full">
                      baca selengkap nya
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="second-card-container-2 p-5 xl:p-10 space-y-5 xl:space-y-10 rounded-xl bg-slate-500 w-full">
              <div className="card-1 w-full h-48 md:h-64 relative bg-red-500 rounded-lg flex justify-center items-center">
                <div className="title absolute bottom-0">
                  <div className="title-container flex flex-col items-center mb-5">
                    <h3>cara mendaur ulang sampah</h3>
                    <button className="py-2 px-4 bg-slate-600 rounded-full">
                      baca selengkap nya
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-2 w-full h-48 md:h-64 relative bg-red-500 rounded-lg flex justify-center items-center">
                <div className="title absolute bottom-0">
                  <div className="title-container flex flex-col items-center mb-5">
                    <h3>cara mendaur ulang sampah</h3>
                    <button className="py-2 px-4 bg-slate-600 rounded-full">
                      baca selengkap nya
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="second-card-container-3 p-5 xl:p-10 space-y-5 xl:space-y-10 rounded-xl bg-slate-500 w-full">
              <div className="card-1 w-full h-48 md:h-64 relative bg-red-500 rounded-lg flex justify-center items-center">
                <div className="title absolute bottom-0">
                  <div className="title-container flex flex-col items-center mb-5">
                    <h3>cara mendaur ulang sampah</h3>
                    <button className="py-2 px-4 bg-slate-600 rounded-full">
                      baca selengkap nya
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-2 w-full h-48 md:h-64 relative bg-red-500 rounded-lg flex justify-center items-center">
                <div className="title absolute bottom-0">
                  <div className="title-container flex flex-col items-center mb-5">
                    <h3>cara mendaur ulang sampah</h3>
                    <button className="py-2 px-4 bg-slate-600 rounded-full">
                      baca selengkap nya
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3 w-full">
        <FeetBackLayout />
      </div>
    </div>
  );
};

export default Edukasi;
