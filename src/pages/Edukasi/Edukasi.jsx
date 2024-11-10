import { Helmet } from "react-helmet-async";
import HeroEdukasi from "../../components/HeroEdukasi";
import FeetBackLayout from "../../LayoutComponents/FeetBackLayout";
import { Link, useParams } from "react-router-dom";
import EdukasiLayout from "../../LayoutComponents/EdukasiLayout";
const Edukasi = () => {
  const { id } = useParams();

  return (
    <div>
      {id ? (
        <>
          <Helmet>
            <title>Edukasi Page {id}</title>
          </Helmet>
          <div className="w-full h-screen flex items-center justify-center">
            <h1>Edukasi {id}</h1>
            <Link to="/edukasi/2">push me</Link>
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
                    <div className="icon-container">
                      <p>icon</p>
                      <p>subtitle</p>
                    </div>
                    <div className="icon-container">
                      <p>icon</p>
                      <p>subtitle</p>
                    </div>
                    <div className="icon-container">
                      <p>icon</p>
                      <p>subtitle</p>
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
