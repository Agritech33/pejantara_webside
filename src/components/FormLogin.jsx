import PropTypes from "prop-types";
import InputAuth from "./InputAuth";

const FormLogin = ({ name_btn }) => {
  return (
    <form action="" className="flex flex-col gap-8 w-full text-xl">
      <InputAuth type="email" />
      <InputAuth type="password" />
      <button
        type="submit"
        className="button-auth w-full mb-4 bg-bgBtn py-4 px-3 rounded-md text-white"
      >
        {name_btn}
      </button>
    </form>
  );
};

FormLogin.propTypes = {
  name_btn: PropTypes.string,
};

export default FormLogin;
