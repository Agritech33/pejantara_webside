import PropTypes from "prop-types";
import Btn from "../components/Btn";

const SettingsLayout = ({ children }) => {
  return (
    <div className="w-full flex flex-col gap-10 px-5">
      {children}
      <Btn type="submit" value="submit">
        Save Changes
      </Btn>
    </div>
  );
};

SettingsLayout.propTypes = {
  children: PropTypes.node,
};

export default SettingsLayout;
