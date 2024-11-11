import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CardBerita = ({
  type = "primary",
  image = "primary",
  title,
  subtitle,
  imageUrl,
  id,
}) => {
  const cardType =
    type === "secondary"
      ? "card card-side bg-transparent text-accent flex-col w-full h-full flex justify-center"
      : type === "tertiary"
      ? "card card-side bg-transparent text-accent flex-col-reverse w-full h-full flex items-center justify-center"
      : "card card-side bg-transparent text-accent h-56 w-full";

  const styleImage = image === "secondary" ? "w-full h-3/4" : "w-5/12";

  const titleType =
    type === "secondary" || type === "tertiary"
      ? "card-body"
      : "card-body w-1/2";

  const styleTitle =
    type === "secondary" ? "text-3xl font-bold" : "text-xl font-bold";

  return (
    <div className={cardType}>
      <div className={titleType}>
        <h2 className={styleTitle}>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <figure className={styleImage}>
        <Link to={`/berita/${id}`}>
          <img
            src={imageUrl}
            alt="Movie"
            className="w-full h-full object-cover rounded-2xl hover:scale-95 transition-all duration-300 ease-in-out"
          />
        </Link>
      </figure>
    </div>
  );
};

CardBerita.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageUrl: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
};

export default CardBerita;
