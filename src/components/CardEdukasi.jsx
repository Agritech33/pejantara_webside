import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const CardEdukasi = ({ title, imageUrl, id }) => {
  return (
    <>
      <div className="card-1 w-full h-48 md:h-64 relative rounded-lg flex justify-center items-center">
        <img src={imageUrl} alt="card" className="w-full h-full rounded-2xl" />
        <div className="title absolute bottom-0 p-3">
          <div className="title-container flex flex-col items-center mb-5 gap-2">
            <h3 className="text-xl font-bold text-accent px-3 py-1 bg-slate-100 bg-opacity-45 rounded-full">
              {title}
            </h3>
            <Link to={`/edukasi/${id}`}>
              <button className="py-2 px-4 text-white bg-slate-600 rounded-full hover:bg-slate-700 hover:scale-105 transition-all duration-150 ease-in-out ">
                Baca Selengkap nya
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

CardEdukasi.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  id: PropTypes.number,
};

export default CardEdukasi;
