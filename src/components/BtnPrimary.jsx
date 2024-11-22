import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BtnPrimary = ({ children, type = "primary" }) => {
  const buttonClass =
    type === "secondary"
      ? "btn bg-background border-2 border-primary hover:bg-primary-focus text-accent hover:text-background hover:border-primary hover:bg-primary hover:scale-105 font-semibold text-xl pb-1 text-left rounded-xl w-36 h-12"
      : "btn bg-primary border-2 border-primary text-background hover:text-accent hover:bg-background hover:border-primary hover:scale-105 font-semibold text-xl pb-1 text-left rounded-xl w-36 h-12";
  const linkClass = children === "Logout" ? "/" : `/${children}`;
  return (
    <Link to={linkClass}>
      <button type="button" className={buttonClass}>
        {children}
      </button>
    </Link>
  );
};

BtnPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
};

export default BtnPrimary;
