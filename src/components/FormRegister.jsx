import InputAuth from "./InputAuth";
import PropTypes from "prop-types";

const FormRegister = ({ name_btn }) => {
  return (
    <form action="" className="flex flex-col gap-8 w-full text-xl">
      <InputAuth type="Email" />
      <InputAuth type="Password" />
      <InputAuth type="Confirm Password" />
      <button
        type="submit"
        className="button-auth w-full mb-4 bg-bgBtn py-4 px-3 rounded-md text-white"
      >
        {name_btn}
      </button>
    </form>
  );
};

FormRegister.propTypes = {
  name_btn: PropTypes.string,
};

export default FormRegister;
