import PropTypes from "prop-types";

const Input = ({ type, placeholder, value, readOnly }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className="input input-bordered w-full bg-secondary bg-opacity-15 py-4 px-3 rounded-md placeholder:text-accent shadow-sm  text-accent focus:outline-accent"
      readOnly={readOnly}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  readOnly: PropTypes.bool,
};

export default Input;
