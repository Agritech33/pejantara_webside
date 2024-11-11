import PropTypes from "prop-types";
import berita from "../data/berita";

const DetailBeritaLayout = ({ id }) => {
  const dataBerita = berita.find((item) => item.id === parseInt(id));

  if (!dataBerita) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-accent">
        <h1 className="text-center">Data Berita Tidak Ditemukan {id}</h1>
      </div>
    );
  }
  const formatDeskripsi = (deskripsi) => {
    if (typeof deskripsi !== "string" || deskripsi.trim() === "") {
      return "";
    }

    return deskripsi.split(".").map((sentence, index, array) => (
      <span key={index}>
        {sentence.trim()}
        {sentence && "."}
        {index < array.length - 1 && (
          <>
            <br />
            <br />
          </>
        )}{" "}
      </span>
    ));
  };
  return (
    <>
      <div className="detail-berita w-full pt-[15vh] text-accent">
        <div className="container-detail-berita flex flex-col items-center px-[22%] gap-5 mb-5">
          <div className="title-container">
            <h1 className="text-6xl font-bold text-center">
              {dataBerita.title}
            </h1>
            <p className="text-xl mt-4 text-center">{dataBerita.date}</p>
          </div>
          <img
            src={dataBerita.image}
            alt={dataBerita.title}
            className="w-full h-[60vh] object-contain mt-4"
          />
          <p className="text-lg text-justify">
            {formatDeskripsi(dataBerita.deskripsi)}
          </p>
        </div>
      </div>
    </>
  );
};

DetailBeritaLayout.propTypes = {
  id: PropTypes.string,
};

export default DetailBeritaLayout;
