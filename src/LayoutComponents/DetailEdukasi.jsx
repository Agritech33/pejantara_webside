import CardEdukasi from "../components/CardEdukasi";
import edukasi from "../data/edukasi";
import PropTypes from "prop-types";

const DetailEdukasi = ({ Id }) => {
  const dataEdukasi = edukasi.find((item) => item.id === parseInt(Id));

  if (!dataEdukasi) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-accent">
        <h1 className="text-center">Data Edukasi Tidak Ditemukan {Id}</h1>
      </div>
    );
  }

  return (
    <>
      <div className="container-detail-edukasi w-full py-40">
        <div className="detail-edukasi flex justify-between w-full text-accent">
          <div className="left-container px-10 w-1/4 flex flex-col gap-28">
            <h1 className="text-4xl font-bold">Temukan Lebih Banyak Di Sini</h1>
            {edukasi
              .filter((item) => item.id !== parseInt(Id))
              .map((item) => (
                <CardEdukasi
                  id={item.id}
                  key={item.id}
                  title={item.title}
                  imageUrl={item.image}
                />
              ))}
          </div>
          <div className="right-container w-3/4 border bg-secondaryAccent flex flex-col items-center justify-start px-20 gap-10 py-20 rounded-2xl">
            <img
              src={dataEdukasi.image}
              alt=""
              className="w-full h-[70vh] object-cover rounded-2xl"
            />
            <h1 className="text-6xl font-bold">{dataEdukasi.title}</h1>
            <p className="text-2xl">{dataEdukasi.description}</p>
            <div className="pengertian">
              <h3 className="text-2xl font-semibold self-start capitalize">
                {dataEdukasi.pengertian}
              </h3>
              <p className="text-2xl">{dataEdukasi.content_pengertian}</p>
            </div>
            <div className="jenis">
              <h3 className="text-2xl font-semibold self-start capitalize">
                {dataEdukasi.jenis}
              </h3>
              <p className="text-2xl">1. {dataEdukasi.content_jenis}</p>
              <p className="text-2xl">2. {dataEdukasi.content_jenis2}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DetailEdukasi.propTypes = {
  Id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DetailEdukasi;
