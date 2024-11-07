import PropTypes from "prop-types";

const CardLayanan = ({ image, title, paragraph }) => {
  return (
    <div className="card-layanan xl:w-[425px] xl:h-[405px] w-96 h-72 bg-cardlayanan hover:bg-[#6C8776] hover:cursor-pointer hover:scale-105 transition-all duration-150 ease-in-out text-accent transition-all-300 rounded-2xl p-10 shadow-md shadow-black">
      <img src={image} className="xl:w-20 xl:h-20 w-14 h-14" />
      <h1 className="xl:text-2xl text-xl font-semibold my-5">{title}</h1>
      <p className="xl:text-base text-sm">{paragraph}</p>
    </div>
  );
};

CardLayanan.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
};

export default CardLayanan;
