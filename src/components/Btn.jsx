import PropTypes from "prop-types";

const Btn = ({ children, type, value }) => {
  return (
    <button
      type={type}
      value={value}
      className="btn bg-accent opacity-80 placeholder:text-white hover:bg-accent-focus text-background hover:text-white hover:border-accent hover:bg-accent hover:scale-95"
    >
      {children}
    </button>
  );
};

Btn.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Btn;
