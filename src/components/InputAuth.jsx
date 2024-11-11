import PropTypes from "prop-types";
const InputAuth = ({ type }) => {
  return (
    <input
      type={type}
      name={type}
      id={type}
      placeholder={type}
      className="input-auth bg-accent bg-opacity-15 py-4 px-3 rounded-md"
    />
  );
};

InputAuth.propTypes = {
  type: PropTypes.string.isRequired,
};

export default InputAuth;
