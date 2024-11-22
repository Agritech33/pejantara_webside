import PropTypes from "prop-types";
import Btn from "./Btn";

const CardKegiatan = ({ title, imageUrl }) => {
  return (
    <div className="card bg-secondary shadow-xl w-[35rem] h-[40vh]">
      <figure className="w-full h-1/2">
        <img
          src={imageUrl}
          alt="Album"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body h-1/2 text-white">
        <h2 className="card-title text-sm">{title}</h2>
        <p className="text-sm">Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <Btn type="submit" value="submit">
            Read More
          </Btn>
        </div>
      </div>
    </div>
  );
};

CardKegiatan.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default CardKegiatan;
