import Btn from "../components/Btn";
import LayoutForm from "./LayoutForm";
import PropTypes from "prop-types";

const LaporanLayout = ({ latitude, longitude }) => {
  return (
    <div className="flex w-full h-full flex-col justify-between">
      <LayoutForm latitude={latitude} longitude={longitude} />
      <Btn type="submit" value="submit">
        Submit
      </Btn>
    </div>
  );
};

LaporanLayout.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default LaporanLayout;
