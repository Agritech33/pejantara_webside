import { Helmet } from "react-helmet-async";
import HeroEdukasi from "../../components/HeroEdukasi";
import FeetBackLayout from "../../LayoutComponents/FeetBackLayout";
import { useParams } from "react-router-dom";
import EdukasiLayout from "../../LayoutComponents/EdukasiLayout";
import DetailEdukasi from "../../LayoutComponents/DetailEdukasi";
const Edukasi = () => {
  const { id } = useParams();

  return (
    <div>
      {id ? (
        <>
          <Helmet>
            <title>Edukasi Page </title>
          </Helmet>
          <div className="w-full flex items-center justify-center">
            <DetailEdukasi Id={id} />
          </div>
        </>
      ) : (
        <>
          <Helmet>
            <title>Edukasi Page</title>
          </Helmet>
          <HeroEdukasi />
          <div className="w-full flex items-end">
            <div className="section-2 w-full pb-20 bg-accent items-center flex flex-col">
              <div className="container-title w-full h-1/5 flex justify-center absolute">
                <div className="title bg-secondary lg:w-1/2 w-4/5 h-full translate-y-[-20%] rounded-md">
                  <div className="container w-full h-full flex justify-evenly items-center">
                    <div className="icon-container flex flex-col items-center justify-center">
                      <img
                        src="Reduce.png"
                        alt="Recycle"
                        className="w-20 h-20"
                      />
                      <p className="font-oswald text-3xl font-semibold text-white">
                        Reduce
                      </p>
                    </div>
                    <div className="icon-container flex flex-col items-center justify-center">
                      <img
                        src="Reuse.png"
                        alt="Recycle"
                        className="w-20 h-20"
                      />
                      <p className="font-oswald text-3xl font-semibold text-white">
                        Reuse
                      </p>
                    </div>
                    <div className="icon-container flex flex-col items-center justify-center">
                      <img
                        src="Recycle.png"
                        alt="Recycle"
                        className="w-20 h-20"
                      />
                      <p className="font-oswald text-3xl font-semibold text-white">
                        Recycle
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <EdukasiLayout />
            </div>
          </div>
          <div className="section-3 w-full">
            <FeetBackLayout />
          </div>
        </>
      )}
    </div>
  );
};

export default Edukasi;
