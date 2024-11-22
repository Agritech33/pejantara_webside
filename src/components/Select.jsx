import PropTypes from "prop-types";

const Select = ({ type, placeholder, options }) => {
  return (
    <select
      className="select select-bordered w-full bg-secondary bg-opacity-15 text-accent shadow-sm focus:outline-accent"
      defaultValue="kategori"
    >
      <option value="kategori">{placeholder}</option>
      {options.map((option, index) => (
        <option value={type} key={index}>
          {option}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
};

export default Select;
